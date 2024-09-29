import styles from "c/card/card/card.module.css";
import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>{children}</div>
      </div>
    </>
  );
};
