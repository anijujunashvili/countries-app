import { ChangeEvent, FormEvent, useState } from "react";
import "./contact-page.css";

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

  const handleSubmit = (event: HTMLFormElement) => {
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
    const value = e.target.value;
    const error = value.length < 4 ? "First name error" : "";

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
    const value = e.target.value;
    const error = value.length < 4 ? "Last name error" : "";

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
    const value = e.target.value;
    const error = value.length < 10 ? "email error" : "";

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
    const value = e.target.value;
    const error = value.length < 20 ? "Message error" : "";

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
          <h1>This is Contact Page</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                value={inputValues.fname}
                onChange={handleFnameValidation}
              />
              <p className="errorMsg">{errorMsgs.fnameError}</p>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                value={inputValues.lname}
                onChange={handleLnameValidation}
              />
              <p className="errorMsg">{errorMsgs.lnameError}</p>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={inputValues.email}
                onChange={handleEmailValidation}
              />
              <p className="errorMsg">{errorMsgs.emailError}</p>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Message..."
                value={inputValues.message}
                onChange={handleMsgValidation}
              >
                {inputValues.message}
              </textarea>
              <p className="errorMsg">{errorMsgs.messageError}</p>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageView;
