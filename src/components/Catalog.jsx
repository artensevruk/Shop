import goods from "../Catalog.json";
import {getData} from "../getData" 
import {useQuery} from 'react-query'



export const ElementCatalog = ({ product }) => {
  return (
    <div className="model scroll-item">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>Размеры: {product.sizes}</p>
      <button className="send">Приобрести</button>
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
