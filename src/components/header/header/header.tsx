import HeaderMenu from "c/header/header-menu/header-menu";
import HeaderLogo from "c/header/header-logo/header-logo";
import styles from "c/header/header/header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </div>
  );
};
