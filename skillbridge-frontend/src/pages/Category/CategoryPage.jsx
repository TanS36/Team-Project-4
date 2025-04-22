// CategoryPage.jsx
import React from "react";
import styles from "./ui/CategoryPage.module.sass";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const CategoryPage = () => {
  
    return (
      <>
        <Header />
        <div className={styles.categorycontainer}>
          <p>Category</p>
        </div>
        <Footer />
      </>
    );
  };
  
  export default CategoryPage;