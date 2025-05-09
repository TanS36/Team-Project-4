import React from "react";
import styles from "./ui/Search.module.sass";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const CourseSearchBlock = ({ categories }) => {
  const navigate = useNavigate();
  const [coursesSnap] = useCollection(collection(db, "courses"));

  const courses = coursesSnap?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || [];

  console.log("🔥 categories from props:", categories);

  const categoriesMap = {};
  categories.forEach(cat => {
    categoriesMap[cat.id] = cat;
  });

  const popularCourses = courses.slice(0, 6);

  return (
    <div className={styles.courseContainer}>
      {popularCourses.map(course => {
        const color = categoriesMap[course.category]?.color || "#ccc";
        console.log(`course: ${course.title} | category: ${course.category} | color: ${color}`);
        return (
          <div
            key={course.id}
            className={styles.courseCard}
            style={{ borderColor: color }}
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <h3 style={{ color }}>{course.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CourseSearchBlock;

