import React from "react";
import "./ContactMe.css";
import { FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div>
      <div className="container contactme__container">
        <div className="about__me contact__title">
          <svg
            className="intro-line"
            width="155"
            height="20"
            viewBox="0 0 315 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10"
              y1="10"
              x2="304.006"
              y2="10"
              stroke="white"
              stroke-width="20"
              stroke-linecap="square"
            />
          </svg>
          <h1>Interested in working together?</h1>
          <a href="">
            Let's talk
            <FaArrowRight className="rightarrow" />
          </a>
        </div>

        <div className="contact__card">
          <form action="">
            <label
              for="name"
              style={{
                fontSize: "1.4rem",
              }}
            >
              Enter your name
            </label>
            <input type="text" id="name" name="name" />

            <label
              for="email"
              style={{
                fontSize: "1.4rem",
              }}
            >
              Your email address
            </label>
            <input type="email" id="email" name="email" />

            <label
              for="message"
              style={{
                fontSize: "1.4rem",
              }}
            >
              Your message
            </label>
            <textarea id="message" name="message"></textarea>

            <button className="contactbtn" type="submit">
              Contact me &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
