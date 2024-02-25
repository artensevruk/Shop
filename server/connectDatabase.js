import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/Shop')

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


