import styles from "@/pages/home/components/card/card-content/card-content.module.css";
import likeIcon from "@/assets/like.jpg";
import { common } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

const CardContent: React.FC<{
  name: string;
  population: string;
  capital: string;
  flag: string;
  vote: number;
  onUpVote: () => void;
}> = ({ name, population, capital, flag, vote, onUpVote }) => {
  const { lang } = useParams();
  return (
    <>
      <div className={styles.headline}>
        <span className={styles.countryName}>{name}</span>
        <span>
          <img
            src={likeIcon}
            onClick={onUpVote}
            title={common[lang].vote_up}
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
        {common[lang].population}: <span>{population}</span>
      </div>
      <div className={capital}>
        {common[lang].capital}: <span>{capital}</span>
      </div>
    </>
  );
};

export default CardContent;
