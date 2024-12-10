import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

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
                        semester: 1,  // 1st Semester
                        day: "Monday",
                        time: "10:00 AM - 12:00 PM",
                        location: "Room 101",
                    },
                    {
                        courseName: "Data Structures",
                        semester: 2,  // 2nd Semester
                        day: "Tuesday",
                        time: "1:00 PM - 3:00 PM",
                        location: "Room 102",
                    },
                    {
                        courseName: "Web Development",
                        semester: 1,  // 1st Semester
                        day: "Thursday",
                        time: "9:00 AM - 11:00 AM",
                        location: "Room 103",
                    },
                    {
                        courseName: "Database Management Systems",
                        semester: 2,  // 2nd Semester
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

    // Group schedule by semester
    const groupBySemester = (schedule) => {
        return schedule.reduce((acc, classInfo) => {
            const semesterKey = `${classInfo.semester}th Semester`;  // e.g., "1st Semester"
            if (!acc[semesterKey]) {
                acc[semesterKey] = [];
            }
            acc[semesterKey].push(classInfo);
            return acc;
        }, {});
    };

    const groupedSchedule = groupBySemester(schedule);

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
                {Object.keys(groupedSchedule).map((semester) => (
                    <div key={semester} className="mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{semester}</h2>
                        <div className="space-y-6">
                            {groupedSchedule[semester].map((classInfo, index) => (
                                <div
                                    key={index}
                                    className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-blue-600">{classInfo.courseName}</h3>
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
                ))}
            </div>
        </div>
    );
};

export default StudentSchedule;
