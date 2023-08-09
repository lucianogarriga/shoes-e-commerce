import data from "../data/products.json";
 
export const pedirProductos = () => {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

export const pedirProductosPorID = (id) => {
  return new Promise((resolve, rejected) => {
    const item = data.find((el) => el.id === id);

    if(item){
      resolve(item)
    } else {
      rejected({
        error: "No se encontro el producto"
      })
    }
  })
};