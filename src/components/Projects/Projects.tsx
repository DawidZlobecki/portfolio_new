import React from "react";
import "./Projects.scss";

interface additionalLink {
  name: string;
  link: string;
}

interface project {
  name: string;
  image: string;
  link: string;
  additionalLinks?: additionalLink[];
}

const projects: project[] = [
  {
    name: "Battleship Game",
    image: require("../../assets/img/projects/battleship.png"),
    link: "https://github.com/CodersCampLittleDevs/CodersCamp2021-ProjectWebDevelopmentBasics-Battleship-Game",
  },
  {
    name: "Pet's Adopt And Care - Frontend",
    image: require("../../assets/img/projects/petsadoptandcare.png"),
    link: "",
    additionalLinks: [
      {
        name: "Frontend",
        link: "https://github.com/CodersCampLittleDevs/CodersCamp2021-ProjectSinglePageApplication-PetsAdoptAndCarePortal",
      },
      {
        name: "Backend",
        link: "https://github.com/CodersCampLittleDevs/CodersCamp2021-ProjectServerSideJavaScript-PetsAdoptAndCarePortal",
      },
    ],
  },
  {
    name: "Teacher Assistant",
    image: require("../../assets/img/projects/teacherAssistant.png"),
    link: "https://github.com/CodersCampCrew/Teacher-Assistant?tab=readme-ov-file",
  },
  {
    name: "UkraineHelper",
    image: require("../../assets/img/projects/ukraineHelper.png"),
    link: "https://github.com/CodersCampCrew/Ukraine-helper?tab=readme-ov-file",
  },
  {
    name: "Plantly",
    image: require("../../assets/img/projects/teacherAssistant.png"),
    link: "",
    additionalLinks: [
      {
        name: "Frontend",
        link: "https://github.com/CodersCampCrew/Teacher-Assistant?tab=readme-ov-file",
      },
      {
        name: "Figma",
        link: "https://github.com/CodersCampCrew/Teacher-Assistant?tab=readme-ov-file",
      },
      {
        name: "Backend",
        link: "https://github.com/CodersCampCrew/Teacher-Assistant?tab=readme-ov-file",
      },
    ],
  },
];

const SingleLinkElement = (item: project) => {
  return (
    <a href={item.link} className="gridProjectElement" key={item.name}>
      <img src={item.image} alt={`${item.name} logo`} />
      <h3 className="centeredElement">{item.name}</h3>
    </a>
  );
};

const MultipleLinksElement = (item: project) => {
  return (
    <div className="gridProjectElement" key={item.name}>
      <img src={item.image} alt={`${item.name} logo`} />
      <div className="centeredElement">
        <h3>{item.name}</h3>
        <div className="multipleLinksProjectContainer">
          {item.additionalLinks?.map((item: additionalLink) => {
            return (
              <a href={item.link} key={item.name}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="mainContainer">
      <div className="bigTopLeftborder" />
      <div className="bigTopRightborder" />
      <div className="bigBottomLeftborder" />
      <div className="bigBottomRightborder" />
      <h2>Projects i was part of:</h2>
      <div className="projectsGrid">
        {projects.map((item) =>
          item.additionalLinks
            ? MultipleLinksElement(item)
            : SingleLinkElement(item)
        )}
      </div>
    </section>
  );
};

export default Projects;
