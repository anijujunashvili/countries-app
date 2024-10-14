import { useState } from "react";
import { FormEvent } from "react";
import "./add-country.css";

type CountryCreateProps = {
  onCountryCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const AddCountry: React.FC<CountryCreateProps> = ({ onCountryCreate }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
            <form onSubmit={onCountryCreate}>
              <input type="text" name="name" placeholder="Country name" />
              <input type="text" name="capital" placeholder="The capital" />
              <input
                type="text"
                name="population"
                placeholder="Country population"
              />
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
