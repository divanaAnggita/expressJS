const connect = require('../config');

exports.fetchFiturData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM fitur`;

    if (where) {
      queryString = `SELECT * FROM fitur WHERE ?`;
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

exports.manipulateFitur = (data, where) => {
  return new Promise((resolve, reject) => {
    let queryData = data;
    let queryString = 'INSERT INTO fitur SET ?';

    if (where) {
      queryData = [data,where];
      queryString = 'UPDATE fitur SET ? WHERE ?';
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
