import {DataTypes} from "sequelize";
import { sequelize } from "./connectDatabase.js";

export const Product = sequelize.define('product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10 , 2),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
  // Other model options go here
}); 









  
  