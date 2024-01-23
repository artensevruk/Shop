import goods from "../Catalog.json";

const listItems = goods.map((product) => (
  <div key={product.id} className="model scroll-item">
    <img src={product.image} alt="" />
    <p>{product.name}</p>
    <p>{product.price}</p>
    <p>Размеры: {product.sizes}</p>
    <button className="send">Приобрести</button>
  </div>
));

export const Catalog = () => {
  return (
    <div className="Catalog">
      <div className="Title">
        <h1>Каталог</h1>
      </div>

      <div className="container_products">{listItems}</div>
    </div>
  );
};
