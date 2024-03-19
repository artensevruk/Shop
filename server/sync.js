import { sequelize } from "./connectDatabase.js";
import "./productModel"
import "./sizeModel";
import "./cartModel";
import  "./colorModel.js";
import  "./colorModel.js";


await sequelize.sync({alter:true})