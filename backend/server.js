require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const path = require("path");

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

// Port config
const PORT = process.env.PORT || 5000;

// Static files from frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Manage any route different from any API, redirecting to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((err) => console.log('Error connecting to the database', err));
