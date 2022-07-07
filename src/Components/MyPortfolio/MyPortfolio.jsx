import React from "react";
import "./MyPortfolio.css";
import { FaArrowRight } from "react-icons/fa";
import image from "./image.png";

const MyPortfolio = () => {
  return (
    <div className="portcont">
      <div className="container portfolio__container">
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
          <h3>MY PORTFOLIO</h3>
          <h1>Take a look at the latest projects I’ve done</h1>
          <a href="">
            Browse all projects
            <FaArrowRight className="rightarrow" />
          </a>

          <article className="portfolio__card left">
            <div className="tool_field">
              <h5>React JS</h5>
              <h5>Web Development</h5>
            </div>
            <div className="title">
              <h2>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className="image">
              <img src={image} />
            </div>
          </article>
        </div>

        <div className="about__content">
          <div className="portfolio__cards">
            <article className="portfolio__card">
              <div className="tool_field">
                <h5>React JS</h5>
                <h5>Web Development</h5>
              </div>
              <div className="title">
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </article>

            <article className="portfolio__card">
              <div className="tool_field">
                <h5>React JS</h5>
                <h5>Web Development</h5>
              </div>
              <div className="title">
                <h2>Lorem ipsum dolor sit amet.</h2>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
