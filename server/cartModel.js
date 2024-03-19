import { DataTypes} from "sequelize";
import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel.js";

export const CartProduct = sequelize.define('cartProduct', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  }
}, {
  timestamps: false,
  
  // Other model options go here
}); 

CartProduct.belongsTo(Product)




