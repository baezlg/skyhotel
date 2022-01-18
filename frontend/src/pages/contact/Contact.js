import React from "react";
import PageHeading from "../../components/pageheading/PageHeading";
import "./Contact.scss";

const Contact = () => {
  const img =
    "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <div className="contact">
      <PageHeading img={img}>
        <h3 className="heading-lg white">Contact</h3>
      </PageHeading>
      <section className="contact__map"></section>
      <section className="contact__wrapper">
        <form className="form">
          <input type="text" className="form__input" placeholder="Your Name" />
          <input type="text" className="form__input" placeholder="Your Email" />
          <input type="text" className="form__input" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="form__input"
          ></textarea>
          <input type="submit" value="send message" className="btn" />
        </form>
        <div className="contact__address">
          <h3>
            <i class="fas fa-home"></i> 123 main str, USA
          </h3>
          <h3>
            <i class="fas fa-phone"></i> +555(555) 5555
          </h3>
          <h3>
            <i class="fas fa-envelope"></i> info@skyhotel.com
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Contact;
