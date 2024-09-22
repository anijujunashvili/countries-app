import cardImage from "./assets/card.jpg";
import countryFlag from "./assets/flag.png";

function Card() {
  const country = {
    name: "Italy",
    population: "58,968,501",
    capital: "Rome",
  };
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={cardImage} className="card-image" alt="card-image"></img>
          <div className="headline">
            <span className="country-name">{country.name}</span>
            <img src={countryFlag} alt="flag" title="Flag"></img>
          </div>
          <div className="population">
            Population: <span>{country.population}</span>
          </div>
          <div className="capital">
            The capital: <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
