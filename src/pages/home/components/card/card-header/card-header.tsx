import cardImage from "@/assets/card.jpg";
import styles from "@/pages/home/components/card/card-header/card-header.module.css";

const CardHeader: React.FC = () => {
  return (
    <>
      <img src={cardImage} className={styles.cardImage} alt="card-image"></img>
    </>
  );
};

export default CardHeader;
