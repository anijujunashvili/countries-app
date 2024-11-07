import { ChangeEvent, useState } from "react";
import { FormEvent } from "react";
import "./add-country.css";
import { addCountry } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

type CountryCreateProps = {
  onCountryCreate: (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
  }) => void;
  modalComp: boolean;
  ChangeModal: (mdl: boolean) => void;
  addLoading: boolean;
};

const AddCountry: React.FC<CountryCreateProps> = ({
  onCountryCreate,
  modalComp,
  ChangeModal,
  addLoading,
}) => {
  //const [modal, setModal] = useState(false);
  const [image, setImage] = useState<string>("");
  const [tabs, setTabs] = useState({ ka: true, en: false });

  const [inputValues, setinputValues] = useState({
    ka: {
      name: "",
      capital: "",
    },
    en: {
      name: "",
      capital: "",
    },
    population: "",
  });
  const [errorMsgs, setErrorMsgs] = useState({
    ka: {
      capitalErrorMsg: "",
      nameErrorMsg: "",
    },
    en: {
      capitalErrorMsg: "",
      nameErrorMsg: "",
    },
    populationErrorMsg: "",
  });

  const params = useParams();
  // const lang = params.lang as string;
  const lng = params.lang as keyof typeof addCountry;
  const toggleModal = () => {
    setinputValues({
      ka: {
        name: "",
        capital: "",
      },
      en: {
        name: "",
        capital: "",
      },
      population: "",
    });
    setImage("");

    ChangeModal(modalComp);
  };

  if (modalComp) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const Inputlang = e.target.lang;

    const error = value.length < 5 ? addCountry[lng].errors.name : "";

    setErrorMsgs({
      ka: {
        nameErrorMsg: Inputlang == "ka" ? error : errorMsgs.ka.nameErrorMsg,
        capitalErrorMsg: errorMsgs.ka.capitalErrorMsg,
      },
      en: {
        nameErrorMsg: Inputlang == "en" ? error : errorMsgs.en.nameErrorMsg,
        capitalErrorMsg: errorMsgs.en.capitalErrorMsg,
      },
      populationErrorMsg: errorMsgs.populationErrorMsg,
    });
    setinputValues({
      ka: {
        name: Inputlang == "ka" ? value : inputValues.ka.name,
        capital: inputValues.ka.capital,
      },
      en: {
        name: Inputlang == "en" ? value : inputValues.en.name,
        capital: inputValues.en.capital,
      },
      population: inputValues.population,
    });
  };
  const handleChangeCapital = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const Inputlang = e.target.lang;
    const error = value.length < 4 ? addCountry[lng].errors.capital : "";
    setErrorMsgs({
      ka: {
        nameErrorMsg: errorMsgs.ka.nameErrorMsg,
        capitalErrorMsg:
          Inputlang == "ka" ? error : errorMsgs.ka.capitalErrorMsg,
      },
      en: {
        nameErrorMsg: errorMsgs.en.nameErrorMsg,
        capitalErrorMsg:
          Inputlang == "en" ? error : errorMsgs.en.capitalErrorMsg,
      },
      populationErrorMsg: errorMsgs.populationErrorMsg,
    });
    setinputValues({
      ka: {
        name: inputValues.ka.name,
        capital: Inputlang == "ka" ? value : inputValues.ka.capital,
      },
      en: {
        name: inputValues.en.name,
        capital: Inputlang == "en" ? value : inputValues.en.capital,
      },
      population: inputValues.population,
    });
  };
  const handleChangePopulation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const error = value.length < 5 ? addCountry[lng].errors.population : "";
    setErrorMsgs({
      ka: {
        nameErrorMsg: errorMsgs.ka.nameErrorMsg,
        capitalErrorMsg: errorMsgs.ka.capitalErrorMsg,
      },
      en: {
        nameErrorMsg: errorMsgs.en.nameErrorMsg,
        capitalErrorMsg: errorMsgs.en.capitalErrorMsg,
      },
      populationErrorMsg: error,
    });
    setinputValues({
      ka: { name: inputValues.ka.name, capital: inputValues.ka.capital },
      en: {
        name: inputValues.en.name,
        capital: inputValues.en.capital,
      },
      population: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputValues.ka.name;
    const nameEn = inputValues.en.name;
    const capital = inputValues.ka.capital;
    const capitalEn = inputValues.en.capital;
    const population = inputValues.population;

    onCountryCreate({
      name,
      nameEn,
      capital,
      capitalEn,
      population,
      image,
    });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const data = new FileReader();
      data.addEventListener("load", () => {
        setImage(data.result as string);
      });
      data.readAsDataURL(file);
    }
  };

  const handleTabsChange = (lng: string) => {
    if (lng == "ka") {
      setTabs({ ka: true, en: false });
    } else {
      setTabs({ ka: false, en: true });
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {addCountry[lng].addCountry}
      </button>

      {modalComp && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{addCountry[lng].addCountry}</h2>
            {addLoading && "მიმდინარეობს ქვეყნის დამატება..."}
            <div className="tabs">
              <span
                onClick={() => handleTabsChange("ka")}
                className={tabs.ka ? "active" : ""}
              >
                geo
              </span>
              <span
                onClick={() => handleTabsChange("en")}
                className={tabs.en ? "active" : ""}
              >
                eng
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              {tabs.ka && (
                <div>
                  <input
                    style={{ marginBottom: "0px" }}
                    type="text"
                    name="name"
                    value={inputValues.ka.name}
                    placeholder={addCountry[lng].name}
                    onChange={handleChangeName}
                    lang="ka"
                  />
                  <p className="errorMsg">{errorMsgs.ka.nameErrorMsg}</p>
                  <input
                    style={{ marginBottom: "0px" }}
                    type="text"
                    name="capital"
                    value={inputValues.ka.capital}
                    placeholder={addCountry[lng].capital}
                    onChange={handleChangeCapital}
                    lang="ka"
                  />
                  <p className="errorMsg">{errorMsgs.ka.capitalErrorMsg}</p>
                </div>
              )}
              {tabs.en && (
                <div>
                  <input
                    style={{ marginBottom: "0px" }}
                    type="text"
                    name="nameEn"
                    value={inputValues.en.name}
                    placeholder={addCountry[lng].nameEn}
                    onChange={handleChangeName}
                    lang="en"
                  />
                  <p className="errorMsg">{errorMsgs.en.nameErrorMsg}</p>
                  <input
                    style={{ marginBottom: "0px" }}
                    type="text"
                    name="capitalEn"
                    value={inputValues.en.capital}
                    placeholder={addCountry[lng].capitalEn}
                    onChange={handleChangeCapital}
                    lang="en"
                  />
                  <p className="errorMsg">{errorMsgs.en.capitalErrorMsg}</p>
                </div>
              )}

              <input
                style={{ marginBottom: "0px" }}
                type="text"
                name="population"
                value={inputValues.population}
                placeholder={addCountry[lng].population}
                onChange={handleChangePopulation}
              />
              <p className="errorMsg">{errorMsgs.populationErrorMsg}</p>
              <p style={{ textAlign: "left" }}>
                <img src={image} style={{ width: "100px" }} />
                <br />
                <input
                  type="file"
                  name="image"
                  accept="image/jpeg, image/png, image/jpeg"
                  onChange={handleUpload}
                />
              </p>
              <button type="submit">{addCountry[lng].add}</button>
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
