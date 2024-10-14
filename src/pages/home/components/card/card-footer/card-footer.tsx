import styles from "@/pages/home/components/card/card-footer/card-footer.module.css";
import { Link } from "react-router-dom";

type CardFooterProps = {
  countryId: string;
  DeleteCountry: () => void;
};
const CardFooter: React.FC<CardFooterProps> = ({
  countryId,
  DeleteCountry,
}) => {
  return (
    <>
      <div className={styles.cardFooter}>
        <Link to={`/countries/${countryId}`}>
          <button className={styles.readMore}>Read more</button>
        </Link>
        <button onClick={DeleteCountry} className={styles.delete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default CardFooter;
