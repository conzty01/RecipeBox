const { Pool } = require('pg');

const pool = new Pool();


// DB
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  getClient: (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done)
    })
  }
}

// Logging DB
//module.exports = {
//  query: (text, params, callback) => {
//    const start = Date.now();
//    return pool.query(text, params, (err, res) => {
//      const duration = Date.now() - start;
//      console.log('Executed Query', {text, duration, rows: res.rowCount });
//      callback(err, res);
//    });
//  },
//}
