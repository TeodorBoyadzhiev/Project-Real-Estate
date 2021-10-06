const express = require('express');
const router = express.Router();
const { apartmentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', apartmentController.getLatestsApartments);

module.exports = router;