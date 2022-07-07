import React from "react";
import "./MySkills.css";
import Cards from "./Cards";

const MySkills = () => {
  return (
    <section>
      <div className="container skill__heading">
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
          <h3>MY SKILLS</h3>
          <h1>My extensive list of skills</h1>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default MySkills;
