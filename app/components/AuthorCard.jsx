import React from "react";
import Image from "next/image";
export default async function AuthorCard({ params }) {
  const res = await fetch("http://localhost:3000/api/authors");
  const fetchedResp = await res.json();
  const slug = params.params.name;
  const author = fetchedResp.find((element) => element.slug === slug);
  return (
    <div className="flex pt-8">
      <div className="w-1/4">
        <h1 className="text-3xl">{author.name}</h1>
        <p>{author.years}</p>
      </div>

      <div className="ml-8 w-2/4">
        <Image className="mb-8" src={author.image} width={300} height={450} />
        <p className="text-base">{author.bio}</p>
      </div>
    </div>
  );
}
