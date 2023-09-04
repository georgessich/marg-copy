import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();
export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const removeFromBasket = (product) => {
    setBasketItems(basketItems.filter((item) => item.slug !== product.slug));
  };

  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
