import styles from "@/pages/home/components/card/card-content/card-content.module.css";
import likeIcon from "@/assets/like.jpg";
import { common } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

type nameType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};
const CardContent: React.FC<{
  name: nameType;
  population: string;
  capital: capitalType;
  flag: string;
  vote: number;
  onUpVote: () => void;
}> = ({ name, population, capital, flag, vote, onUpVote }) => {
  const params = useParams();
  const lang = params.lang as keyof typeof name;
  const lng = params.lang as keyof typeof common;

  return (
    <>
      <div className="card-context">
        <p className="country-name">{name[lang]}</p>
        <p className="population">
          {common[lng].population}: <span className="bold">{population}</span>
        </p>
        <p className="capital">
          {common[lng].capital}: <span className="bold">{capital[lang]}</span>
        </p>
        <img
          src={`/src/assets/${flag}`}
          alt="flag"
          title="Flag"
          className="flag"
        />
        <div className="vote">
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
        </div>
      </div>
    </>
  );
};

export default CardContent;
