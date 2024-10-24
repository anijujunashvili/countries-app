import { useParams } from "react-router-dom";
import initialState from "@/pages/home/components/card/reducer/state.ts";

function CountryInfoView() {
  const { id, lang } = useParams();

  const countryInfo = initialState.find((country) => country.id == id);

  if (!countryInfo) {
    return <h1>Country not found!</h1>;
  }

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
