import mysql from "mysql2/promise";

const connection = await mysql.createConnection(
  "mysql://root:12345678@localhost:3306/Shop"
);

const sql = 'SELECT * FROM `products`';

const [rows, fields] = await connection.query(sql);

console.log(rows);
console.log(fields);


