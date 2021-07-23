const connect = require('../config');

exports.fetchContactData = where => {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM contact_us`;

    if (where) {
      queryString = `SELECT * FROM Contact_us WHERE ?`;
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

exports.manipulateContact = (data, where) => {
  return new Promise((resolve, reject) => {
    let queryData = data;
    let queryString = 'INSERT INTO contact_us SET ?';

    if (where) {
      queryData = [data,where];
      queryString = 'UPDATE contact_us SET ? WHERE ?';
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
