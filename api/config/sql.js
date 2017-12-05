const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': 'localhost',
            'port': '3306',
            'user': 'root',
            'password': 'oceantest1234',
            'database': 'digitalocean'
        });
    }
};
