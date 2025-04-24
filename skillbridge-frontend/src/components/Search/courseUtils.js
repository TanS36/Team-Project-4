import communityIcon from "./ui/images/community_search_icon.png";
import cookingIcon from "./ui/images/cooking_search_icon.png";
import householdIcon from "./ui/images/household_search_icon.png";
import jawIcon from "./ui/images/jaw_search_icon.png";
import { courseData } from "../../pages/Course/courseData";

export const categories = [
  {
    name: "Хозяйство",
    color: "#d42824",
    categoryName: "household",
    image: householdIcon,
  },
  {
    name: "Общество",
    color: "#f4c542",
    categoryName: "community",
    image: communityIcon,
  },
  {
    name: "Кулинария",
    color: "#28a745",
    categoryName: "cooking",
    image: cookingIcon,
  },
  {
    name: "Налоги и Законы",
    color: "#007bff",
    categoryName: "jaws",
    image: jawIcon,
  },
];

export const allCourses = Object.entries(courseData).map(([key, course]) => ({
  name: course.title,
  color: categories.find(c => c.categoryName === course.category)?.color || "#ccc",
  path: `/course/${key}`,
}));
