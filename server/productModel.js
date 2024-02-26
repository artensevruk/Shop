import { Sequelize , DataTypes, INTEGER, DECIMAL } from "sequelize";
import { sequelize } from "./connectDatabase.js";

export const Product =await sequelize.define('product', {
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

// export const Size = await sequelize.define('size', {
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
//     price: 300,
//     image:'image/shoes.png'
// },
//   { name: 'Майки',
//   price: 300.23 ,
//   image:'image/sticker3.png'}
// ]);

// const captains = await Size.bulkCreate([
//   { name: 'Кроссовки' ,
//     size: 38
// },
//   { name: 'Туфли',
//     size: 89
// }
// ]);