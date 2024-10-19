import styles from "@/pages/home/components/hero/hero.module.css";
import { common } from "@/translation/global";
import { useParams } from "react-router-dom";

const Hero: React.FC<{ heroText: string }> = ({ heroText }) => {
  const { lang } = useParams();
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <div className={styles.text}>
            {heroText}
            <br />
            <button>{common[lang].book}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
