const db = require('../config/sql').connect();
const restify = require('restify');
const path = require('path');
const sql = require(path.join(__dirname, '..', 'config', 'sql'));

module.exports = function (app) {

    // Vi vil have alt indhold fra tabellen "content" i vores database
    app.get('/content', (req, res, next) => {
        let db = sql.connect();
        db.execute(`SELECT * FROM content`, [], (err, rows) => {
           if (err) {
              console.log(err);
           } else {
              res.json(200, rows);
           }
        })
        db.end();
     });
}