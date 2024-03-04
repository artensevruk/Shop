import express, { request } from "express";
import cors from "cors";
import { Product } from "./productModel.js";
// import { Size } from "./productModel.js";
// import { Basket } from "./productModel.js";
import { CartProduct } from "./cartModel.js";
import { queries } from "@testing-library/react";
import { Size } from "./sizeModul.js";
import { Color } from "./colorModel.js";
import { Categories } from "./categoriesModel.js";

const port = 8081;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", async function (req, res) {
  const result = await Product.findAll({ include: [Size , Color , Categories]  })
  res.send(result);
});

app.get("/cartProduct", async function (req, res) {
  const result = await CartProduct.findAll({ include: [Product] });
  res.send(result);
});

app.delete("/cartProduct/:id" , async function(req , res){
 CartProduct.destroy({
  where:{
    id: req.params.id
  }
})
res.end()
});

app.post("/carts", async function (req, res) {
  const product = await Product.findOne({ where: { id: req.body.id } });

  CartProduct.create(
    { quantity: 1, productId: req.body.id  }
  );
});

// app.get('/size', async function(req, res) {
//   const result = await Size.findAll({raw : true})
//   res.send(result)
// });

// app.get('/basket', async function(req, res) {
//   const result = await Basket.findAll({raw : true})
//   res.send(result)
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
