// CoursePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { courseData, categoryColors } from "./courseData";


const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const color = categoryColors[course.category] || "#362d50"; 
  const navigate = useNavigate();

  if (!course) return <h1>Курс не найден</h1>;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.coursecontainer}>
          <h2 style={{ color }}>{course.title}</h2>
          <img src={course.banner} alt={course.title} className={styles.banner} />
          <h3 style={{ color }}>Уроки</h3>
          <ul>
            {course.lessons.map((lesson) => (
              <li
                onClick={() => navigate(lesson.path)}
                key={lesson.number}
              >
                {lesson.number}. {lesson.name}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate("/")} className={styles.backButton}>← Назад на главную</button>
        </div>

        <aside className={styles.sidebar}>
          <h3>Похожие статьи</h3>
          <ul>
            {Object.entries(courseData)
              .filter(([key, item]) => item.category === course.category && key !== courseId)
              .map(([key, item]) => (
                <li
                  key={key}
                  onClick={() => navigate(`/course/${key}`)}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </li>
              ))}
          </ul>

          <h3 style={{ marginTop: "20px" }}>Популярные статьи</h3>
          <ul>
            {Object.entries(courseData)
              .filter(([key]) => key !== courseId)
              .map(([key, item]) => (
                <li
                  key={key}
                  onClick={() => navigate(`/course/${key}`)}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;