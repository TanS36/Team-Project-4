import React, { useState } from "react";
import styles from "./ui/Search.module.sass";
import communityIcon from "./ui/images/community_search_icon.png";
import cookingIcon from "./ui/images/cooking_search_icon.png";
import householdIcon from "./ui/images/household_search_icon.png";
import jawIcon from "./ui/images/jaw_search_icon.png";
import CourseSearchBlock from "./CourseSearchBlock";

const categories = [
  {
    name: "Хозяйство",
    color: "#d42824",
    image: householdIcon,  //<a href="https://ru.freepik.com/icon/sustainability_17607850#fromView=search&page=1&position=29&uuid=a2438bb2-d055-4778-842d-26f7ecca5001">Источник иконки: Artifex</a>
  },
  {
    name: "Общество",
    color: "#f4c542",
    image: communityIcon,  //<a href="https://ru.freepik.com/icon/connection_16114628#fromView=search&page=1&position=60&uuid=46023098-a8bb-499a-be41-0f635f38aba2">Источник иконки: Maan Icons</a>
  },
  {
    name: "Кулинария",
    color: "#28a745",
    image: cookingIcon,  //<a href="https://ru.freepik.com/icon/cooking_11519619#fromView=search&page=1&position=2&uuid=db769310-c185-4593-b958-7d39d9609848">Источник иконки: Iconic Panda</a>
  },
  {
    name: "Налоги и Законы",
    color: "#007bff",
    image: jawIcon, //<a href="https://ru.freepik.com/icon/tax_10163425#fromView=search&page=1&position=11&uuid=33d9a05d-94f6-46c2-b256-805a277a6e20">Источник иконки: lakonicon</a>
  },
];

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
      <h2 className={styles.title}>Категории</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.categoryCard}
            style={{ borderColor: category.color }}
          >
            <div
              className={styles.imageSection}
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className={styles.textSection}>
              <h3 style={{ color: category.color }}>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>Популярные курсы</h2>
      <CourseSearchBlock />
    </div>
  );
};

export default Search;

