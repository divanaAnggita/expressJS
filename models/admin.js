const connect = require('../config');

exports.fetchAdminData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM admin`;

    if (where) {
      queryString = `SELECT * FROM admin WHERE ?`;
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

exports.manipulateAdminData = (data, where) => {
  return new Promise((resolve, reject) => {
    let queryData = data;
    let queryString = `INSERT INTO admin SET ?`;

    if (where) {
      queryData = [data, where];
      queryString = `UPDATE admin SET ? WHERE ?`;
    }
    connect.query(queryString, queryData, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};