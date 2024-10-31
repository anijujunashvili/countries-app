import { ChangeEvent, FormEvent, useState } from "react";
import "./contact-page.css";
import { contact } from "@/translation/global.ts";
import { useParams } from "react-router-dom";

const ContactPageView: React.FC = () => {
  const [inputValues, setinputValues] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [errorMsgs, setErrorMsgs] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    messageError: "",
  });

  const params = useParams();
  const lang = params.lang as keyof typeof contact;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form_obj = {
      first_name: inputValues.fname,
      last_name: inputValues.lname,
      email: inputValues.email,
      message: inputValues.message,
    };
    console.log(form_obj);
  };

  const handleFnameValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const error = value.length < 4 ? contact[lang].errors.fname_e : "";

    setErrorMsgs({
      fnameError: error,
      lnameError: errorMsgs.lnameError,
      emailError: errorMsgs.emailError,
      messageError: errorMsgs.messageError,
    });

    setinputValues({
      fname: value,
      lname: inputValues.lname,
      email: inputValues.email,
      message: inputValues.message,
    });
  };

  const handleLnameValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const error = value.length < 4 ? contact[lang].errors.lname_e : "";

    setErrorMsgs({
      fnameError: errorMsgs.fnameError,
      lnameError: error,
      emailError: errorMsgs.emailError,
      messageError: errorMsgs.messageError,
    });

    setinputValues({
      fname: inputValues.fname,
      lname: value,
      email: inputValues.email,
      message: inputValues.message,
    });
  };

  const handleEmailValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const error = value.length < 10 ? contact[lang].errors.email_e : "";

    setErrorMsgs({
      fnameError: errorMsgs.fnameError,
      lnameError: errorMsgs.lnameError,
      emailError: error,
      messageError: errorMsgs.messageError,
    });
    setinputValues({
      fname: inputValues.fname,
      lname: inputValues.lname,
      email: value,
      message: inputValues.message,
    });
  };

  const handleMsgValidation = (e: FormEvent<HTMLTextAreaElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const error = value.length < 20 ? contact[lang].errors.message_e : "";

    setErrorMsgs({
      fnameError: errorMsgs.fnameError,
      lnameError: errorMsgs.lnameError,
      emailError: errorMsgs.emailError,
      messageError: error,
    });
    setinputValues({
      fname: inputValues.fname,
      lname: inputValues.lname,
      email: inputValues.email,
      message: value,
    });
  };

  return (
    <>
      <div className="contact-page-container">
        <div className="contact-page">
          <h1>{contact[lang].headline}</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">{contact[lang].fname}</label>
              <input
                type="text"
                name="first_name"
                placeholder={contact[lang].fname}
                value={inputValues.fname}
                onChange={handleFnameValidation}
              />
              <p className="errorMsg">{errorMsgs.fnameError}</p>
              <label htmlFor="last_name">{contact[lang].lname}</label>
              <input
                type="text"
                name="last_name"
                placeholder={contact[lang].lname}
                value={inputValues.lname}
                onChange={handleLnameValidation}
              />
              <p className="errorMsg">{errorMsgs.lnameError}</p>
              <label htmlFor="email">{contact[lang].email}</label>
              <input
                type="text"
                name="email"
                placeholder={contact[lang].email}
                value={inputValues.email}
                onChange={handleEmailValidation}
              />
              <p className="errorMsg">{errorMsgs.emailError}</p>
              <label htmlFor="message">{contact[lang].message}</label>
              <textarea
                name="message"
                placeholder={contact[lang].message}
                value={inputValues.message}
                onChange={handleMsgValidation}
              >
                {inputValues.message}
              </textarea>
              <p className="errorMsg">{errorMsgs.messageError}</p>
              <button type="submit">{contact[lang].send}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageView;
