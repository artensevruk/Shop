import { Sequelize , DataTypes, INTEGER, DECIMAL } from "sequelize";
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
  }
}, {
  timestamps: false
  // Other model options go here
}); 

// export const Size = sequelize.define('product', {
//   // Model attributes are defined here
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   size: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// }, {
//   timestamps: false
//   // Other model options go here
// }); 

await sequelize.sync({alter:true})

// const captains = await Product.bulkCreate([
//   { name: 'Кроссовки' ,
//     price: 300
// },
//   { name: 'Майки',
//   price: 300.23 }
// ]);