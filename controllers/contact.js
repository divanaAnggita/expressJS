const contactModels = require('../models/contact');

exports.getContact= async (req, res) => {
  const contact = await contactModels.fetchContactData();

  res.send(contact);
}; 

exports.getContactById = async (req, res) => {
  const where = {
    id_cotactUs: req.params.id,
  };

  const admin = await contactModels.fetchContactData(where);

  return res.send(admin);
};