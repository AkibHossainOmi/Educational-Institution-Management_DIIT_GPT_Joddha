import React from 'react';
import { useAuth } from '../pages/auth/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth(); // Access the user and logout function from context

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-2xl font-bold">EduManage</h1>
            <div className="space-x-4">
                {user ? (
                    <button
                        className="hover:bg-blue-700 px-4 py-2 rounded"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <a href="/login">
                            <button className="hover:bg-blue-700 px-4 py-2 rounded">
                                Login
                            </button>
                        </a>
                        <a href="/signup">
                            <button className="hover:bg-blue-700 px-4 py-2 rounded">
                                Sign Up
                            </button>
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
