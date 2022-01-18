const mysql = require('mysql');
const config = require('./config.json');
module.exports = {
    /**
     * 儲存ID
     */
    saveID: (id) => {
        return new Promise((resolve, reject) => {
            const con = mysql.createConnection({  //資料庫連線
                host: config.uuidDB.host,
                user: config.uuidDB.user,
                password: config.uuidDB.password,
                database: config.uuidDB.database
            });
            const sql = `INSERT INTO \`${config.uuidDB.table}\` (\`${config.uuidDB.uuid}\`) VALUES ('${id}')`;
            con.query(sql, (err, result) => {
                if (err) {
                    resolve('404');
                } else {
                    resolve(id);
                }
            })
            con.end();
        });
    }
}