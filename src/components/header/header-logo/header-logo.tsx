import styles from "c/header/header-logo/header-logo.module.css";
import { Link } from "react-router-dom";

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <div className={styles.logo}>
        <span className={styles.visit}>Visit</span>
        <span className={styles.italy}>Italy</span>
      </div>
    </Link>
  );
};

export default HeaderLogo;
