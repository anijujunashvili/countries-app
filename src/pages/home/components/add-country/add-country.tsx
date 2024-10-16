import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import "./add-country.css";

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
    const error =
      value.length < 5 ? "Country name must be longer than 5 characters" : "";
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
    const error =
      value.length < 4
        ? "Country capital must be longer than 4 characters"
        : "";
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
    const error =
      value.length < 5
        ? "Country population must be longer than 7 characters"
        : "";
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
        Add Country
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add country</h2>
            <form onSubmit={handleSubmit}>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="name"
                value={inputValues.name}
                placeholder="Country name"
                onChange={handleChangeName}
              />
              <p className="errorMsg">{errorMsgs.nameErrorMsg}</p>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="capital"
                value={inputValues.capital}
                placeholder="The capital"
                onChange={handleChangeCapital}
              />
              <p className="errorMsg">{errorMsgs.capitalErrorMsg}</p>
              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="population"
                value={inputValues.population}
                placeholder="Country population"
                onChange={handleChangePopulation}
              />
              <p className="errorMsg">{errorMsgs.populationErrorMsg}</p>
              <button type="submit">Add</button>
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
