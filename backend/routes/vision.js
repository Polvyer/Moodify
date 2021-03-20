const express = require('express');
const router = express.Router();

const visionController = require('../controllers/visionController');

router.post('/', visionController.getMood);

module.exports = router;