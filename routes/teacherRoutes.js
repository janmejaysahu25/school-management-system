// routes/teacherRoutes.js
const express = require('express');
const teacherController = require('../controllers/teacherController'); // Ensure this path is correct
const { validateTeacher } = require('../Validations/validationMiddleware');
const router = express.Router();

console.log("Teacher route registered");

// Use validation middleware before the controller methods
router.post('/', validateTeacher, teacherController.addTeacher);
router.get('/', teacherController.getAllTeachers);
router.get('/:id', teacherController.getTeacherById);
router.put('/:id', validateTeacher, teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;