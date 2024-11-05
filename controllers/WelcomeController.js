// controllers/WelcomeController.js
const db = require('../db');

exports.get = (req, res) => {
    res.send('Welcome to the Student API');
};