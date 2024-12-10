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


router.post('/users', createUser);
router.get('/users', authenticate, getAllUsers); 
router.get('/users/:id', authenticate, getUserById); 
router.put('/users/:id', authenticate, updateUser); 
router.delete('/users/:id', authenticate, deleteUser); 
router.post('/login', login);
console.log(require.resolve('../middleware/authMiddleware'));

module.exports = router;
