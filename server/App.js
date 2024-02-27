import  Express  from "express";
import cors from 'cors';
import { Product } from "./productModel.js";
// import { Size } from "./productModel.js";
// import { Basket } from "./productModel.js";

const port = 8081;
const app = Express();
app.use(cors());

app.get('/products', async function(req, res) {
  const result = await Product.findAll({raw : true})
  res.send(result)
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
  console.log(`Example app listening on port ${port}`)
})