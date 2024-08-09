const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');

// Ruta protegida
router.get('/dashboard', authenticateToken, (req, res) => {
    const user = req.user;
    res.json({ message: 'Bienvenido al Dashboard del Estudiante', user });
});

module.exports = router;
