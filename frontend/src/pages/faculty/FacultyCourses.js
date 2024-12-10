import React, { useState } from 'react';

const FacultyCourses = () => {
    // Sample courses data
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'Mathematics 101',
            description: 'Introduction to Mathematics',
            schedule: 'Mon, Wed, Fri - 10:00 AM to 11:00 AM',
        },
        {
            id: 2,
            name: 'Physics 201',
            description: 'Advanced Physics',
            schedule: 'Tue, Thu - 1:00 PM to 3:00 PM',
        },
        {
            id: 3,
            name: 'Computer Science 301',
            description: 'Programming Basics',
            schedule: 'Wed, Fri - 9:00 AM to 10:30 AM',
        },
    ]);

    const [search, setSearch] = useState('');

    // Filter courses based on search
    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleFileUpload = (courseId, event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(`File uploaded for Course ID ${courseId}:`, file.name);
            alert(`File "${file.name}" uploaded for course ID ${courseId}.`);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Faculty Courses</h1>
            
            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search for a course..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border rounded w-full"
                />
            </div>

            {/* Courses List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="p-4 bg-gray-100 shadow rounded">
                        <h2 className="text-xl font-bold mb-2">{course.name}</h2>
                        <p className="text-gray-700 mb-2">{course.description}</p>
                        <p className="text-gray-500 mb-4">{course.schedule}</p>

                        {/* Upload Materials */}
                        <div className="flex items-center">
                            <input
                                type="file"
                                id={`upload-${course.id}`}
                                onChange={(e) => handleFileUpload(course.id, e)}
                                className="hidden"
                            />
                            <label
                                htmlFor={`upload-${course.id}`}
                                className="cursor-pointer bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                            >
                                Upload Materials
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyCourses;
