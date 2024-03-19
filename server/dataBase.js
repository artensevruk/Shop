import mysql from "mysql2/promise";

const connection = await mysql.createConnection(
  "mysql://root:12345678@localhost:3306/Shop"
);

const sql = 'SELECT * FROM `products`';

export const server = () =>{
  return connection.query(sql);
}


const sqlBasket = 'SELECT * FROM `cartProduct`';

export const serverToBasket = () =>{
  return connection.query(sqlBasket);
}







