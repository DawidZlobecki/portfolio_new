import React from "react";

import "./Technologies.scss";

interface technology {
  name: string;
  image: string;
}

const technologies: technology[] = [
  {
    name: "HTML",
    image: require("../../assets/img/technologies/html.png"),
  },
  {
    name: "CSS",
    image: require("../../assets/img/technologies/css.png"),
  },
  {
    name: "JavaScript",
    image: require("../../assets/img/technologies/js.png"),
  },
  {
    name: "Typescript",
    image: require("../../assets/img/technologies/html.png"),
  },
  {
    name: "Git",
    image: require("../../assets/img/technologies/git.png"),
  },
  {
    name: "Figma",
    image: require("../../assets/img/technologies/figma.png"),
  },
  {
    name: "React",
    image: require("../../assets/img/technologies/react.png"),
  },
  {
    name: "React Native",
    image: require("../../assets/img/technologies/html.png"),
  },
  {
    name: "NodeJS",
    image: require("../../assets/img/technologies/node.png"),
  },
  {
    name: "MongoDB",
    image: require("../../assets/img/technologies/mongo.png"),
  },
  {
    name: "MySql",
    image: require("../../assets/img/technologies/my-sql.png"),
  },
  {
    name: "Redux",
    image: require("../../assets/img/technologies/html.png"),
  },
];

const Technologies = () => {
  return (
    <section className="mainContainer">
      <div className="bigTopLeftborder" />
      <div className="bigTopRightborder" />
      <div className="bigBottomLeftborder" />
      <div className="bigBottomRightborder" />
      <h2>Technologies that i know:</h2>
      <div className="technologiesGrid">
        {technologies.map((item) => {
          return (
            <div className="gridTechnologyElement" key={item.name}>
              <img src={item.image} alt={`${item.name} logo`} />
              <h4>{item.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
