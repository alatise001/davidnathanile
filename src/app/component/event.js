'use client'
import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { Questrial } from 'next/font/google';

const questrial = Questrial({
    subsets: ['latin'],
    weight: '400',
});

const CLIENT_ID = '957584540156-vg3et6oiclsqmt779c6ds7o3armpr99g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAWztn1P8a8mOQOWSZebrdlAm__qLtFz8';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';


export default function Fvent() {

    const [isAuthorized, setIsAuthorized] = useState(false);
    // const [events, setEvents] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false)
    const [tokenClient, setTokenClient] = useState(null);


    useEffect(() => {
        const initClient = async () => {
            gapi.load('client', async () => {
                await gapi.client.init({
                    apiKey: API_KEY,
                    discoveryDocs: [DISCOVERY_DOC],
                });

                const tokenClient = google.accounts.oauth2.initTokenClient({
                    client_id: CLIENT_ID,
                    scope: SCOPES,
                    callback: (response) => handleAuthResult(response),
                });

                setTokenClient(tokenClient);
            });
        };

        const handleAuthResult = async (response) => {
            if (response.error) {
                console.error(response);
                return;
            }

            setIsAuthorized(true);
            // await listUpcomingEvents();
            await handleAddEvent();
        };

        // const listUpcomingEvents = async () => {
        //     try {
        //         const request = {
        //             calendarId: 'primary',
        //             timeMin: new Date().toISOString(),
        //             showDeleted: false,
        //             singleEvents: true,
        //             maxResults: 10,
        //             orderBy: 'startTime',
        //         };

        //         const response = await gapi.client.calendar.events.list(request);
        //         const events = response.result.items;
        //         setEvents(events || []);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // const revokeToken = () => {
        //     const token = gapi.client.getToken();
        //     if (token !== null) {
        //         google.accounts.oauth2.revoke(token.access_token);
        //         gapi.client.setToken(null);
        //         setIsAuthorized(false);
        //         setEvents([]);
        //     }
        // };

        initClient();

        // return () => {
        //     gapi.auth2.getAuthInstance().disconnect();
        // };
    }, []);

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds(2 seconds)
        function timeoutId(params) {
            setTimeout(() => {
                setIsSuccess((prev) => !prev)
            }, 7000);
        }
        // const timeoutId = 
        isSuccess && timeoutId()

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [isSuccess])

    const handleAuthClick = () => {
        if (gapi.client.getToken() === null) {
            tokenClient.requestAccessToken({ prompt: 'consent' });
        } else {
            tokenClient.requestAccessToken({ prompt: '' });
        }
    };

    const handleAddEvent = async () => {
        try {
            const event = {
                'summary': 'Google I/O 2015',
                'location': '800 Howard St., San Francisco, CA 94103',
                'description': 'A chance to hear more about Google\'s developer products.',
                'start': {
                    'dateTime': '2024-06-24T09:00:00-07:00',
                    'timeZone': 'America/Los_Angeles'
                },
                'end': {
                    'dateTime': '2024-06-24T17:00:00-07:00',
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

            const response = await gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            });

            if (response.status === 200) {
                // console.log('event succefully created');
                setIsSuccess((prev) => !prev)
            }
        } catch (error) {
            console.error('Error adding event: ', error);
        }
    };

    return (
        <div className="event d-flex">
            <div className="date-div">
                <div className="date">22</div>
                <div className="date-in-words">
                    <h4 className="day">Saturday</h4>
                    <h4 className="month">June 2024</h4>
                </div>
            </div>

            <h2 className="location-header">
                CLOUD OF GLORY [ABEOKUTA]
            </h2>
            <div className="location-div d-flex">
                <p className={`${questrial.className} location-address-pgh`}>
                    <b>EB Music Studio</b>, No 3, Idowu Street Abeokuta
                </p>
                <h4 className="event-time">3PM</h4>
            </div>
            <button className="reserve-spot-btn" onClick={handleAuthClick}>
                <span></span>
                Add to calendar
                <span></span>
            </button>

            {isSuccess &&
                <div className='d-flex'>
                    <p className={`${questrial.className} location-address-pgh`}>
                        Event Successful Added To Calender
                    </p>
                </div>
            }
        </div>
    );

}

