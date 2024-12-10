const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import the user routes
const sequelize = require('./config/database'); // Import the database config

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies

// Routes
app.use('/api', userRoutes);

// Sync the database and start the server
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
