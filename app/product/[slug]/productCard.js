"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useFavourites } from "@/app/context/FavouritesContext";
export default function productCard({product}) {
    const { addToFavourites, removeFromFavourites, isProductInFavourites } = useFavourites();
    const isFavourite = isProductInFavourites(product) 
    const handleToggleFavourite = () => {
      if(isFavourite) {
        removeFromFavourites(product)
      } else {
        addToFavourites(product)
      }
    }
    return (
      <div className="flex items-start ">
        <Image src={product.image} width={600} height={450} />
        <div className="flex flex-col gap-y-5 w-2/4">
          <span>{product.genre}</span>
          <h1 className="text-3xl">{product.title}</h1>
          <Link href={`/authors/${product.author_slug}`} className="text-xl">
            {product.author}
          </Link>
          <span>{product.price}</span>
          <p className="text-lg">{product.description}</p>
          <button
            onClick={() => handleToggleFavourite(product)}
            
          >
            {isFavourite
              ? "Добавлено в избранное"
              : "Добавить в избранное"}
              
          </button>
          {product.price === "" ? <span>Нет в наличии</span> : <button>Добавить в корзину</button>}
        </div>
      </div>
    );
}
