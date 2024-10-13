import React from "react";

import "./technologies.scss";

interface item {
  name: string;
  image: string;
}

const technologies: item[] = [
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
      <div className="grid">
        {technologies.map((item) => {
          return (
            <div className="gridElement" key={item.name}>
              <img src={item.image} />
              <h4>{item.name}</h4>
            </div>
          );
        })}
        {/* <div className="gridElement">Item</div> */}
      </div>
    </section>
  );
};

export default Technologies;
