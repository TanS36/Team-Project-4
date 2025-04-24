// courseData.js
import taxpaying from "./ui/images/taxpaying.webp";
import easyRecipesBanner from "./ui/images/easyRecipesBanner.webp";
import ironUsageBanner from "./ui/images/ironUsageBanner.webp";
import mettingBanner from "./ui/images/mettingBanner.webp";

export const courseData = {
  "easy-recipes": {
    title: "Самые лёгкие рецепты дома",
    banner: easyRecipesBanner,
    category: "cooking",
    lessons: [
      { number: 1, name: "Готовим яичницу", path: "/course/easy-recipes/lesson-1", text: "Возьмите яйцо и сковороду" },
      { number: 2, name: "Простой суп за 20 минут", path: "/course/easy-recipes/lesson-2", text: "Бульон и овощи" },
    ],
  },
  "iron-usage": {
    title: "Как пользоваться утюгом",
    banner: ironUsageBanner,
    category: "household",
    lessons: [
      { number: 1, name: "Подготовка утюга", path: "/course/iron-usage/lesson-1", text: "Проверьте воду" },
      { number: 2, name: "Как гладить рубашку", path: "/course/iron-usage/lesson-2", text: "Начинайте с воротника" },
    ],
  },
  "tax": {
    title: "Как платить налоги",
    banner: taxpaying,
    category: "jaws",
    lessons: [
      { number: 1, name: "Виды налогов", path: "/course/tax/lesson-1", text: "1) Процентный, 2)Фиксированный" },
      { number: 2, name: "Группы налогов", path: "/course/tax/lesson-2", text: "Богачи и предприятие" },
    ],
  },
  "metting": {
    title: "Первый шаг к знакомству",
    banner: mettingBanner,
    category: "community",
    lessons: [
      { number: 1, name: "Посмотреть в сторону человека и улыбнуться", path: "/course/metting/lesson-1", text: "..." },
      { number: 2, name: "Проявить инициативу в разговоре", path: "/course/metting/lesson-2", text: "..." },
      { number: 3, name: "Обратить внимание на мимику и жесты", path: "/course/metting/lesson-3", text: "..." },
      { number: 4, name: "Быть искренним и дружелюбным", path: "/course/metting/lesson-4", text: "..." },
      { number: 5, name: "Позаботиться о себе", path: "/course/metting/lesson-5", text: "..." },
    ],
  },
  "pasta": {
    title: "Как варить макароны",
    banner: easyRecipesBanner,
    category: "cooking",
    lessons: [],
  },
  "storage": {
    title: "Правильное хранение овощей",
    banner: easyRecipesBanner,
    category: "cooking",
    lessons: [],
  },
  "water-benefits": {
    title: "Польза воды",
    banner: easyRecipesBanner,
    category: "cooking",
    lessons: [],
  },
};

export const categoryColors = {
  cooking: "#28a745",
  household: "#d42824",
  jaws: "#007bff",
  community: "#f4c542",
};
