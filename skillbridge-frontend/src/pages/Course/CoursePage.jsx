// CoursePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import taxpaying from "./ui/images/taxpaying.webp";
import easyRecipesBanner from "./ui/images/easyRecipesBanner.webp";
import ironUsageBanner from "./ui/images/ironUsageBanner.webp";
import mettingBanner from "./ui/images/mettingBanner.webp";

export const courseData = {
  "easy-recipes": {
    title: "Самые лёгкие рецепты дома",
    banner: easyRecipesBanner, 
    lessons: [
      { number: 1, name: "Готовим яичницу", path: "/course/easy-recipes/lesson-1", text:"Возьмите яйцо и сковороду" },
      { number: 2, name: "Простой суп за 20 минут", path: "/course/easy-recipes/lesson-2", text:"Бульон и овощи" },
    ],
  },
  "iron-usage": {
    title: "Как пользоваться утюгом",
    banner: ironUsageBanner,
    lessons: [
      { number: 1, name: "Подготовка утюга", path: "/course/iron-usage/lesson-1", text:"Проверьте воду"},
      { number: 2, name: "Как гладить рубашку", path: "/course/iron-usage/lesson-2", text:"Начинайте с воротника" },
    ],
  },
  "tax": {
    title: "Как платить налоги",
    banner: taxpaying,
    lessons: [
      { number: 1, name: "Виды налогов", path: "/course/tax/lesson-1", text:"1) Процентный, 2)Фиксированный" },
      { number: 2, name: "Группы налогов", path: "/course/tax/lesson-2", text: "Богачи и предприятие"},
    ],
  },
  "metting": {
    title: "Первый шаг к знакомству",
    banner: mettingBanner,
    lessons: [
      { number: 1, name: "Посмотреть в сторону человека и улыбнуться", path: "/course/metting/lesson-1", text:"Это создаст позитивную атмосферу, которая облегчит дальнейшее общение. Но не стоит злоупотреблять визуальным контактом: достаточно поддерживать взгляд лишь на несколько секунд." },
      { number: 2, name: "Проявить инициативу в разговоре", path: "/course/metting/lesson-2", text: "Можно задать вопрос, связанный с текущей ситуацией или местом, в котором люди находятся. Например, в ресторане, музее или SPA-салоне можно прокомментировать интерьер, меню или экспонаты."},
      { number: 3, name: "Обратить внимание на мимику и жесты", path: "/course/metting/lesson-3", text: "Открытая поза, поднятые брови и улыбка могут быть признаками взаимного интереса. Однако не воспринимайте каждое движение как намек или сигнал."},
      { number: 4, name: "Быть искренним и дружелюбным", path: "/course/metting/lesson-4", text: "Показывать свою подлинность и не бояться быть собой — это создаст атмосферу доверия."},
      { number: 5, name: "Позаботиться о себе", path: "/course/metting/lesson-5", text: "Уверенность в себе привлекает внимание. Одеваться нужно так, чтобы чувствовать себя комфортно и уверенно."},
    ],
  },
};

const categoryColors = {
  "easy-recipes": "#28a745",
  "iron-usage": "#d42824",
  "tax": "#007bff",
  "metting": "#f4c542",
};

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const color = categoryColors[courseId] || "#362d50"; 
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
            <li>Как варить макароны</li>
            <li>Правильное хранение овощей</li>
            <li>Польза воды</li>
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