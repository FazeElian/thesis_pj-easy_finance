const express = require('express');
const router = express.Router();

// User functions from controllers
const { registerUser } = require("../controllers/userController");
// const { login } = require("../controllers/userController");

router.post('/register', registerUser);
// router.post('/login', login);

module.exports = router;
