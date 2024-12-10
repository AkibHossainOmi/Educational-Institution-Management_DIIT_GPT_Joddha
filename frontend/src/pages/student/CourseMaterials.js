import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

const CourseMaterials = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch course materials (dummy data for now)
    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                // Simulate fetching course materials (replace this with real API call)
                const dummyMaterials = [
                    { id: 1, course: 'Math 101', title: 'Lecture Notes - Week 1', file: '/files/math-101-week1.pdf' },
                    { id: 2, course: 'CS 101', title: 'Introduction to Programming', file: '/files/cs101-intro.pdf' },
                    { id: 3, course: 'History 101', title: 'Ancient Civilizations Notes', file: '/files/history101-ancient.pdf' },
                ];
                setMaterials(dummyMaterials);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch course materials.');
                setLoading(false);
            }
        };

        fetchMaterials();
    }, []);

    const handleDownload = (file) => {
        // Simulate file download (you can implement actual file download logic here)
        window.location.href = file;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Loading course materials...</p>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar role="student" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-6">Course Materials</h1>
                {error && <div className="text-red-500 mb-4">{error}</div>}

                <div className="space-y-4">
                    {materials.length === 0 ? (
                        <p>No course materials available at the moment.</p>
                    ) : (
                        materials.map((material) => (
                            <div key={material.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <h3 className="text-xl font-semibold">{material.course}</h3>
                                <p className="text-lg">{material.title}</p>
                                <button
                                    onClick={() => handleDownload(material.file)}
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Download
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseMaterials;
