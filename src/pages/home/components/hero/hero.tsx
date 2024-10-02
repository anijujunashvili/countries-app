import styles from "@/pages/home/components/hero/hero.module.css";

const Hero: React.FC<{ heroText: string }> = ({ heroText }) => {
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

export default Hero;
