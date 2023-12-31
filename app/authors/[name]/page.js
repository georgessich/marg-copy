"use client";
import React from "react";
import BookCard from "@/app/components/BookCard";
import AuthorCard from "@/app/components/AuthorCard";
export default async function page(params) {
  const res = await fetch("http://localhost:3000/api/main");
  const data = await res.json();
  const books = data.filter((item) => item.author_slug === params.params.name);
  console.log(books);
  return (
    <div className="container flex flex-col mx-auto">
      <AuthorCard params={params} />
      <h2 className="text-xl mx-auto">КНИГИ АВТОРА</h2>
      <div className="grid grid-cols-4 pt-16">
       
        {books.map((item) => (
          <BookCard item={item} />
        ))}
      </div>
    </div>
  );
}
