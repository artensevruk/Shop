import data from "../Catalog.json";

const goods = data;

console.log(goods);
console.log(goods[1].name);

const listItems = goods.map((product) => (
  <div key={product.id} className="column1 scrol-item">
    <img src={product.image} alt="" />
    <p>{product.name}</p>
    <p>{product.price}</p>
    <p>Размеры : {product.sizes}</p>
    <button>Приобрести</button>
  </div>
));

export const Catalog = () => {
  return (
    <div className="Catalog">
      <div className="Title">
        <h1>Каталог</h1>
      </div>

      <div className="container_products">
        {listItems}
      </div>
    </div>
  );
};
