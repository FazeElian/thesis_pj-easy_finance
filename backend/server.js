require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

// User
const userRoutes = require('./routes/userRoutes');

// Student
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Register the routes
app.use('/api/users', userRoutes);
app.use('/api/student', studentRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((err) => console.log(err));
