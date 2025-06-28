import React from "react";
import styles from "./Courses_card.module.css";

const CoursesCard = ({ img, noOfLessons, noOfStd, heading, price }) => {
  return (
    <>
      <div className={styles["courses_card"]}>
        <div className={styles["courses_img"]}>
            <img src={img} alt="" />
        </div>
        <div className={styles["div_1"]}>
            <li className={styles.red}>UX Design</li>
            <li>{noOfLessons} lessons</li>
        </div>
        <div className={styles["div_2"]}>
            <h3>{heading}</h3>
        </div>
        <div className={styles["div_3"]}>
            <span><i className="fa-solid fa-users"></i> {noOfStd} Students</span>
            <span className={styles.redBold}><i className="fa-solid fa-dollar-sign"></i>{price}</span>
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
