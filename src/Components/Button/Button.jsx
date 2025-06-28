import React from "react";
import styles from "./Button.module.css"

const Button = ({children, color}) => {
    return (
        <>
            <button className={styles.btn} style={{color}}>{children}</button>
        </>
    )
}

export default Button