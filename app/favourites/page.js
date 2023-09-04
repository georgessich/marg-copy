"use client";

import React from "react";
import EmptyFavourites from "../components/EmptyFavourites";
import { useFavourites } from "../context/FavouritesContext";
import BookCard from "../components/BookCard";
export default function Favourites() {
  const { favourites, removeFromFavourites } = useFavourites();
  console.log(favourites);
  return (
    <div className="flex">
      {favourites.length > 0 ? (
        favourites.map((item) => <div><BookCard item={item} /><button onClick={() => removeFromFavourites(item)}>Убрать из избранного</button></div>)
      ) : (
        <EmptyFavourites />
      )}
    </div>
  );
}
