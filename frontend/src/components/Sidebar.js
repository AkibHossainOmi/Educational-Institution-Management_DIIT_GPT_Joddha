import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
    const menuItems = {
        admin: [
            { name: 'Dashboard', link: '/admin/dashboard' },
            { name: 'Manage Users', link: '/admin/users' },
            { name: 'Courses', link: '/admin/courses' },
        ],
        faculty: [
            { name: 'Dashboard', link: '/faculty/dashboard' },
            { name: 'My Courses', link: '/faculty/courses' },
            { name: 'Attendance', link: '/faculty/attendance' },
        ],
        student: [
            { name: 'Dashboard', link: '/student/dashboard' },
            { name: 'My Courses', link: '/student/courses' },
            { name: 'Grades', link: '/student/grades' },
        ],
    };

    return (
        <div className="bg-gray-100 h-screen w-60 p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
                {menuItems[role].map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.link}
                            className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
