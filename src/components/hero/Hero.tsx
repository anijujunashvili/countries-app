import styles from "./hero.module.css";

type HeroProps = {
  heroText: string;
};

const Hero = (props: HeroProps) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <div className={styles.text}>
            {props.heroText}
            <br />
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
