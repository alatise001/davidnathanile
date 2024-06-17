'use client'
import React from 'react'
import { useEffect } from 'react'
import { Questrial } from 'next/font/google'

const questrial = Questrial({
    subsets: ['latin'],
    weight: "400",
})

export default function Event() {
    var gapi

    useEffect(() => {
        gapi = window.gapi;
    }, []);



    /* 
      Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "957584540156-vg3et6oiclsqmt779c6ds7o3armpr99g.apps.googleusercontent.com"
    var API_KEY = "AIzaSyAAWztn1P8a8mOQOWSZebrdlAm__qLtFz8"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    // var SCOPES = "https://www.googleapis.com/auth/calendar.events"
    var SCOPES = "https://www.googleapis.com/auth/calendar"

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {

                    const event = {
                        'summary': 'Google I/O 2015',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'A chance to hear more about Google\'s developer products.',
                        'start': {
                            'dateTime': '2025-05-28T09:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                            'dateTime': '2025-05-28T17:00:00-07:00',
                            'timeZone': 'America/Los_Angeles'
                        },
                        'recurrence': [
                            'RRULE:FREQ=DAILY;COUNT=2'
                        ],
                        'attendees': [
                            { 'email': 'lpage@example.com' },
                            { 'email': 'sbrin@example.com' }
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    };

                    const request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });

                    request.execute(function (event) {
                        appendPre('Event created: ' + event.htmlLink);
                    });
                })
        })
    }


    return (
        <div className='event d-flex'>

            <div className='date-div'>
                <div className='date'>22</div>
                <div className='date-in-words'>
                    <h4 className='day'>Saturday</h4>
                    <h4 className='month'>June 2024</h4>
                </div>
            </div>

            <div className='location-div d-flex'>
                <h2 className='location-header'>
                    CLOUD OF GLORY [ABEOKUTA]
                </h2>
                <p className={`${questrial.className} location-address-pgh`}><b>EB Music Studio</b>, No 3, Idowu Street Abeokuta</p>

                <h4 className='event-time'>
                    3PM
                </h4>
            </div>

            <button className='reserve-spot-btn' onClick={handleClick}  >RESERVE SPOT</button>

            {/* <script async defer src="https://apis.google.com/js/api.js" onLoad={gapiLoaded()}></script> */}
            {/* <script async defer src="https://accounts.google.com/gsi/client" onLoad={gisLoaded()}></script> */}

        </div>

    )
}
