import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import '../styles/ManageGrades.css'; // Optional custom CSS for styling

function ManageGrades() {
    const [grades, setGrades] = useState([
        { id: 1, course: 'Mathematics 101', student: 'John Doe', grade: 'A' },
        { id: 2, course: 'Physics 101', student: 'Jane Smith', grade: 'B' },
    ]);
    const [formData, setFormData] = useState({ course: '', student: '', grade: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editGradeId, setEditGradeId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddGrade = () => {
        if (!formData.course || !formData.student || !formData.grade) {
            alert('Please fill in all fields');
            return;
        }
        setGrades([...grades, { ...formData, id: Date.now() }]);
        setFormData({ course: '', student: '', grade: '' });
        setShowModal(false);
    };

    const handleEditGrade = (grade) => {
        setFormData(grade);
        setIsEditing(true);
        setEditGradeId(grade.id);
        setShowModal(true);
    };

    const handleUpdateGrade = () => {
        setGrades(grades.map((grade) => (grade.id === editGradeId ? formData : grade)));
        setFormData({ course: '', student: '', grade: '' });
        setIsEditing(false);
        setEditGradeId(null);
        setShowModal(false);
    };

    const handleDeleteGrade = (id) => {
        setGrades(grades.filter((grade) => grade.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Manage Grades</h2>

            {/* Add New Grade Button */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add New Grade
            </Button>

            {/* Grade List Table */}
            <div className="mt-4">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Student</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((grade) => (
                            <tr key={grade.id}>
                                <td>{grade.course}</td>
                                <td>{grade.student}</td>
                                <td>{grade.grade}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleEditGrade(grade)}
                                    >
                                        Edit
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteGrade(grade.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal for Adding/Editing Grades */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Grade' : 'Add New Grade'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                placeholder="Enter course name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formStudent" className="mt-3">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="student"
                                value={formData.student}
                                onChange={handleInputChange}
                                placeholder="Enter student name"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formGrade" className="mt-3">
                            <Form.Label>Grade</Form.Label>
                            <Form.Control
                                as="select"
                                name="grade"
                                value={formData.grade}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Grade</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="F">F</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={isEditing ? handleUpdateGrade : handleAddGrade}
                    >
                        {isEditing ? 'Update Grade' : 'Add Grade'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ManageGrades;
