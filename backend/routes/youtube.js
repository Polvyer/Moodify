const express = require('express');
const router = express.Router();

const youtubeController = require('../controllers/youtubeController');

router.get('/', youtubeController.getKey);

module.exports = router;