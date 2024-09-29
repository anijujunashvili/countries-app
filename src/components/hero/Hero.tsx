import styles from "c/hero/hero.module.css";

export const Hero: React.FC<{ heroText: string }> = ({ heroText }) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <div className={styles.text}>
            {heroText}
            <br />
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
