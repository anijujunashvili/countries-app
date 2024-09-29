import styles from "c/footer/footer.module.css";

export const Footer: React.FC = () => {
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
