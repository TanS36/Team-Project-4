import React from "react";
import styles from "./ui/Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.colMd6}`}>
            <h6>О SkillBridge</h6>
            <p className={styles.textJustify}>
              SkillBridge - это сайт для людей которым нуждается помощь по разным важным вопросам жизни и мы рады вам помочь.
            </p>
          </div>
          <div className={`${styles.col} ${styles.colMd3}`}>
            <h6>Ссылки</h6>
            <ul className={styles.footerLinks}>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">О нас</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Контакты</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Конфиденциальность</a></li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.colMd3}`}>
            <h6>Категории</h6>
            <ul className={styles.footerLinks}>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Хозяйственно</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Общественное</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Кулинария</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Налоги и Законы</a></li>
            </ul>
          </div>
        </div>
      
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.colMd8}`}>
            <p className={styles.copyrightText}>
            © 2025 {" "} <a href="/"><span className={styles.logo}>SkillBridge.</span></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
