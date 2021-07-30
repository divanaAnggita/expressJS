const teamModels = require('../models/team');

exports.getAllteam = async (req, res) => {
  const team = await teamModels.fetchteamData();

  res.send(team);
}; 

exports.getteamById = async (req, res) => {
  const where = {
    id_team: req.params.id,
  };

  const team = await teamModels.fetchteamData(where);

  res.send(team);
};


exports.postteam = (req, res) => {
  const {nama, jabatan, social_media} = req.body;

  const data = {
    nama : nama || '',
    jabatan : jabatan || '',
    social_media :  social_media || '',
  };

  teamModels
    .manipulateteamData(data)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};

exports.updateteam = (req, res) => {
  const {nama, jabatan, social_media} = req.body;

  const data = {
    nama : nama || '',
    jabatan : jabatan || '',
    social_media :  social_media || '',
  };

  const where = {
    id_team: req.params.id,
  };

  teamModels
    .manipulateteamData(data, where)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
};
