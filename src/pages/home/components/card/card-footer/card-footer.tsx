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
  const params = useParams();
  const lang = params.lang as keyof typeof common;
  return (
    <>
      <div className="cardFooter">
        <Link to={`/${lang}/countries/${countryId}`}>
          <button className="read-more">{common[lang].read_more}</button>
        </Link>

        <button onClick={DeleteCountry} className="delete">
          {common[lang].delete}
        </button>
      </div>
    </>
  );
};

export default CardFooter;
