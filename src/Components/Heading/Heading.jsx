import React from "react";
import styles from "./Heading.module.css"
import greenLine from '../../Landing Page Images/green-line.png';

const Heading = ({text}) => {
    return (
        <>
            <div className={styles["heading-container"]}>
                <h1>{text}</h1>
                <img src={greenLine} alt="img" />
            </div>
        </>
    )
}

export default Heading
