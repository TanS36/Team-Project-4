import React from "react";
import styles from "../assets/Header.module.sass";

const Header = () => {

    return (
        <header className={styles.siteheader}>
            <div className={styles.siteidentity}>
                <h1><a href="/">SkillBridge</a></h1>
            </div>
            <nav className={styles.sitenavigation}>
                <ul className={styles.nav}>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/">Блог</a></li>
                    <li><a href="/login">Профиль</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;



