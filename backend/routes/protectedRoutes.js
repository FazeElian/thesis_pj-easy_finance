const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const studentController = require('../controllers/studentController');

// Rutas protegidas
router.get('/student', authenticateToken, studentController.getStudentData);

module.exports = router;
