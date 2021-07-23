const connect = require('../config');

exports.fetchProdukData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM produk`;

    if (where) {
      queryString = `SELECT * FROM produk WHERE ?`;
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

exports.manipulateProdukData = (data, where) => {
  return new Promise((resolve, reject) => {
    let queryData = data;
    let queryString = 'INSERT INTO produk SET ?';

    if (where) {
      queryData = [data,where];
      queryString = 'UPDATE produk SET ? WHERE ?';
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
