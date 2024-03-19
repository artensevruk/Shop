import {DataTypes} from "sequelize";
import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel.js";

export const  Size =   sequelize.define('size', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,

  // Other model options go here
}); 

 Product.hasMany(Size)
  


// await Size.bulkCreate([
//   {   
//     size: 38,
//     productId: 13
// },
//   { 
//     size: 45,
//     productId: 14
// },
// { 
//   size: 35,
//   productId: 15
// },
// { 
//   size:  44,
//   productId: 16
// },
// { 
//   size: 46,
//   productId: 17
// },
// { 
//   size: 43,
//   productId: 18
// },
// { 
//   size: 43,
//   productId: 19
// },
// { 
//   size: 43,
//   productId: 20
// },


// ]);
