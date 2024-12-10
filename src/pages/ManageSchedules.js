import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import '../styles/ManageSchedules.css'; // Optional custom CSS for styling

function ManageSchedules() {
    const [schedules, setSchedules] = useState([
        { id: 1, course: 'Mathematics 101', date: '2024-12-10', time: '10:00 AM', location: 'Room A1' },
        { id: 2, course: 'Physics 101', date: '2024-12-12', time: '1:00 PM', location: 'Room B2' },
    ]);

    const [formData, setFormData] = useState({ course: '', date: '', time: '', location: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editScheduleId, setEditScheduleId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddSchedule = () => {
        if (!formData.course || !formData.date || !formData.time || !formData.location) {
            alert('Please fill in all fields');
            return;
        }
        setSchedules([...schedules, { ...formData, id: Date.now() }]);
        setFormData({ course: '', date: '', time: '', location: '' });
        setShowModal(false); // Close the modal after adding the schedule
    };

    const handleEditSchedule = (schedule) => {
        setFormData(schedule);
        setIsEditing(true);
        setEditScheduleId(schedule.id);
        setShowModal(true);
    };

    const handleUpdateSchedule = () => {
        setSchedules(schedules.map((schedule) => (schedule.id === editScheduleId ? formData : schedule)));
        setFormData({ course: '', date: '', time: '', location: '' });
        setIsEditing(false);
        setEditScheduleId(null);
        setShowModal(false);
    };

    const handleDeleteSchedule = (id) => {
        setSchedules(schedules.filter((schedule) => schedule.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Manage Schedules</h2>

            {/* Add New Schedule Button */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add New Schedule
            </Button>

            {/* Schedule List Table */}
            <div className="mt-4">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule) => (
                            <tr key={schedule.id}>
                                <td>{schedule.course}</td>
                                <td>{schedule.date}</td>
                                <td>{schedule.time}</td>
                                <td>{schedule.location}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleEditSchedule(schedule)}
                                    >
                                        Edit
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteSchedule(schedule.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal for Adding/Editing Schedule */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? 'Edit Schedule' : 'Add New Schedule'}</Modal.Title>
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
                            />
                        </Form.Group>

                        <Form.Group controlId="formDate" className="mt-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formTime" className="mt-3">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formLocation" className="mt-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Enter location"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={isEditing ? handleUpdateSchedule : handleAddSchedule}
                    >
                        {isEditing ? 'Update Schedule' : 'Add Schedule'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ManageSchedules;
