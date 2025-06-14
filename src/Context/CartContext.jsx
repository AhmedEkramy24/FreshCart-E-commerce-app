import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "./UserContext";

export let CartContext = createContext();

export default function CartContextProvider({ children }) {
  let { userToken } = useContext(UserContext);
  const [cart, setCart] = useState(null);
  async function addToCart(id) {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId: id },
        {
          headers: {
            token: userToken,
          },
        }
      );
      getAllProductsFromCart();
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  }
  async function getAllProductsFromCart() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: userToken,
          },
        }
      );
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, getAllProductsFromCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
