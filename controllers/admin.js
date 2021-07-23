const adminModels = require('../models/admin');

exports.getAllAdmins = async (req, res) => {
  const admin = await adminModels.fetchAdminData();

  return res.send(admin);
};

exports.getAdminById = async (req, res) => {
  const where = {
    id_admin: req.params.id,
  };

  const admin = await adminModels.fetchAdminData(where);

  return res.send(admin);
};

exports.postAdmin = (req, res) => {
  const {name, email, username, password} = req.body;

  const data = {
    nama: name || '',
    email: email || '',
    username: username || '',
    password: password || '',
  };

  adminModels
    .manipulateAdminData(data)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};

exports.updateAdmin = (req, res) => {
  const {name, email, username, password} = req.body;

  const data = {
    nama: name || '',
    email: email || '',
    username: username || '',
    password: password || '',
  };

  const where = {
    id_admin: req.params.id,
  };

  adminModels
    .manipulateAdminData(data, where)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};