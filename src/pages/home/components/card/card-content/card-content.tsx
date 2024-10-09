import styles from "@/pages/home/components/card/card-content/card-content.module.css";
import likeIcon from "@/assets/like.jpg";

const CardContent: React.FC<{
  name: string;
  population: string;
  capital: string;
  flag: string;
  vote: number;
  onUpVote: () => void;
}> = ({ name, population, capital, flag, vote, onUpVote }) => {
  return (
    <>
      <div className={styles.headline}>
        <span className={styles.countryName}>{name}</span>
        <span>
          <img
            src={likeIcon}
            onClick={onUpVote}
            title="Vote up"
            style={{
              width: "30px",
              verticalAlign: "bottom",
              marginRight: "10px",
              border: 0,
            }}
          />
          {vote}
        </span>
        <img src={`/src/assets/${flag}`} alt="flag" title="Flag"></img>
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
