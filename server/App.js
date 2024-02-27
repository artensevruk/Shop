import express, { request } from "express";
import cors from "cors";
import { Product } from "./productModel.js";
// import { Size } from "./productModel.js";
// import { Basket } from "./productModel.js";
import { CartProduct } from "./cartModel.js";
import { queries } from "@testing-library/react";

const port = 8081;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", async function (req, res) {
  const result = await Product.findAll({ raw: true });
  res.send(result);
});

app.get("/carts", async function (req, res) {
  const result = await CartProduct.findAll({ raw: true });
  res.send(result);
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
