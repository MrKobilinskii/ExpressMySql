const express = require("express");
const mysql = require("mysql");

const router = express.Router();

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwdpwd",
    database: "nodemysql"
});

//Connect
db.connect(err => {
  if (err) {
      throw err;
  }
  console.log("MySql connected successfully");
});

//Get posts
router.get("/", (requst, response) => {
  let sql = `SELECT * FROM posts`;
  db.query(sql, (err, result) => {
      if (err) throw err;
      response.send(result);
  });
});

module.exports = router;