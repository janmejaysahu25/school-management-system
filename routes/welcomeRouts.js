const express = require('express');
const router = express.Router();
const WelcomeController = require('../controllers/WelcomeController')
router.get('/', WelcomeController.get);
module.exports = router;