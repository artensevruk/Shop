import { Sequelize , DataTypes, INTEGER, DECIMAL } from "sequelize";
import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel.js";

export const  Color = await  sequelize.define('color', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,

  // Other model options go here
}); 

 Product.hasMany(Color)

//  await sequelize.sync({alter:true})

// await Color.bulkCreate([
//   {   
//     color: "White",
//     productId: 13
// },
//   { 
//     color: "White",
//     productId: 14
// },
// { 
//   color: "Pink",
//   productId: 15
// },
// { 
//   color: "White",
//   productId: 16
// },
// { 
//   color: "Purple",
//   productId: 17
// },
// { 
//   color: "Purple",
//   productId: 18
// },
// { 
//   color: "Pink",
//   productId: 19
// },
// { 
//   color: "Black",
//   productId: 20
// }

// ]);

// await sequelize.sync({alter:true})