import styles from "@/pages/home/components/card/card-content/card-content.module.css";
import likeIcon from "@/assets/like.jpg";
import { common } from "@/translation/global.ts";
import { useParams } from "react-router-dom";
import initialState from "../reducer/state";

const CardContent: React.FC<{
  name: string;
  population: string;
  capital: string;
  flag: string;
  vote: number;
  onUpVote: () => void;
}> = ({ name, population, capital, flag, vote, onUpVote }) => {
  const params = useParams();
  const lang = params.lang as keyof typeof initialState;
  const lng = params.lang as keyof typeof common;

  return (
    <>
      <div className={styles.headline}>
        <span className={styles.countryName}>{name[lang]}</span>
        <span>
          <img
            src={likeIcon}
            onClick={onUpVote}
            title={common[lng].vote_up}
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
        {common[lng].population}: <span>{population}</span>
      </div>
      <div className={capital}>
        {common[lng].capital}: <span>{capital[lang]}</span>
      </div>
    </>
  );
};

export default CardContent;
