import "./contact-page.css";

const ContactPageView: React.FC = () => {
  const handleSubmit = (event: HTMLFormElement) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    const form_obj = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(form_obj);
  };

  const handleKeyDown = (e: HTMLFormElement) => {
    //dziritadi davalebis meore punqts kargad ver mivxvi da amitom davwere es usargeblo funqcia :D
    // anu ideashi am funqciis gareShec ilogeboda enterze xelis dacherit, magram asec davwere
    if (e.key === "Enter") {
      const formData = new FormData(e.currentTarget);

      const form_obj = {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
      console.log(form_obj);
    }
  };

  return (
    <>
      <div className="contact-page-container">
        <div className="contact-page">
          <h1>This is Contact Page</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
              <label htmlFor="first_name">First Name</label>
              <input type="text" name="first_name" placeholder="First name" />
              <label htmlFor="last_name">Last Name</label>
              <input type="text" name="last_name" placeholder="Last name" />
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message..."></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageView;
