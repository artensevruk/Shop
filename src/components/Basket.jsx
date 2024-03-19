import { useQuery } from "react-query";
import { getDataBasket } from "../api";
import { useMutation, useQueryClient } from "react-query";
import { deleteBasket } from "../api";

const ElementBasket = ({ productBasket }) => {
  const queryClient = useQueryClient();

  const deleteBasketId = () => deleteBasket(productBasket.id)

  const mutation = useMutation(deleteBasketId, {
    onSuccess: () => { 
      queryClient.refetchQueries("productBasket");
    },
  });

  return (
    <div className="basket">
      <h3>{productBasket.product.name}</h3>
      <img src={productBasket.product.image} />
      <p>{productBasket.product.price} руб</p>
      <div className="containerButton">
      <button onClick={mutation.mutate} className="buy">
        Удалить
      </button>
      <button  className="buy">
        Купить
      </button>
      </div>
    </div>
  );
};

export const Basket = () => {
  const query = useQuery("productBasket", getDataBasket);
  return (
    <div className="basketContainer">
      <div className="title">
        <h1>Корзина</h1>
      </div>
      {(query.data || []).map((productBasket) => (
        <ElementBasket key={productBasket.id} productBasket={productBasket} />
      ))}
    </div>
  );
};