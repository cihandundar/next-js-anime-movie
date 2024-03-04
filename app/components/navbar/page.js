"use client";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.mobileToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.list} ${isMenuOpen ? styles.showMenu : ""}`}>
          <li className={styles.link} onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link} onClick={closeMenu}>
            <Link href="/movies">Movies</Link>
          </li>
          <li className={styles.link} onClick={closeMenu}>
            <Link href="/trending">Trending</Link>
          </li>
          <li className={styles.link} onClick={closeMenu}>
            <Link href="/new-release">New Release</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
