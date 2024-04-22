import React from "react";
import SectionHeader from "./SectionHeader/index";
import { AppContext } from "../App";

export default function Contact() {
  const { sectionRefs } = React.useContext(AppContext);
  return (
    <section
      className="contact"
      id="contact"
      ref={(element) => (sectionRefs.current[5] = element)}
    >
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>
            <span className="dark-bg--normal-word">Stay</span>{" "}
            <span className="orange--word">Connected</span>
          </SectionHeader.Title>
          <SectionHeader.Desc>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </SectionHeader.Desc>
        </SectionHeader>

        <div className="contact--form">
          <div className="contact--form-userInfo">
            <input
              type="text"
              placeholder="Your Name*"
              name="username"
              id="username"
              className="contact--form-username"
              required
            />
            <input
              type="email"
              placeholder="Your Email*"
              name="email"
              id="email"
              className="contact--form-email"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
            className="contact--form-subject"
            required
          />
          <fieldset>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              className="contact--form-message"
              required
            ></textarea>
          </fieldset>
          <button className="main--button">send message</button>
        </div>
      </div>
    </section>
  );
}
