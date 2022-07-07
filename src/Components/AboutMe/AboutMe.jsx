import React from "react";
import "./AboutMe.css";
import { FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section>
      <div className="container about__container">
        <div className="about__me">
          <svg
            className="icon"
            width="13"
            height="31"
            viewBox="0 0 20 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.28 41L13.51 0.499998H19.18L5.95 41H0.28Z"
              fill="#086CD9"
            />
          </svg>
          <h3>ABOUT ME</h3>
          <h1>I’ve been developing websites since 2021</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
          <a href="">
            More about me
            <FaArrowRight className="rightarrow" />
          </a>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h1>01</h1>
              <h2>Years of experience</h2>
            </article>
            <article className="about__card">
              <h1>10</h1>
              <h2>Projects built so far</h2>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
