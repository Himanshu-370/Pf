import React from "react";
import "./HeroIntro.css";
import {
  FaArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Herointro = () => {
  return (
    <section>
      <div className="container herointro">
        <div class="secondary leftcolumn">
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

          <h1>I’m Himanshu, a Web Designer & Web Developer</h1>
          {/* <h1>acslknalkfmalkdamclajfmas alsjmcalsc alskdjamlcksam</h1> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Vel minima labore tenetur aliquid assumenda error.
          </p>

          <a href="" class="circle">
            <IoIosArrowDown size="50px" className="scroll" />
          </a>
        </div>

        <div className="secondary rightcolumn">
          <div class="card">
            <div class="container aboutmecard">
              <h3>ABOUT ME</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
                ullamcorper quis id elementum convallis lacus gravida.
              </p>
              <a href="">
                LEARN MORE
                <FaArrowRight className="rightarrow" />
              </a>
            </div>
          </div>
          <div class="card">
            <div class="container aboutmecard">
              <h3>MY WORK</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis
                ullamcorper quis id elementum convallis lacus gravida.
              </p>
              <a href="">
                BROWSE PORTFOLIO <FaArrowRight className="rightarrow" />
              </a>
            </div>
          </div>
          <div class="card">
            <div class="container aboutmecard">
              <h3>FOLLOW ME</h3>
              <div>
                <a href="" className="social-links">
                  <FaLinkedinIn size="30px" />
                </a>
                <a href="" className="social-links">
                  <AiFillInstagram size="30px" />
                </a>
                <a href="" className="social-links">
                  <FaGithub size="30px" />
                </a>
                <a href="" className="social-links">
                  <FaFacebookF size="30px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herointro;
