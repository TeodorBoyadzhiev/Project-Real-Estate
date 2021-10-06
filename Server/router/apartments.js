const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { apartmentController, postController } = require('../controllers');


router.get('/', apartmentController.getApartments);
router.post('/', auth(), apartmentController.createApartment);

router.get('/:apartmentId', apartmentController.getApartment);
router.get('/:apartmentId/rent', auth(), apartmentController.rentApartment);
router.put('/:apartmentId', auth(), apartmentController.editApartment); 
router.delete('/:apartmentId', auth(), apartmentController.deleteApartment);

router.post('/:apartmentId', auth(), postController.createPost);



module.exports = router;