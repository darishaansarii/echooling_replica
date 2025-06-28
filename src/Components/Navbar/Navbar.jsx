import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={styles["top-header"]}>
        <div className={styles["contact-info"]}>
          <span>
            <i className="fas fa-phone"></i> +123 456 7890
          </span>
          <span>
            <i className="fas fa-envelope"></i> support@example.com
          </span>
        </div>
        <div className={styles["social-icons"]}>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className={styles["main-header"]}>
        <div className={styles.logo}></div>

        <nav className={`${styles["nav-links"]} ${menuOpen ? styles.show : ""}`}>
          <a href="#" className={styles.active}>
            Home <i className="fa-solid fa-caret-down"></i>
          </a>
          <a href="#">
            Pages <i className="fa-solid fa-caret-down"></i>
          </a>
          <a href="#">
            Courses <i className="fa-solid fa-caret-down"></i>
          </a>
          <a href="#">
            Blog <i className="fa-solid fa-caret-down"></i>
          </a>
          <a href="#">Contact</a>

          <div className={styles["search-wrapper"]}>
            <input
              type="text"
              placeholder="Search Course"
              className={styles.searchBox}
            />
            <i className={`fa-solid fa-magnifying-glass ${styles["search-icon"]}`}></i>
          </div>
        </nav>

        <div className={styles["menu-toggle"]} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid fa-bars ${styles.menu}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
