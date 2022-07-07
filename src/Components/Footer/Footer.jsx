import React from "react";
import "./Footer.css";
import {
  FaArrowRight,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <div className="container footer__container">
        <div className="footer__content">
          <h2>Himanshu Singh</h2>
          <p>Excepteur sint occaecat cupidatat </p>
          <div class="footer__social">
            <div class="container aboutmecard">
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

        <div className="about__content footer__title">
          <div className="footer_contact">
            <h1>
              Get in touch
              <FaArrowRight
                className="rightarrow"
                style={{ color: "#086CD9" }}
              />
            </h1>

            <article className="footer__card">
              <h2>EMAIL ME: </h2>
              <a href="">himanshuich20@gmail.com</a>
            </article>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p class="line">Copyright © Developer X | Designed by Himanshu</p>
      </div>
    </section>
  );
};

export default Footer;
