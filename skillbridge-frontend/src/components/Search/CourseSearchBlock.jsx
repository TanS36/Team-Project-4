import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ui/Search.module.sass";
import { courseData } from "../../pages/Course/courseData";
import { categories } from "./courseUtils";

// Курсы, которые не считаются "популярными"
const excludedPopularKeys = ["pasta", "storage", "water-benefits"];

export const allCourses = Object.entries(courseData).map(([key, course]) => ({
  key,
  name: course.title,
  color: categories.find(c => c.categoryName === course.category)?.color || "#ccc",
  path: `/course/${key}`,
}));

// Только популярные (исключая некоторые курсы)
const popularCourses = allCourses.filter(course => !excludedPopularKeys.includes(course.key));

const CourseSearchBlock = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.courseContainer}>
      {popularCourses.map((course, index) => (
        <div
          key={index}
          className={styles.courseCard}
          style={{ borderColor: course.color }}
          onClick={() => navigate(course.path)}
        >
          <h3 style={{ color: course.color }}>{course.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseSearchBlock;