export const getDataBasket = async () =>{
  const response  = await fetch('http://localhost:8081/cartProduct')
  return response.json()
 }