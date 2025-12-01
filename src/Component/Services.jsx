import axios from "axios";
import { createContext, useState } from "react";

export const productContext = createContext();

function Services({ children }) {

  const [products, setProducts] = useState([]);

  const getProductData = () => {
    axios.get('http://localhost:5001/icecremes')
      .then(res => {
        if (res.status === 200) setProducts(res.data);
      })
      .catch(console.log);
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5001/icecremes/${id}`)
      .then(res => {
        if (res.status === 200) {
          alert(`${res.data.name} deleted`);
          getProductData();
        }
      });
  };

  return (
    <productContext.Provider value={{ getProductData, deleteProduct, products }}>
      {children}
    </productContext.Provider>
  );
}

export default Services;
