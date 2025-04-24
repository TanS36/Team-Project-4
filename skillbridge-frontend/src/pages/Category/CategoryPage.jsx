import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ui/CategoryPage.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { courseData } from "../Course/courseData";
import { categories } from "../../components/Search/courseUtils";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Получаем название категории из URL
  const navigate = useNavigate();

  const categoryInfo = categories.find(cat => cat.categoryName === categoryName);

  // Фильтруем курсы по категории
  const filteredCourses = Object.entries(courseData)
    .filter(([_, course]) => course.category === categoryName)
    .map(([key, course]) => ({
      key,
      name: course.title,
      color: categoryInfo?.color || "#ccc",
      path: `/course/${key}`,
    }));

  return (
    <>
      <Header />
      <div className={styles.categorycontainer}>
        <h2 className={styles.categoryTitle}>{categoryInfo?.name || "Категория"}</h2>
        <div className={styles.courseList}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div
                key={course.key}
                className={styles.courseCard}
                style={{ borderColor: course.color }}
                onClick={() => navigate(course.path)}
              >
                <h3 style={{ color: course.color }}>{course.name}</h3>
              </div>
            ))
          ) : (
            <p>Курсы не найдены для этой категории.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
