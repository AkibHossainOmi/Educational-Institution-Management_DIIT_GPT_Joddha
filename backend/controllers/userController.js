const User = require('../models/userModel');
const handleError = require('../utils/errorHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new user
async function createUser(req, res) {
  const { name, email, password, role } = req.body;

  try {
    // Hash the password before saving the user
    const hashedPassword = password//await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword, role });
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
      user.role = role || user.role;

      // If password is provided, hash it before saving
      if (password) {
        // user.password = await bcrypt.hash(password, 10);
      }

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

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Log the entered password and stored hash for comparison
    // console.log('Entered password:', password);
    // console.log('Stored password hash:', user.password);

    // Check if password matches the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match result:', isMatch);  // Log the comparison result

    if (isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, name: user.name, role: user.role },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in .env
      { expiresIn: '1h' } // Token expiration time
    );

    // Respond with token
    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    handleError(res, error);
  }
}


module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login
};
