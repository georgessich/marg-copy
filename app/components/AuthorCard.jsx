'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from './AuthorCard.module.css'

function AuthorCard({ params }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const res = await fetch("http://localhost:3000/api/authors");
      const fetchedResp = await res.json();
      const slug = params.params.name;
      const authorData = fetchedResp.find((element) => element.slug === slug);
      setAuthor(authorData);
    };

    fetchAuthor();
  }, [params.params.name]);

  const [isBioVisible, setIsBioVisible] = useState(false);

  const toggleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);
  };

  if (!author) {
    return null; // или что-то другое, чтобы показать загрузку
  }

  return (
    <div className={`flex pt-8 items-start justify-center ${classes['info']}`}>
      <div className="w-1/3">
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <p className="pt-3">{author.years}</p>
      </div>

      <div className="ml-8 w-1/3">
        <Image className="mb-8" src={author.image} width={300} height={450} />

        {author.bio.length > 200 ? (
          <div>
            <button onClick={toggleBioVisibility}>
              {isBioVisible ? "Скрыть биографию" : "Показать биографию"}
            </button>
            {isBioVisible ? (
              <p className={`text-base ${classes['bio-container']}`}>{author.bio}</p>
            ) : null}
          </div>
        ) : (
          <p className="text-base">{author.bio}</p>
        )}
      </div>
    </div>
  );
}

export default AuthorCard;