require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

// User
const userRoutes = require('./routes/userRoutes');

// Protected Routes
const protectedRoutes = require("./routes/protectedRoutes")

const app = express();

app.use(cors());
app.use(express.json());

// Users API route
app.use('/api/users', userRoutes);
app.use("/api/student", protectedRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch((err) => console.log(err));
