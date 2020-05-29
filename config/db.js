const mysql = require("mysql");
//mysql数据库连接配置
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eec-dev" ,//数据库名
  port:'3306'
});

db.connect(function(err){
  if(err){
    console.log('数据库连接失败')
    throw err
  }
});


function query(sql, params, callback) {
  // 使用连接池，提升性能
  db.getConnection(function (err, connection) {
    // Use the connection
    connection.query(sql, params, function (err, rows) {
      callback(err, rows);
      //释放链接
      connection.release();
    });
  });
}

module.exports=db

