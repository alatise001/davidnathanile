'use client'

import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '957584540156-vg3et6oiclsqmt779c6ds7o3armpr99g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAWztn1P8a8mOQOWSZebrdlAm__qLtFz8';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

const Calendar = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [events, setEvents] = useState([]);
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
            await listUpcomingEvents();
        };

        const listUpcomingEvents = async () => {
            try {
                const request = {
                    calendarId: 'primary',
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: 10,
                    orderBy: 'startTime',
                };

                const response = await gapi.client.calendar.events.list(request);
                const events = response.result.items;
                setEvents(events || []);
            } catch (error) {
                console.error(error);
            }
        };

        const revokeToken = () => {
            const token = gapi.client.getToken();
            if (token !== null) {
                google.accounts.oauth2.revoke(token.access_token);
                gapi.client.setToken(null);
                setIsAuthorized(false);
                setEvents([]);
            }
        };

        initClient();

        // return () => {
        //     gapi.auth2.getAuthInstance().disconnect();
        // };
    }, []);

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

            const response = await gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            });

            if (response.status === 200) {
                console.log('event succefully created' + event.htmlLink);
            }
        } catch (error) {
            console.error('Error adding event: ', error);
        }
    };

    return (
        <div>
            <h1>Google Calendar API Quickstart</h1>
            <button onClick={handleAuthClick}>
                {isAuthorized ? 'Refresh' : 'Authorize'}
            </button>
            <br />
            <br />
            <br />

            <button type="button" onClick={handleAddEvent}>Add Event</button>
            <br />
            <br />
            <br />

            {isAuthorized && (
                <button onClick={() => revokeToken()}>Sign Out</button>
            )}


            <pre style={{ whiteSpace: 'pre-wrap' }}>
                {events.length === 0 ? 'No events found.' : `Events:\n${events.map(event => `${event.summary} (${event.start.dateTime || event.start.date})`).join('\n')}`}
            </pre>
        </div>
    );
};

export default Calendar;
