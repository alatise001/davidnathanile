'use client';
import React, { useEffect, useState } from 'react';
import { Questrial, Oswald } from 'next/font/google';
import { motion } from 'framer-motion';

const questrial = Questrial({
    subsets: ['latin'],
    weight: '400',
});

const oswald = Oswald({
    subsets: ['latin'],
    weight: '700',
});

const CLIENT_ID = '957584540156-vg3et6oiclsqmt779c6ds7o3armpr99g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAAWztn1P8a8mOQOWSZebrdlAm__qLtFz8';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

const inview = {
    start: {
        opacity: 0,
        y: 2 % 2 === 0 ? 50 : -50,
    },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
        },
    },
};

export default function Fvent() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [tokenClient, setTokenClient] = useState(null);

    useEffect(() => {
        const initClient = async () => {
            window.gapi.load('client', async () => {
                await window.gapi.client.init({
                    apiKey: API_KEY,
                    discoveryDocs: [DISCOVERY_DOC],
                });

                const tokenClient = window.google.accounts.oauth2.initTokenClient({
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
            await handleAddEvent();
        };

        initClient();
    }, []);

    useEffect(() => {
        if (isSuccess) {
            const timeoutId = setTimeout(() => {
                setIsSuccess((prev) => !prev);
            }, 7000);

            return () => clearTimeout(timeoutId);
        }
    }, [isSuccess]);

    const handleAuthClick = () => {
        if (window.gapi.client.getToken() === null) {
            tokenClient.requestAccessToken({ prompt: 'consent' });
        } else {
            tokenClient.requestAccessToken({ prompt: '' });
        }
    };

    const handleAddEvent = async () => {
        try {
            const event = {
                summary: 'Google I/O 2015',
                location: '800 Howard St., San Francisco, CA 94103',
                description: "A chance to hear more about Google's developer products.",
                start: {
                    dateTime: '2024-06-24T09:00:00-07:00',
                    timeZone: 'America/Los_Angeles',
                },
                end: {
                    dateTime: '2024-06-24T17:00:00-07:00',
                    timeZone: 'America/Los_Angeles',
                },
                recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
                attendees: [
                    { email: 'lpage@example.com' },
                    { email: 'sbrin@example.com' },
                ],
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: 'email', minutes: 24 * 60 },
                        { method: 'popup', minutes: 10 },
                    ],
                },
            };

            const response = await window.gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: event,
            });

            if (response.status === 200) {
                setIsSuccess((prev) => !prev);
            }
        } catch (error) {
            console.error('Error adding event: ', error);
        }
    };

    return (
        <motion.div
            initial="start"
            whileInView="view"
            variants={inview}
            viewport={{ once: true }}
            className="event d-flex"
        >
            <motion.div
                initial="start"
                whileInView="view"
                variants={inview}
                viewport={{ once: true }}
                className={`${oswald.className} date-div`}
            >
                <div className="date">22</div>
                <div className="date-in-words">
                    <h4 className="day">Saturday</h4>
                    <h4 className="month">June 2024</h4>
                </div>
            </motion.div>

            <motion.h2
                initial="start"
                whileInView="view"
                variants={inview}
                viewport={{ once: true }}
                className={`${oswald.className} location-header`}
            >
                CLOUD OF GLORY [ABEOKUTA]
            </motion.h2>
            <motion.div
                initial="start"
                whileInView="view"
                variants={inview}
                viewport={{ once: true }}
                className="location-div d-flex"
            >
                <motion.p
                    initial="start"
                    whileInView="view"
                    variants={inview}
                    viewport={{ once: true }}
                    className={`${questrial.className} location-address-pgh`}
                >
                    <b>EB Music Studio</b>, No 3, Idowu Street Abeokuta
                </motion.p>
                <motion.h4
                    initial="start"
                    whileInView="view"
                    variants={inview}
                    viewport={{ once: true }}
                    className={`${oswald.className} event-time`}
                >
                    3PM
                </motion.h4>
            </motion.div>
            <motion.button
                initial="start"
                whileInView="view"
                variants={inview}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className={`${oswald.className} reserve-spot-btn`}
                onClick={handleAuthClick}
            >
                <span></span>
                Add to calendar
                <span></span>
            </motion.button>

            {isSuccess && (
                <motion.div
                    initial="start"
                    whileInView="view"
                    variants={inview}
                    viewport={{ once: true }}
                    className="d-flex"
                >
                    <p className={`${questrial.className} location-address-pgh`}>
                        Event Successfully Added To Calendar
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}
