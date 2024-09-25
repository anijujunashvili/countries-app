import styles from "./header-logo.module.css";

const HeaderLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.visit}>Visit</span>
      <span className={styles.italy}>Italy</span>
    </div>
  );
};

export default HeaderLogo;
