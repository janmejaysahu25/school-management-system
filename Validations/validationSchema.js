const Joi = require('joi');

const studentSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().integer().min(5).max(100).required(),
    grade: Joi.string().required(),
    contact: Joi.string().pattern(/^[0-9]+$/).required()
});

const teacherSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    subject: Joi.string().required(),
    email: Joi.string().email().required(),
    contact: Joi.string().pattern(/^[0-9]+$/).required()
});

module.exports = {
    studentSchema,
    teacherSchema
};