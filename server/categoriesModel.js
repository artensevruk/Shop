import {DataTypes} from "sequelize";
import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel.js";

export const  Categories = sequelize.define('categories', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,

  // Other model options go here
}); 

Product.hasMany(Categories)



// await Categories.bulkCreate([
//   {   
//     categories: "туфли",
//     productId: 13
// },
//   { 
//     categories: "туфли",
//     productId: 14
// },
// { 
//   categories: "кроссовки",
//   productId: 15
// },
// { 
//   categories: "туфли",
//   productId: 16
// },
// { 
//   categories: "кроссовки",
//   productId: 17
// },
// { 
//   categories: "ботинки",
//   productId: 18
// },
// { 
//   categories: "ботинки",
//   productId: 19
// },
// { 
//   categories: "ботинки",
//   productId: 20
// }

// ]);