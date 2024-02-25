import  Express  from "express";
import cors from 'cors';
import { Product } from "./productModel.js";



const port = 8081;
const app = Express();
app.use(cors());

app.get('/products', async function(req, res) {
  const result = await Product.findAll({raw : true})
  res.send(result)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})