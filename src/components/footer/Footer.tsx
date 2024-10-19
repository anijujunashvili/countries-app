import styles from "c/footer/footer.module.css";
import { common } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

export const Footer: React.FC = () => {
  const { lang } = useParams();
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <span>{common[lang].rights}</span>
        </div>
      </div>
    </>
  );
};
