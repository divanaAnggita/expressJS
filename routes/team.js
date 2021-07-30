const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team');

router.get('/', teamController.getAllteam);
router.get('/:id', teamController.getteamById);
router.post('/', teamController.postteam);
router.put('/:id', teamController.updateteam);

module.exports = router;