'use client';
import React, { useEffect, useState } from 'react';
import { Questrial } from 'next/font/google';

const questrial = Questrial({
    subsets: ['latin'],
    weight: '400',
});

const CLIENT_ID = '957584540156-vg3et6oiclsqmt779c6ds7o3armpr99g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAWztn1P8a8mOQOWSZebrdlAm__qLtFz8';
const SCOPES = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar';

export default function Event() {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://apis.google.com/js/api.js';

        document.body.appendChild(script);

        script.onload = () => {
            if (window.gapi) handleClientLoad();
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const openSignInPopup = () => {
        window.gapi.auth2.authorize(
            { client_id: CLIENT_ID, scope: SCOPES },
            (res) => {
                if (res) {
                    if (res.access_token) {
                        localStorage.setItem('access_token', res.access_token);
                        window.gapi.client.load('calendar', 'v3', listUpcomingEvents);
                    }
                }
            }
        );
    };

    const handleClientLoad = () => {
        window.gapi.load('client:auth2', initClient);
    };

    const initClient = () => {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES,
        }).then(() => {
            const accessToken = localStorage.getItem('access_token');
            if (!accessToken) {
                openSignInPopup();
            } else {
                fetchEvents(accessToken);
            }
        });
    };

    const fetchEvents = (accessToken) => {
        fetch(
            `https://www.googleapis.com/calendar/v3/calendars/primary/events?orderBy=startTime&singleEvents=true`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
            .then((res) => {
                if (res.status !== 401) {
                    return res.json();
                } else {
                    localStorage.removeItem('access_token');
                    openSignInPopup();
                }
            })
            .then((data) => {
                if (data?.items) {
                    setEvents(formatEvents(data.items));
                }
            });
    };

    const listUpcomingEvents = () => {
        window.gapi.client.calendar.events
            .list({
                calendarId: 'primary',
                showDeleted: true,
                singleEvents: true,
            })
            .then((response) => {
                const events = response.result.items;
                if (events.length > 0) {
                    setEvents(formatEvents(events));
                }
            });
    };

    const formatEvents = (list) => {
        return list.map((item) => ({
            title: item.summary,
            start: item.start.dateTime || item.start.date,
            end: item.end.dateTime || item.end.date,
        }));
    };

    const addEvent = () => {
        const accessToken = localStorage.getItem('access_token');
        if (window.gapi.client && accessToken) {
            const event = {
                summary: 'New Event',
                location: 'Location',
                description: 'Description',
                start: {
                    dateTime: '2024-06-22T15:00:00-07:00',
                    timeZone: 'America/Los_Angeles',
                },
                end: {
                    dateTime: '2024-06-22T17:00:00-07:00',
                    timeZone: 'America/Los_Angeles',
                },
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: 'email', minutes: 24 * 60 },
                        { method: 'popup', minutes: 10 },
                    ],
                },
            };

            window.gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            }).execute((event) => {
                if (event.htmlLink) {
                    console.log('Event created: ' + event.htmlLink);
                } else {
                    console.error('Failed to create event:', event);
                }
            });
        } else {
            console.error('GAPI client not initialized or access token missing');
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
            <div className="location-div d-flex">
                <h2 className="location-header">
                    CLOUD OF GLORY [ABEOKUTA]
                </h2>
                <p className={`${questrial.className} location-address-pgh`}>
                    <b>EB Music Studio</b>, No 3, Idowu Street Abeokuta
                </p>
                <h4 className="event-time">3PM</h4>
            </div>
            <button className="reserve-spot-btn" onClick={addEvent}>
                <span></span>
                RESERVE SPOT
                <span></span>
            </button>
        </div>
    );
}
