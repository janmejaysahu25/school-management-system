const express = require('express');
const router = express.Router();
const classAssignmentController = require('../controllers/classAssignmentController');

router.post('/', classAssignmentController.assignTeacher);

router.get('/', classAssignmentController.getClassAssignments);

router.delete('/:id', classAssignmentController.deleteClassAssignment);
router.get('/teacher/:teacherId', classAssignmentController.getAssignmentsByTeacher);


module.exports = router;