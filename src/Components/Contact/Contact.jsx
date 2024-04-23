import React from "react";
import "./contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import white_arrow from "../../assets/white_arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ab7b627-efbb-4b2e-9f19-2abb43641805");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
          illo reiciendis commodi dolor expedita laboriosam velit quaerat earum,
          debitis, eum nam dolore magnam! Rerum odit assumenda minus nisi modi
          eos molestias repellat veritatis placeat.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            mahmoudsaadallah05@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            (+20) 127 442 9645
          </li>
          <li>
            <img src={location_icon} alt="" />
            12 Misr Eltameer Buildings zone 9, sheraton Cairo Egypt
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Mobile Number"
            required
          />

          <label>Write your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
