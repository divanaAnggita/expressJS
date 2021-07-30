const connect = require('../config');

exports.fetchteamData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM team`;

    if (where) {
      queryString = `SELECT * FROM team WHERE ?`;
    }

    connect.query(queryString, where, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

exports.manipulateteamData = (data, where) => {
  return new Promise((resolve, reject) => {
    let queryData = data;
    let queryString = 'INSERT INTO team SET ?';

    if (where) {
      queryData = [data,where];
      queryString = 'UPDATE team SET ? WHERE ?';
    }
    connect.query(queryString, queryData, (error, result)=> {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  }); 
};
