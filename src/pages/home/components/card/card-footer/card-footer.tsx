import styles from "@/pages/home/components/card/card-footer/card-footer.module.css";

const CardFooter: React.FC = () => {
  return (
    <>
      <div className={styles.cardFooter}>
        <button className={styles.readMore}>Read more</button>
      </div>
    </>
  );
};

export default CardFooter;
