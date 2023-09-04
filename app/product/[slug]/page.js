
import React from "react";
import data from "../../your_output_file.json";
import ProductCard from "./productCard";
export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const product = data.find((item) => {
    return item.slug === slug;
  });
  return {
    title: `"${product.title}" - ${product.genre}`,
    description: product.description,
  };
}

export default function HelloFriend(params) {
  const slug = params.params.slug;
  const product = data.find((item) => {
    return item.slug === slug;
  });
  return (
    <ProductCard product={product} />
  )
}
