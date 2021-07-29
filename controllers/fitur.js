const fiturModels = require('../models/fitur');

exports.getFitur= async (req, res) => {
  const fitur = await fiturModels.fetchFiturData();

  res.send(fitur);
}; 

exports.getFiturtById = async (req, res) => {
  const where = {
    id_fitur: req.params.id,
  };

  const fitur = await fiturModels.fetchFiturData(where);

  return res.send(fitur);
};

exports.postFitur = (req, res) => {
  const {name, link, id_admin} = req.body;

  const data = {
    name : name || '',
    link : link || '',
    id_admin : id_admin || '',
  };
 console.log(data);
 fiturModels
    .manipulateFitur(data)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    }); 
};

exports.updateFitur = (req, res) => {
  const {name, link, id_admin} = req.body;

  const data = {
    name : name || '',
    link : link || '',
    id_admin : id_admin || '',
  };

  const where = {
    id_fitur: req.params.id,
  };

  fiturModels
    .manipulateFitur(data, where)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};