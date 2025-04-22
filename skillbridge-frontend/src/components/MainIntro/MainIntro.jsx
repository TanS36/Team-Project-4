import React from "react";
import styles from "./ui/MainIntro.module.sass";

const MainIntro = () => {

    return (
        <div className={styles.introContainer}>
            <h2 className={styles.introTitle}>Добро пожаловать в SkillBridge</h2>
            <p className={styles.introText}>
            SkillBridge — это платформа, которая помогает молодым людям справляться с повседневными жизненными задачами:
            от оплаты налогов и приготовления простых блюд до общения со специалистами в различных сферах.
            </p>
            <p className={styles.introText}>
            Здесь вы найдете полезные курсы, советы и сможете задать вопрос экспертам. Начните свой путь к самостоятельной жизни вместе с нами!
            </p>
       </div>
    );
};

export default MainIntro;