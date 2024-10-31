import { useParams } from "react-router-dom";
import initialState from "@/pages/home/components/card/reducer/state.ts";

// type nameType = {
//   ka: string;
//   en: string;
// };
// type introType = {
//   ka: string;
//   en: string;
// };
// type capitalType = {
//   ka: string;
//   en: string;
// };

// type countryInfoType = {
//   id: string;
//   name: nameType;
//   capital: capitalType;
//   population: string;
//   flag: string;
//   intro: introType;
//   image: string;
//   uploaded?: number;
//   vote?: number;
//   disabled: number;
// };

function CountryInfoView() {
  const params = useParams();
  const id = params.id;
  const countryInfo = initialState.find((country) => country.id == id);

  if (!countryInfo) {
    return <h1>Country not found!</h1>;
  }
  const lang = params.lang as keyof typeof countryInfo.name;

  const imgPath = countryInfo.uploaded == 0 ? "/src/assets/" : "";
  return (
    <>
      <div
        className="container"
        style={{ height: "80vh", alignItems: "start", marginTop: "50px" }}
      >
        <img
          src={`${imgPath}${countryInfo.image}`}
          style={{ width: "300px", marginRight: "30px" }}
        />

        <div style={{ color: "#474545" }}>
          <h2 style={{ textAlign: "left", marginTop: "0px" }}>
            {countryInfo.name[lang]}
          </h2>
          {countryInfo.intro[lang]}
        </div>
      </div>
    </>
  );
}

export default CountryInfoView;
