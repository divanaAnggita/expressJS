const express = require('express');
const router = express.Router();

const fiturController = require('../controllers/fitur');

router.get('/', fiturController.getFitur);
router.get('/:id', fiturController.getFiturtById);
router.post('/', fiturController.postFitur);
router.put('/:id', fiturController.updateFitur);
module.exports = router;