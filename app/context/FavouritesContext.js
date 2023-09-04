import React, { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (product) => {
    setFavourites([...favourites, product]);
  };

  const removeFromFavourites = (product) => {
    setFavourites(favourites.filter(item => item.slug !== product.slug));
  };

  const isProductInFavourites = (product) => {
    return favourites.some(item => item.slug === product.slug);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isProductInFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};