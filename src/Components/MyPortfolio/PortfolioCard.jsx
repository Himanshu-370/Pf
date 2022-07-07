import React from "react";
import "./PortfolioCard.css";
import Image from "./image.png";

const projectCard = [
  {
    id: "1",
    tool: "Lorem ipsum",
    field: "Web Development",
    title: "Lorem ipsum dolor sit amet consectetur",
    image: { Image },
  },
  {
    id: "2",
    tool: "Lorem ipsum",
    field: "Web Development",
    title: "Lorem ipsum dolor sit amet consectetur",
    image: { Image },
  },
  {
    id: "3",
    tool: "Lorem ipsum",
    field: "Web Development",
    title: "Lorem ipsum dolor sit amet consectetur",
    image: { Image },
  },
];

const PortfolioCard = () => {
  return (
    <div>
      {projectCard.map(({ id, tool, field, title, image }) => {
        return (
          <>
            <div key={id} className="portfolioCard">
              <div className="tool__card">
                <h5 className="tools">{tool}</h5>
              </div>
              <div className="field__card">
                <h5 className="field">{field}</h5>
              </div>

              <div className="title__card">
                <h2 className="title">{title}</h2>
              </div>
              <div className="image__card">
                <div className="image">{image}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PortfolioCard;
