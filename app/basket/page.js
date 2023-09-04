"use client"
import React from "react";
import EmptyBasket from "../components/EmptyBasket";
import { useBasket } from "../context/BasketContext";

import BasketBody from "./basketbody";
export default function Basket() {
  const { basketItems } = useBasket();
  return (
    <div>
      {basketItems.length > 0 ? (
        <BasketBody items={basketItems}/>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
}
