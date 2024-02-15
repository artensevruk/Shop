import  Express  from "express";
import {server} from "./dataBase.js";
import cors from 'cors';
const port = 8081;
const app = Express();
app.use(cors());

app.get('/products', function(req, res) {
 server().then((data) => res.send(data[0]))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})