const produkModels = require('../models/produk');

exports.getAllProduk = async (req, res) => {
  const produk = await produkModels.fetchProdukData();

  res.send(produk);
}; 

exports.getProdukById = async (req, res) => {
  const where = {
    id_produk: req.params.id,
  };

  const produk = await produkModels.fetchProdukData(where);

  res.send(produk);
};

exports.postProduk = (req, res) => {
  const {id_admin, nama, deskripsi} = req.body;

  const data = {
    id_admin : id_admin || '',
    name : nama || '',
    deskripsi : deskripsi || '',
    // createdAt : moment().format('YYYY-MM-DD HH:mm:ss') || ''
  };

  produkModels
    .manipulateProdukData(data)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};

exports.updateProduk = (req, res) => {
  const {id_admin, nama, deskripsi} = req.body;

  const data = {
    id_admin : id_admin || '',
    nama : nama || '',
    deskripsi : deskripsi || '',
    // updateAt : moment().format('YYYY-MM-DD HH:mm:ss') || '',
  };

  const where = {
    id_produk: req.params.id,
  };

  produkModels
    .manipulateProdukData(data, where)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};
