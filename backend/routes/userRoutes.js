const express = require('express');
const authenticate = require('../middleware/authMiddleware');

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/userController');

const router = express.Router();

// Define routes
router.post('/users', createUser);
router.get('/users', authenticate, getAllUsers); // Protected route
router.get('/users/:id', authenticate, getUserById); // Protected route
router.put('/users/:id', authenticate, updateUser); // Protected route
router.delete('/users/:id', authenticate, deleteUser); // Protected route
router.post('/login', login);
console.log(require.resolve('../middleware/authMiddleware'));

module.exports = router;
