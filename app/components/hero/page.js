import styles from "./hero.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={200} height={100} />
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Search anime..." />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/anw-min.webp"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
