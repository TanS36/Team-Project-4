// CoursePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";

const courseData = {
  "easy-recipes": {
    title: "Самые лёгкие рецепты дома",
    banner: "easy_recipes_banner.jpg",
    lessons: [
      { number: 1, name: "Готовим яичницу" },
      { number: 2, name: "Простой суп за 20 минут" },
    ],
  },
  "iron-usage": {
    title: "Как пользоваться утюгом",
    banner: "iron_usage_banner.jpg",
    lessons: [
      { number: 1, name: "Подготовка утюга" },
      { number: 2, name: "Как гладить рубашку" },
    ],
  },
};

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) return <h1>Курс не найден</h1>;

  return (
    <div className={styles.container}>
      <h1>{course.title}</h1>
      <img src={`/images/${course.banner}`} alt={course.title} className={styles.banner} />
      <h2>Уроки</h2>
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.number}>
            {lesson.number}. {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;