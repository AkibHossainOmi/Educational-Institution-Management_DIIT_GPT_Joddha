import React, { useEffect, useState } from "react";
import gapi from "gapi-script";

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Google API initialization and authentication
    const initClient = () => {
        gapi.client.init({
            apiKey: process.env.REACT_APP_GOOGLE_API_KEY, // Use your API key here
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Use your client ID here
            scope: "https://www.googleapis.com/auth/calendar.readonly",
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        }).then(() => {
            const authInstance = gapi.auth2.getAuthInstance();
            setIsSignedIn(authInstance.isSignedIn.get());
            authInstance.isSignedIn.listen(setIsSignedIn);
        });
    };

    // Handle Google API client load and sign-in
    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignOutClick = () => {
        gapi.auth2.getAuthInstance().signOut();
    };

    // Fetch Google Calendar events
    const loadCalendarEvents = () => {
        gapi.client.calendar.events
            .list({
                calendarId: "primary", // Default calendar
                timeMin: new Date().toISOString(),
                maxResults: 10,
                orderBy: "startTime",
                singleEvents: true,
            })
            .then((response) => {
                setEvents(response.result.items);
            });
    };

    useEffect(() => {
        gapi.load("client:auth2", initClient);
    }, []);

    useEffect(() => {
        if (isSignedIn) {
            loadCalendarEvents();
        }
    }, [isSignedIn]);

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Google Calendar</h2>

            {!isSignedIn ? (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleAuthClick}
                >
                    Sign in with Google
                </button>
            ) : (
                <>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4"
                        onClick={handleSignOutClick}
                    >
                        Sign Out
                    </button>
                    <div className="space-y-4">
                        {events.map((event) => (
                            <div key={event.id} className="p-4 border rounded-md shadow-sm">
                                <h3 className="text-lg font-semibold">{event.summary}</h3>
                                <p className="text-sm text-gray-500">
                                    {new Date(event.start.dateTime).toLocaleString()} -{" "}
                                    {new Date(event.end.dateTime).toLocaleString()}
                                </p>
                                <a href={event.htmlLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                    View in Google Calendar
                                </a>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CalendarComponent;
