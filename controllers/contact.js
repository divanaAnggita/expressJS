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

exports.postContact = (req, res) => {
  const {name, email, phone, company, subject, message, survey} = req.body;

  const data = {
    name: name || '',
    email: email || '',
    phone: phone || '',
    company: company || '',
    subject: subject || '',
    message: message || '',
    survey: survey || '',
  };

  contactModels
    .manipulateContact(data)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};

exports.updateContact = (req, res) => {
  const {name, email, phone, company, subject, message, survey} = req.body;

  const data = {
    name: name || '',
    email: email || '',
    phone: phone || '',
    company: company || '',
    subject: subject || '',
    message: message || '',
    survey: survey || '',
  };

  const where = {
    id_cotactUs: req.params.id,
  };

  contactModels
    .manipulateContact(data,where)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};