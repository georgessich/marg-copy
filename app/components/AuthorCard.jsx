import React from "react";
import Image from "next/image";
export default async function AuthorCard({ params }) {
  const res = await fetch("http://localhost:3000/api/authors");
  const fetchedResp = await res.json();
  const slug = params.params.name;
  const author = fetchedResp.find((element) => element.slug === slug);
  return (
    <div>
      <h1 className="text-3xl">{author.name}</h1>
      <Image src={author.image} width={300} height={450}/>
      <p>{author.years}</p>
      <p>{author.bio}</p>
    </div>
  );
}
