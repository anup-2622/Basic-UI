import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wlcq0j4",
        "template_znowpbt",
        form.current,
        "3K5DshioyJhu16hCj"
      )
      .then(
        (result) => {
          // console.log(result.text);
          console.log("Successful");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              // pattern="[A-Za-z]{3}"
              title="Name can't be less then 3 letter"
              required
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="John@example.com"
            />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Hii , Dev "
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
