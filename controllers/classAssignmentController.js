const db = require('../db');

exports.assignTeacher = (req, res) => {
    const { student_id, teacher_id } = req.body;
    const query = 'INSERT INTO class_assignments (student_id, teacher_id) VALUES (?, ?)';
    db.query(query, [student_id, teacher_id], (err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(200).json({ message: 'Assaignment given successfully' });
    });
};

exports.getClassAssignments = (req, res) => {
    const query = `
        SELECT 
            students.name AS student_name, 
            students.age, 
            students.grade, 
            teachers.name AS teacher_name, 
            teachers.subject 
        FROM class_assignments
        JOIN students ON class_assignments.student_id = students.id
        JOIN teachers ON class_assignments.teacher_id = teachers.id;
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
exports.deleteClassAssignment = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM class_assignments WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Class assignment not found' });
        }
        res.status(200).send({ message: "Assaignment deleted Successfully" });
    });
};

exports.getAssignmentsByTeacher = (req, res) => {
    const teacherId = req.params.teacherId;

    const query = `
        SELECT COUNT(ca.student_id) AS number_of_students, ca.teacher_id, t.name AS teacher_name
        FROM class_assignments ca
        JOIN teachers t ON ca.teacher_id = t.id
        WHERE ca.teacher_id = ?
        GROUP BY ca.teacher_id;
    `;

    db.query(query, [teacherId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No students found for this teacher' });
        }

        res.status(200).json(results[0]);
    });
};