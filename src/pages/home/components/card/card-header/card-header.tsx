import styles from "@/pages/home/components/card/card-header/card-header.module.css";

const CardHeader: React.FC<{ cover: string }> = (props) => {
  const coverPhoto = `src/assets/${props.cover}`;
  return (
    <>
      <img src={coverPhoto} className={styles.cardImage} alt="card-image"></img>
    </>
  );
};

export default CardHeader;
