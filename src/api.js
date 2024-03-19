const fetchData = async (url, method, data) => {
  const options = {
    method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  
  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  return response.json();
};

const host = "http://localhost:8081"

export const deleteBasket = (id) => {
  return fetchData(`${host}/cartProduct/${id}`, "DELETE");
};

export const addBasket = (product) => {
  return fetchData(`${host}/carts`, 'POST', product);
};

export const getData = async () => {
  return fetchData(`${host}/products`, 'GET');
};

export const getDataBasket = async () => {
  return fetchData(`${host}/cartProduct`, 'GET');
};