// CourseSearchBlock.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ui/Search.module.sass";

export const courses = [
  {
    name: "Самые лёгкие рецепты дома",
    color: "#28a745",
    path: "/course/easy-recipes",
  },
  {
    name: "Как пользоваться утюгом",
    color: "#d42824",
    path: "/course/iron-usage",
  },
  {
    name: "Как платить налоги",
    color: "#007bff",
    path: "/course/tax",
  },
  {
    name: "Первый шаг к знакомству",
    color: "#f4c542",
    path: "/course/metting",
  },
];

const CourseSearchBlock = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.courseContainer}>
      {courses.map((course, index) => (
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
