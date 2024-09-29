import countryFlag from "@/assets/flag.png";
import styles from "c/card/card-content/card-content.module.css";

type CardContentProps = {
  name: string;
  population: string;
  capital: string;
};

export const CardContent = (props: CardContentProps) => {
  return (
    <>
      <div className={styles.headline}>
        <span className={styles.countryName}>{props.name}</span>
        <img src={countryFlag} alt="flag" title="Flag"></img>
      </div>
      <div className={styles.population}>
        Population: <span>{props.population}</span>
      </div>
      <div className={styles.capital}>
        The capital: <span>{props.capital}</span>
      </div>
    </>
  );
};
