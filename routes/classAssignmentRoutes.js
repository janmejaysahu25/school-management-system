const express = require('express');
const router = express.Router();
const classAssignmentController = require('../controllers/classAssignmentController');

// Assign a class teacher to a student
router.post('/', classAssignmentController.assignTeacher);

// Get all class assignments
router.get('/', classAssignmentController.getClassAssignments);

// Delete a class assignment by ID
router.delete('/:id', classAssignmentController.deleteClassAssignment);

module.exports = router;