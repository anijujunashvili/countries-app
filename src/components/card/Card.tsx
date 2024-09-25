import styles from "./card.module.css";
import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>{children}</div>
      </div>
    </>
  );
};

export default Card;
