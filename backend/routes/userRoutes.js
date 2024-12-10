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


router.post('/', createUser);
router.get('/', authenticate, getAllUsers); 
router.get('/:id', authenticate, getUserById); 
router.put('/:id', authenticate, updateUser); 
router.delete('/:id', authenticate, deleteUser); 
router.post('/login', login);
console.log(require.resolve('../middleware/authMiddleware'));

module.exports = router;
