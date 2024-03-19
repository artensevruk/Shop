export const deleteBasket = (id) => {
  return fetch(`http://localhost:8081/cartProduct/${id}`, {
    method: "DELETE", // Здесь так же могут быть GET, PUT, DELETE
    headers: {
      // Добавляем необходимые заголовки
      "Content-type": "application/json; charset=UTF-8",
    },
  })
};


export const addBasket = (product) =>{
  fetch('http://localhost:8081/carts', {
  method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(product), // Тело запроса в JSON-формате
  headers: {
    // Добавляем необходимые заголовки
    'Content-type': 'application/json; charset=UTF-8',
  },
})
}

export const getData = async () =>{
  const response  = await fetch('http://localhost:8081/products')
  return response.json()
 }


 export const getDataBasket = async () =>{
  const response  = await fetch('http://localhost:8081/cartProduct')
  return response.json()
 }