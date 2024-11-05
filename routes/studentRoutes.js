const express = require('express');
const studentController = require('../controllers/studentController');
const { validateStudent } = require('../Validations/validationMiddleware');
const router = express.Router();

console.log("Route registered");

// Define your routes
router.post('/', validateStudent, studentController.addStudent); // Ensure this points to a defined controller function
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', validateStudent, studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;