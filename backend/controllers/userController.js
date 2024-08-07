// For get password hashed
const bcrypt = require('bcrypt');

// Model
const User = require('../models/User');

// Register function
exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Creation of new object -> User
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};