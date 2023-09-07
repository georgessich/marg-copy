"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import slugify from "slugify";

export default function Authors() {
  const [uniqueAuthorNamesArray, setUniqueAuthorNamesArray] = useState([]);
  const [activeLetter, setActiveLetter] = useState("");
  const [authorGroups, setAuthorGroups] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/main")
      .then((res) => res.json())
      .then((data) => {
        const authorNamesArray = data.flatMap((item) =>
          item.author.split(",").map((name) => name.trim())
        );
        const uniqueAuthorNamesArray = [...new Set(authorNamesArray)];
        uniqueAuthorNamesArray.sort((a, b) => {
          const lastNameA = a.split(" ").pop().toLowerCase();
          const lastNameB = b.split(" ").pop().toLowerCase();
          return lastNameA.localeCompare(lastNameB);
        });

        // Группировка авторов по первой букве фамилии
        const groupedAuthors = {};
        uniqueAuthorNamesArray.forEach((author) => {
          const lastName = author.split(" ").pop();
          const firstLetter = lastName.charAt(0).toUpperCase();
          if (!groupedAuthors[firstLetter]) {
            groupedAuthors[firstLetter] = [];
          }
          groupedAuthors[firstLetter].push(author);
        });

        setUniqueAuthorNamesArray(uniqueAuthorNamesArray);
        setAuthorGroups(groupedAuthors);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

  const availableLetters = alphabet.split("").filter((letter) => {
    return uniqueAuthorNamesArray.some((item) =>
      item.split(" ").pop().startsWith(letter)
    );
  });

  const handleLetterClick = (letter) => {
    // Если текущая activeLetter равна выбранной букве, сбросьте значение
    // иначе установите activeLetter в выбранную букву
    setActiveLetter((prevLetter) => (prevLetter === letter ? "" : letter));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-7xl">Авторы</h1>
      <div className="flex items-start pt-10">
        <div className="flex flex-wrap pt-4 w-1/4">
          {alphabet.split("").map((letter) => (
            <button
              key={letter}
              className={`py-2 px-5 rounded-full ${
                activeLetter === letter
                  ? "bg-gray-500 text-white font-bold"
                  : "bg-transparent"
              } mb-2 mr-2 ${
                availableLetters.includes(letter)
                  ? ""
                  : "cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleLetterClick(letter)} // Обработка клика на букву
              disabled={!availableLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="w-3/4">
        {alphabet.split("").map((letter) => (
  availableLetters.includes(letter) ? (
    // Проверка, выбрана ли буква
    activeLetter ? (
      activeLetter === letter && (
        <div className="bg-zinc-400 p-4 mb-3 rounded-md" key={letter}>
          <h2 className="text-2xl">{letter}</h2>
          <ul className="grid grid-cols-6 gap-4 pt-2">
            {authorGroups[letter]?.map((item) => (
              <li className="text-base" key={item}>
                <Link href={`/authors/${slugify(item).toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    ) : (
      // Если буква не выбрана, отображаем всех авторов для этой буквы
      <div className="bg-zinc-400 p-4 mb-3 rounded-md" key={letter}>
        <h2 className="text-2xl">{letter}</h2>
        <ul className="grid grid-cols-6 gap-4 pt-2">
          {authorGroups[letter]?.map((item) => (
            <li className="text-base" key={item}>
              <Link href={`/authors/${slugify(item).toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  ) : null
          ))}
        </div>
      </div>
    </div>
  );
}
