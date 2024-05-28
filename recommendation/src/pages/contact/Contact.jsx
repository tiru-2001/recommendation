import React, { useState } from "react";
import "./contact.scss";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [fields, setFormfields] = useState({
    name: "",
    email: "",
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9910/api/v1/contact/add-contact",
        fields
      );
      console.log(data);
      if (data.success) {
        toast.success("form submitted successfully");
        setFormfields({
          name: "",
          email: "",
          desc: "",
        });
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong,Please try again");
    }
  };
  return (
    <div className="app__contact-container">
      <div className="app__contact-subcontainer">
        <div className="left-container">
          <div className="conatct-title">
            <h1>Contact Us</h1>
          </div>
          <div className="app__form-container">
            <form onSubmit={submitForm} className="form-container">
              <input
                name="name"
                placeholder="Name"
                id="name"
                type="text"
                onChange={handleChange}
                value={fields["name"]}
                required
              />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={fields["email"]}
                required
              />
              <textarea
                name="desc"
                placeholder="message"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={fields["desc"]}
                required
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
