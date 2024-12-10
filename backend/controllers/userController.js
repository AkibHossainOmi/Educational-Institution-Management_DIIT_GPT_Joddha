const User = require('../models/userModel');
const handleError = require('../utils/errorHandler');

// Create a new user
async function createUser(req, res) {
  const { name, email, password, role } = req.body;

  try {
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    handleError(res, error);
  }
}

// Get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    handleError(res, error);
  }
}

// Get a user by ID
async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}

// Update a user by ID
async function updateUser(req, res) {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      user.role = role || user.role;
      
      await user.save();
      res.status(200).json({ message: 'User updated successfully', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
