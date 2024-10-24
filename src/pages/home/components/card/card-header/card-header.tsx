import styles from "@/pages/home/components/card/card-header/card-header.module.css";
type CardHeaderProps = {
  image: string;
  uploaded: number;
};
const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const coverPhoto =
    props.uploaded == 0 ? `/src/assets/${props.image}` : props.image;
  return (
    <>
      <img src={coverPhoto} className={styles.cardImage} alt="card-image"></img>
    </>
  );
};

export default CardHeader;
