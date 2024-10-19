import styles from "@/pages/home/components/card/card-footer/card-footer.module.css";
import { Link, useParams } from "react-router-dom";
import { common } from "@/translation/global.ts";
type CardFooterProps = {
  countryId: string;
  DeleteCountry: () => void;
};
const CardFooter: React.FC<CardFooterProps> = ({
  countryId,
  DeleteCountry,
}) => {
  const { lang } = useParams();
  return (
    <>
      <div className={styles.cardFooter}>
        <Link to={`/${lang}/countries/${countryId}`}>
          <button className={styles.readMore}>{common[lang].read_more}</button>
        </Link>
        <button onClick={DeleteCountry} className={styles.delete}>
          {common[lang].delete}
        </button>
      </div>
    </>
  );
};

export default CardFooter;
