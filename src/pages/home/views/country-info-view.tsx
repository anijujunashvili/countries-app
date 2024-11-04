import { useParams } from "react-router-dom";
import { common } from "@/translation/global.ts";
import { useState, useEffect } from "react";
import axios from "axios";

type nameType = {
  ka: string;
  en: string;
};
type introType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};

type countryInfoType = {
  id: string;
  name: nameType;
  capital: capitalType;
  population: string;
  flag: string;
  intro: introType;
  image: string;
  uploaded?: number;
  vote?: number;
  disabled: number;
};

function CountryInfoView() {
  const [countryInfo, setCountryInfo] = useState<countryInfoType | null>(null);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/countriesList/${id}`)
      .then((res) => {
        setCountryInfo(res.data);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      })
      .finally(() => {
        console.log("finally I am here");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return <h1>Country not found!</h1>;
  }

  const lang = params.lang as keyof typeof common;

  const imgPath = countryInfo?.uploaded == 0 ? "/src/assets/" : "";
  return (
    <>
      <div
        className="container"
        style={{ height: "80vh", alignItems: "start", marginTop: "50px" }}
      >
        <img
          src={`${imgPath}${countryInfo?.image}`}
          style={{ width: "300px", marginRight: "30px" }}
        />

        <div style={{ color: "#474545" }}>
          <h2 style={{ textAlign: "left", marginTop: "0px" }}>
            {countryInfo?.name[lang]}
          </h2>
          {countryInfo?.intro[lang]}
        </div>
      </div>
    </>
  );
}

export default CountryInfoView;
