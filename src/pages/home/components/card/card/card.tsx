import styles from "@/pages/home/components/card/card/card.module.css";
import { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.card}>{children}</div>
    </>
  );
};

export default Card;
