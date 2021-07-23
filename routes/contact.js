const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');

router.get('/', contactController.getContact);
router.get('/:id', contactController.getContactById);
router.post('/', contactController.postContact);
router.put('/:id', contactController.updateContact);

module.exports = router;