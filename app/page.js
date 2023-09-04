// import { Items } from "./main/items";
// export default async function NamePage() {
//     const res = await fetch('http://localhost:3000/api/main')
//     const fetchedResp = await res.json()
//     const data = fetchedResp.sort((a, b) => b.year - a.year)
//   return (
//     <div className="mx-auto flex flex-col justify-center w-full px-48">

//         <Items data={data}/>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { Items } from "./main/items";

export default function NamePage() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("yearDesc");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetchData();
  }, []); // Выполняется только при первой отрисовке

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const handleCategoryClick = (category) => {
    // Если категория уже выбрана, снимите выбор
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  const resetCategory = () => {
    setSelectedCategory("");
  };

  const sortData = (type) => {
    let sortedData = [...data];
    let booksWithPrice = data.filter((item) => item.price !== "");
    if (type === "yearAsc") {
      sortedData.sort((a, b) => a.year - b.year);
    } else if (type === "yearDesc") {
      sortedData.sort((a, b) => b.year - a.year);
    } else if (type === "priceAsc") {
      sortedData = booksWithPrice.sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (type === "priceDesc") {
      sortedData = booksWithPrice.sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    }
    if (selectedCategory) {
      sortedData = sortedData.filter((item) => item.genre === selectedCategory);
    }
    return sortedData;
  };

  const parsePrice = (priceString) => {
    // Убрать пробелы и символы валюты
    const numericString = priceString.replace(/[^0-9.-]+/g, "");
    // Преобразовать строку в число
    return parseFloat(numericString);
  };

  const sortedData = sortData(sortType);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/main");
      const fetchedResp = await res.json();
      setData(fetchedResp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Получить список уникальных категорий из данных
  const uniqueCategories = [...new Set(data.map((item) => item.genre))];

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <h2>Категории:</h2>
        <ul className="flex flex-col text-base">
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              {selectedCategory === category ? (
                <>
                  <button className="font-bold" onClick={resetCategory}>{category} ✖️</button>
                </>
              ) : (
                <button onClick={() => handleCategoryClick(category)}>
                  {category}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-3/4">
        <div className="self-end">
          <select value={sortType} onChange={handleSortChange}>
            <option value="priceAsc">По цене (возрастание)</option>
            <option value="priceDesc">По цене (убывание)</option>
            <option value="yearAsc">Старое</option>
            <option value="yearDesc">Новинки</option>
          </select>
        </div>

        <Items handleCategoryClick={handleCategoryClick} className="self-end" data={sortedData} />
      </div>
    </div>
  );
}