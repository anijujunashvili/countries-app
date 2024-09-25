import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <span>all rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
