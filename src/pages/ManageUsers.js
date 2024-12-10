import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import '../styles/ManageUsers.css'; // Optional custom CSS for styling

function ManageUsers() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Faculty' },
    ]);
    const [formData, setFormData] = useState({ name: '', email: '', role: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editUserId, setEditUserId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddUser = () => {
        if (!formData.name || !formData.email || !formData.role) {
            alert('Please fill in all fields');
            return;
        }
        setUsers([...users, { ...formData, id: Date.now() }]);
        setFormData({ name: '', email: '', role: '' });
        setShowModal(false); // Close the modal after adding the user
    };

    const handleEditUser = (user) => {
        setFormData(user);
        setIsEditing(true);
        setEditUserId(user.id);
        setShowModal(true);
    };

    const handleUpdateUser = () => {
        setUsers(users.map((user) => (user.id === editUserId ? formData : user)));
        setFormData({ name: '', email: '', role: '' });
        setIsEditing(false);
        setEditUserId(null);
        setShowModal(false);
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Manage Users</h2>

            {/* Add New User Button */}
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add New User
            </Button>

            {/* User List Table */}
            <div className="mt-4">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleEditUser(user)}
                                    >
                                        Edit
                                    </Button>{' '}
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal for Adding/Editing User */}
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
                    <Modal.Title>{isEditing ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#e9ecef' }}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter name"
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formRole" className="mt-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                as="select"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Role</option>
                                <option value="Student">Student</option>
                                <option value="Faculty">Faculty</option>
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
                        onClick={isEditing ? handleUpdateUser : handleAddUser}
                    >
                        {isEditing ? 'Update User' : 'Add User'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ManageUsers;
