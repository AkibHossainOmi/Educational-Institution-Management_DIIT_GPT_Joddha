import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

const StudentSchedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch student's class schedule (dummy data)
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                // Simulate fetching schedule data (replace this with an API call later)
                const dummySchedule = [
                    {
                        courseName: "Introduction to Programming",
                        day: "Monday",
                        time: "10:00 AM - 12:00 PM",
                        location: "Room 101",
                    },
                    {
                        courseName: "Data Structures",
                        day: "Tuesday",
                        time: "1:00 PM - 3:00 PM",
                        location: "Room 102",
                    },
                    {
                        courseName: "Web Development",
                        day: "Thursday",
                        time: "9:00 AM - 11:00 AM",
                        location: "Room 103",
                    },
                    {
                        courseName: "Database Management Systems",
                        day: "Friday",
                        time: "2:00 PM - 4:00 PM",
                        location: "Room 104",
                    },
                ];
                setSchedule(dummySchedule);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch schedule.');
                setLoading(false);
            }
        };
        fetchSchedule();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Loading schedule...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar role="student" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-6">My Class Schedule</h1>
                <div className="space-y-6">
                    {schedule.map((classInfo, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-600">{classInfo.courseName}</h2>
                            <p className="text-gray-700">
                                <span className="font-bold">Day:</span> {classInfo.day}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold">Time:</span> {classInfo.time}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold">Location:</span> {classInfo.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentSchedule;
