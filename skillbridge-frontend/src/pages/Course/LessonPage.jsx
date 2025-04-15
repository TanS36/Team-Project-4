// CoursePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";
import { courseData } from "./CoursePage"; // Импорт данных курсов
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LessonPage = () => {
    const { courseId, lessonID } = useParams();
    const navigate = useNavigate();
    const course = courseData[courseId];
  
    if (!course) return <h1 className={styles.coursecontainer}>Курс не найден</h1>;

    const lesson = course.lessons.find(l => l.path.endsWith(lessonID));
    if (!lesson) return <h1 className={styles.coursecontainer}>Урок не найден</h1>;
  
    return (
      <>
        <Header />
        <div className={styles.coursecontainer}>
          <h1>{lesson.name}</h1>
          {lesson.pictire && <img src={lesson.pictire} alt={lesson.name} className={styles.banner} />}
          <p>{lesson.text}</p>
          <button onClick={() => navigate(-1)} className={styles.backButton}>← Назад</button>
        </div>
        <Footer />
      </>
    );
  };
  
  export default LessonPage;
