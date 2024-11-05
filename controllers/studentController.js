// controllers/studentController.js
const db = require('../db'); // Import your database connection

// Function to add a new student
exports.addStudent = (req, res) => {
    const { name, age, grade, contact } = req.body;
    const query = 'INSERT INTO students (name, age, grade, contact) VALUES (?, ?, ?, ?)';
    db.query(query, [name, age, grade, contact], (err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ id: result.insertId, name, age, grade, contact });
    });
};

// Function to get all students
exports.getAllStudents = (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Function to get a student by ID
exports.getStudentById = (req, res) => {
    const studentId = req.params.id;
    const query = 'SELECT * FROM students WHERE id = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Student not found' });
        res.json(results[0]);
    });
};

// Function to update a student by ID
exports.updateStudent = (req, res) => {
    const studentId = req.params.id;
    const { name, age, grade, contact } = req.body;
    const query = 'UPDATE students SET name = ?, age = ?, grade = ?, contact = ? WHERE id = ?';
    db.query(query, [name, age, grade, contact, studentId], (err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found' });
        res.json({ message: 'update students data successfully' });
    });
};

// Function to delete a student by ID
exports.deleteStudent = (req, res) => {
    const studentId = req.params.id;
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [studentId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found' });
        res.status(200).send({ message: 'delete students data successfully' });
    });
};