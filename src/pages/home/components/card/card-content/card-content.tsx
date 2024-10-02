import countryFlag from "@/assets/flag.png";
import styles from "@/pages/home/components/card/card-content/card-content.module.css";

const CardContent: React.FC<{
  name: string;
  population: string;
  capital: string;
}> = ({ name, population, capital }) => {
  return (
    <>
      <div className={styles.headline}>
        <span className={styles.countryName}>{name}</span>
        <img src={countryFlag} alt="flag" title="Flag"></img>
      </div>
      <div className={population}>
        Population: <span>{population}</span>
      </div>
      <div className={capital}>
        The capital: <span>{capital}</span>
      </div>
    </>
  );
};

export default CardContent;
