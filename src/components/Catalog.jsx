import { getData } from '../api';
import {useQuery} from 'react-query'
import { addBasket } from "../api";


export const ElementCatalog = ({ product }) => {

  const addBasketProducts = () => addBasket(product)


  return (
    <div className="model scroll-item">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p> Цена :{product.price}</p>
     <p>
      Размер :
      {product.sizes.map((element) =>  <option key={product.id} defaultValue={product.id}>{element.size}</option>)}
      </p>
      <div>
      <select className="select">
      Цвета :
      {product.colors.map((element) =>  <option key={product.id} defaultValue={product.id}>{element.color}</option>)}
      </select>
      </div>
      <button onClick={addBasketProducts} className="send">Добавить в корзину</button>
    </div>
  );
};

export const Catalog = () => {
  const query  = useQuery("product" , getData )
  
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
