const express = require('express');
const router = express.Router();
// const studentController = require('../controllers/studentController');
const WelcomeController = require('../controllers/WelcomeController')
router.get('/', WelcomeController.get);
module.exports = router;