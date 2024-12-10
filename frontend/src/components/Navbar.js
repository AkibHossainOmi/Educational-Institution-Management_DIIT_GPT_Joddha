import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-2xl font-bold">EduManage</h1>
            <div className="space-x-4">
                <a href="/login">
                    <button className="hover:bg-blue-700 px-4 py-2 rounded">Login</button>
                </a>
                <a href="/signup">
                    <button className="hover:bg-blue-700 px-4 py-2 rounded">Sign Up</button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
