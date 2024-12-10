const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); 
const sequelize = require('./config/database'); 
const courseRoutes = require('./routes/courseRoutes');
const facultyCoursesRoutes = require('./routes/facultyCoursesRoutes');
const cors = require('cors'); 
const app = express();
const port = 8000;

app.use(cors());


app.use(bodyParser.json()); 


app.use('/api/faculty-courses', facultyCoursesRoutes);

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
