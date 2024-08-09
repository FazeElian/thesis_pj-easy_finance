const getStudentData = (req, res) => {
    // Aquí puedes acceder al ID del usuario desde req.userId (si lo has almacenado)
    const userId = req.userId;
  
    // Lógica para obtener los datos del estudiante. Ejemplo:
    // Student.findById(userId).then(student => {
    //   res.json(student);
    // }).catch(err => {
    //   res.status(500).json({ message: 'Error al obtener los datos del estudiante' });
    // });
  
    // Por ahora, puedes devolver una respuesta de prueba
    res.json({ message: 'Datos del estudiante accesibles', userId });
};