import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link href="/movies">Movies</Link>
          </li>
          <li className={styles.link}>
            <Link href="/movies">Trending</Link>
          </li>
          <li className={styles.link}>
            <Link href="/movies">New Release</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
