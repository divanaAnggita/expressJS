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
