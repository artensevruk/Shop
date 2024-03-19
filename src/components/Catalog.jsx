import goods from "../Catalog.json";
import {getData} from "../getData" 
import {useQuery} from 'react-query'



export const ElementCatalog = ({ product }) => {

  const addBasket = () =>{
    fetch('http://localhost:8081/carts', {
    method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
    body: JSON.stringify(product), // Тело запроса в JSON-формате
    headers: {
      // Добавляем необходимые заголовки
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => console.log("Hello"))
  }



  return (
    <div className="model scroll-item">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p> Цена :{product.price}</p>
     <p>
     <select className="select">
      Размер :
      {product.sizes.map((element) =>  <option key={product.id} defaultValue={product.id}>{element.size}</option>)}
      </select>
      </p>
      <div>
      <select className="select">
      Цвета :
      {product.colors.map((element) =>  <option key={product.id} defaultValue={product.id}>{element.color}</option>)}
      </select>
      </div>
      <button onClick={addBasket} className="send">Добавить в корзину</button>
    </div>
  );
};

export const Catalog = () => {
  const query  = useQuery("product" , getData )
  console.log(query)
  return (
    <div className="Catalog">
      <div className="Title">
        <h1>Каталог</h1>
      </div>

      <div className="container_products">
        {
         (query.data || []).map((product) => (
          <ElementCatalog product={product} />
        ))}
      </div>
    </div>
  );
};
