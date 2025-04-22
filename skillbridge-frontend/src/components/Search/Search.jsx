import React, { useState, useRef, useEffect } from "react";
import styles from "./ui/Search.module.sass";
import communityIcon from "./ui/images/community_search_icon.png";
import cookingIcon from "./ui/images/cooking_search_icon.png";
import householdIcon from "./ui/images/household_search_icon.png";
import jawIcon from "./ui/images/jaw_search_icon.png";
import CourseSearchBlock from "./CourseSearchBlock";
import { courses } from "./CourseSearchBlock";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Хозяйство",
    color: "#d42824",
    categoryName: "household" ,
    image: householdIcon,
  },
  {
    name: "Общество",
    color: "#f4c542",
    categoryName: "community" ,
    image: communityIcon,
  },
  {
    name: "Кулинария",
    color: "#28a745",
    categoryName: "cooking" ,
    image: cookingIcon,
  },
  {
    name: "Налоги и Законы",
    color: "#007bff",
    categoryName: "jaws" ,
    image: jawIcon,
  },
];

  const Search = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const resultsRef = useRef();
  
    // Фильтрация по началу строки, а не по вхождению
    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().startsWith(query.toLowerCase())
    );
  
    // Для скрытия выпадающего списка при клике вне него
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (resultsRef.current && !resultsRef.current.contains(event.target)) {
          // Если нужно скрывать результаты при клике вне, можно обнулять query или добавить дополнительное состояние
          // Например: setQuery(""); 
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Выпадающий список результатов */}
        {query && (
          <div className={styles.searchResults} ref={resultsRef}>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className={styles.searchResultItem}
                  onClick={() => {
                    navigate(course.path);
                    setQuery(""); // Сбросить поиск после клика, если нужно
                  }}
                >
                  {course.name}
                </div>
              ))
            ) : (
              <div className={styles.searchResultItem}>Ничего не найдено.</div>
            )}
          </div>
        )}
      </div>
      <h2 className={styles.title}>Популярные курсы</h2>
      <CourseSearchBlock />

      <h2 className={styles.title}>Категории</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.categoryCard}
            style={{ borderColor: category.color }}
            onClick={() => navigate(category.categoryName)}
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
    </div>
  );
};

export default Search;