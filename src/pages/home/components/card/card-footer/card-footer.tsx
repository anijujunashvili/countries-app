import styles from "@/pages/home/components/card/card-footer/card-footer.module.css";
import { Link } from "react-router-dom";

const CardFooter: React.FC<{ countryId: string }> = (props) => {
  return (
    <>
      <div className={styles.cardFooter}>
        <Link to={`/countries/${props.countryId}`}>
          <button className={styles.readMore}>Read more</button>
        </Link>
      </div>
    </>
  );
};

export default CardFooter;
