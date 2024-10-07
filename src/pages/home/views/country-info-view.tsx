import { useParams } from "react-router-dom";
import countries from "../static/countries-data";

function CountryInfoView() {
  const { id } = useParams();
  const countryInfo = countries.find((country) => country.id == id);

  if (!countryInfo) {
    return <h1>Country not found!</h1>;
  }
  return (
    <>
      <div
        className="container"
        style={{ height: "80vh", alignItems: "start", marginTop: "50px" }}
      >
        <img
          src={`/src/assets/${countryInfo.cover}`}
          style={{ width: "300px", marginRight: "30px" }}
        />

        <div style={{ color: "#474545" }}>
          <h2 style={{ textAlign: "left", marginTop: "0px" }}>
            {countryInfo.name}
          </h2>
          {countryInfo.intro}
        </div>
      </div>
    </>
  );
}

export default CountryInfoView;
