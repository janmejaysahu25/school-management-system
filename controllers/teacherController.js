const db = require('../db');

exports.addTeacher = (req, res) => {
    const { name, subject, email, contact } = req.body;
    const query = 'INSERT INTO teachers (name, subject, email, contact) VALUES (?, ?, ?, ?)';
    db.query(query, [name, subject, email, contact], (err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ message: 'Add teacher Successfully' });
    });
};

exports.getAllTeachers = (req, res) => {
    db.query('SELECT * FROM teachers', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getTeacherById = (req, res) => {
    const query = 'SELECT * FROM teachers WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Teacher not found' });
        res.json(results[0]);
    });
};

exports.updateTeacher = (req, res) => {
    const { name, subject, email, contact } = req.body;
    const query = 'UPDATE teachers SET name = ?, subject = ?, email = ?, contact = ? WHERE id = ?';
    db.query(query, [name, subject, email, contact, req.params.id], (err, results) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ id: req.params.id, name, subject, email, contact });
    });
};

exports.deleteTeacher = (req, res) => {
    const query = 'DELETE FROM teachers WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Teacher not found' });
        res.status(204).send();
    });
};