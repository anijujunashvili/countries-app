import HeaderMenu from "./header-menu";
import HeaderLogo from "./header-logo";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
