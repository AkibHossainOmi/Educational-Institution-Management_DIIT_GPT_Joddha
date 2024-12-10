import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import '../styles/ManageCourses.css'; // Optional custom CSS for styling

function ManageCourses() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'Mathematics 101',
            description: 'Basic Algebra and Geometry',
            duration: '3 months',
            credits: 3,
            materials: ['https://example.com/algebra.pdf', 'https://example.com/geometry.pdf'],
        },
        {
            id: 2,
            name: 'Physics 101',
            description: 'Introduction to Mechanics',
            duration: '4 months',
            credits: 4,
            materials: ['https://example.com/mechanics.pdf'],
        },
    ]);
    const [formData, setFormData] = useState({ name: '', description: '', duration: '', credits: '', materials: [] });
    const [newMaterial, setNewMaterial] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editCourseId, setEditCourseId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMaterialChange = (e) => {
        setNewMaterial(e.target.value);
    };

    const handleAddMaterial = () => {
        if (newMaterial.trim() === '') {
            alert('Please enter a valid material link or upload.');
            return;
        }
        setFormData({ ...formData, materials: [...formData.materials, newMaterial] });
        setNewMaterial('');
    };

    const handleAddCourse = () => {
        if (!formData.name || !formData.description || !formData.duration || !formData.credits) {
            alert('Please fill in all fields');
            return;
        }
        setCourses([...courses, { ...formData, id: Date.now() }]);
        setFormData({ name: '', description: '', duration: '', credits: '', materials: [] });
        setShowModal(false); // Close the modal after adding the course
    };

    const handleEditCourse = (course) => {
        setFormData(course);
        setIsEditing(true);
        setEditCourseId(course.id);
        setShowModal(true);
    };

    const handleUpdateCourse = () => {
        setCourses(courses.map((course) => (course.id === editCourseId ? formData : course)));
        setFormData({ name: '', description: '', duration: '', credits: '', materials: [] });
        setIsEditing(false);
        setEditCourseId(null);
        setShowModal(false);
    };

    const handleDeleteCourse = (id) => {
        setCourses(courses.filter((course) => course.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Manage Courses</h2>

            {/* Add New Course Button */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add New Course
            </Button>

            {/* Course List Table */}
            <div className="mt-4">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Credits</th>
                            <th>Materials</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.description}</td>
                                <td>{course.duration}</td>
                                <td>{course.credits}</td>
                                <td>
                                    <ul>
                                        {course.materials.map((material, index) => (
                                            <li key={index}>
                                                <a href={material} target="_blank" rel="noopener noreferrer">
                                                    {material}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleEditCourse(course)}
                                    >
                                        Edit
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteCourse(course.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal for Adding/Editing Course */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                style={{
                    position: 'absolute',
                    top: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1050,
                }}
            >
                <Modal.Header closeButton style={{ backgroundColor: '#f1f1f1' }}>
                    <Modal.Title>{isEditing ? 'Edit Course' : 'Add New Course'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#e9ecef' }}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter course name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Enter course description"
                            />
                        </Form.Group>

                        <Form.Group controlId="formDuration" className="mt-3">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                placeholder="e.g., 3 months"
                            />
                        </Form.Group>

                        <Form.Group controlId="formCredits" className="mt-3">
                            <Form.Label>Credits</Form.Label>
                            <Form.Control
                                type="number"
                                name="credits"
                                value={formData.credits}
                                onChange={handleInputChange}
                                placeholder="Enter credits"
                            />
                        </Form.Group>

                        {/* Upload Course Material Section */}
                        <Form.Group controlId="formMaterial" className="mt-3">
                            <Form.Label>Add Course Material (Link)</Form.Label>
                            <Form.Control
                                type="url"
                                value={newMaterial}
                                onChange={handleMaterialChange}
                                placeholder="Enter material link"
                            />
                            <Button
                                variant="secondary"
                                className="mt-2"
                                onClick={handleAddMaterial}
                            >
                                Add Material
                            </Button>
                        </Form.Group>

                        <ul className="mt-3">
                            {formData.materials.map((material, index) => (
                                <li key={index}>
                                    <a href={material} target="_blank" rel="noopener noreferrer">
                                        {material}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={isEditing ? handleUpdateCourse : handleAddCourse}
                    >
                        {isEditing ? 'Update Course' : 'Add Course'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ManageCourses;
