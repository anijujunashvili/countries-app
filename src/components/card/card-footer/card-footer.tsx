import styles from "c/card/card-footer/card-footer.module.css";

export const CardFooter: React.FC = () => {
  return (
    <>
      <div className={styles.cardFooter}>
        <button className={styles.readMore}>Read more</button>
      </div>
    </>
  );
};
