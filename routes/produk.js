const express = require('express');
const router = express.Router();

const produkController = require('../controllers/produk');

router.get('/', produkController.getAllProduk);
router.get('/:id', produkController.getProdukById);
router.post('/', produkController.postProduk);
router.put('/:id', produkController.updateProduk);

module.exports = router;