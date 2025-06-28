import React from "react";
import styles from "./Campus_card.module.css";

const CampusCard = ({ image, heading, para, bool }) => {
  return (
    <>
      <div className={styles.boxCamp}>
        <div className={styles["box-1"]}>
          <img src={image} className={styles.icon} alt="" />
          <div className={styles.contentCampus}>
            <h4 className={styles.campusHeading}>{heading}</h4>
            <p className={styles.campusPara}>{para}</p>
          </div>
        </div>
        <span className={styles.right_btn}>
          <i className={`fa-solid fa-arrow-right ${styles.arrowBtn}`}></i>
        </span>
      </div>
      {bool && <hr />}
    </>
  );
};

export default CampusCard;
