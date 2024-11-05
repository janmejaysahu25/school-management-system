const { studentSchema, teacherSchema } = require('./validationSchema');

// Middleware to validate student data
function validateStudent(req, res, next) {
    const { error } = studentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

// Middleware to validate teacher data
function validateTeacher(req, res, next) {
    const { error } = teacherSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

module.exports = {
    validateStudent,
    validateTeacher
};