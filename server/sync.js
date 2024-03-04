import { sequelize } from "./connectDatabase.js";
import { Product } from "./productModel"
import { Size } from "./sizeModel";
import { CartProduct } from "./cartModel";
import { Color } from "./colorModel.js";
import { Categories } from "./colorModel.js";


await sequelize.sync({alter:true})