#!/bin/bash

# Define the root directory of the backend
BACKEND_DIR="backend"

# Create the main project directory
mkdir -p $BACKEND_DIR

# Create subdirectories for configuration, controllers, middlewares, models, routes, utils
mkdir -p $BACKEND_DIR/config
mkdir -p $BACKEND_DIR/controllers
mkdir -p $BACKEND_DIR/middlewares
mkdir -p $BACKEND_DIR/models
mkdir -p $BACKEND_DIR/routes
mkdir -p $BACKEND_DIR/utils

# Create an empty .env file for environment variables
touch $BACKEND_DIR/.env

# Create the main app.js file
cat <<EOL > $BACKEND_DIR/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

module.exports = app;
EOL

# Create the server.js file
cat <<EOL > $BACKEND_DIR/server.js
const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    app.listen(PORT, () => console.log(\`Server running on http://localhost:\${PORT}\`));
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();
EOL

# Create the config/db.js file
cat <<EOL > $BACKEND_DIR/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
EOL

# Create the controllers/userController.js file
cat <<EOL > $BACKEND_DIR/controllers/userController.js
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../utils/jwtUtils');

// User Signup
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name, email, role } });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = generateToken(user.id, user.role);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Error during login' });
  }
};
EOL

# Create the middlewares/authMiddleware.js file
cat <<EOL > $BACKEND_DIR/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.authorizeRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Forbidden: Access denied' });
  }
  next();
};
EOL

# Create the models/user.js file
cat <<EOL > $BACKEND_DIR/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Faculty', 'Student'),
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

module.exports = User;
EOL

# Create the routes/userRoutes.js file
cat <<EOL > $BACKEND_DIR/routes/userRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/userController');
const { authenticate, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

// Public Routes
router.post('/signup', signup);
router.post('/login', login);

// Protected Routes (example)
router.get('/admin', authenticate, authorizeRoles(['Admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;
EOL

# Create the utils/jwtUtils.js file
cat <<EOL > $BACKEND_DIR/utils/jwtUtils.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
EOL

# Set execute permissions for the script
chmod +x setup_backend_structure.sh

echo "Backend structure created successfully!"
