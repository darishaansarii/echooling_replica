import React from "react";
import styles from "./Academic_card.module.css";

const Academic_card = ({ message, image }) => {
  return (
    <>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.gradientOverlay}></div>
        <h3 className={styles.cardHeading}>{message}</h3>
        <h5 className={styles.learnMore}>
          Learn More <i className="fa-solid fa-arrow-right"></i>
        </h5>
      </div>
    </>
  );
};

export default Academic_card;
