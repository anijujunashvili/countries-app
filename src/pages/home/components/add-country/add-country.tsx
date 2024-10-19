import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import "./add-country.css";
import { addCountry } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

type CountryCreateProps = {
  onCountryCreate: (countryFields: {
    name: string;
    capital: string;
    population: string;
  }) => void;
};

const AddCountry: React.FC<CountryCreateProps> = ({ onCountryCreate }) => {
  const [modal, setModal] = useState(false);

  const [inputValues, setinputValues] = useState({
    name: "",
    capital: "",
    population: "",
  });
  const [errorMsgs, setErrorMsgs] = useState({
    capitalErrorMsg: "",
    nameErrorMsg: "",
    populationErrorMsg: "",
  });
  const { lang } = useParams();
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const error = value.length < 5 ? addCountry[lang].errors.name : "";
    setErrorMsgs({
      nameErrorMsg: error,
      capitalErrorMsg: errorMsgs.capitalErrorMsg,
      populationErrorMsg: errorMsgs.populationErrorMsg,
    });
    setinputValues({
      name: value,
      capital: inputValues.capital,
      population: inputValues.population,
    });
  };
  const handleChangeCapital = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const error = value.length < 4 ? addCountry[lang].errors.capital : "";
    setErrorMsgs({
      nameErrorMsg: errorMsgs.nameErrorMsg,
      capitalErrorMsg: error,
      populationErrorMsg: errorMsgs.populationErrorMsg,
    });
    setinputValues({
      name: inputValues.name,
      capital: value,
      population: inputValues.population,
    });
  };
  const handleChangePopulation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const error = value.length < 5 ? addCountry[lang].errors.population : "";
    setErrorMsgs({
      nameErrorMsg: errorMsgs.nameErrorMsg,
      capitalErrorMsg: errorMsgs.capitalErrorMsg,
      populationErrorMsg: error,
    });
    setinputValues({
      name: inputValues.name,
      capital: inputValues.capital,
      population: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputValues.name;
    const capital = inputValues.capital;
    const population = inputValues.population;
    onCountryCreate({ name, capital, population });
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {addCountry[lang].addCountry}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{addCountry[lang].addCountry}</h2>
            <form onSubmit={handleSubmit}>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="name"
                value={inputValues.name}
                placeholder={addCountry[lang].name}
                onChange={handleChangeName}
              />
              <p className="errorMsg">{errorMsgs.nameErrorMsg}</p>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="capital"
                value={inputValues.capital}
                placeholder={addCountry[lang].capital}
                onChange={handleChangeCapital}
              />
              <p className="errorMsg">{errorMsgs.capitalErrorMsg}</p>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="population"
                value={inputValues.population}
                placeholder={addCountry[lang].population}
                onChange={handleChangePopulation}
              />
              <p className="errorMsg">{errorMsgs.populationErrorMsg}</p>
              <button type="submit">{addCountry[lang].add}</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCountry;
