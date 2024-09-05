import React from "react";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

const navigationLinks = [
  {
    id: 1,
    link: "https://github.com/DawidZlobecki",
    element: <FontAwesomeIcon icon={faGithub} className="icon" />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/dawid-zlobecki-3b4765215/",
    element: <FontAwesomeIcon icon={faLinkedin} className="icon" />,
  },
  {
    id: 3,
    link: "https://gitlab.com/DawidZlobecki",
    element: <FontAwesomeIcon icon={faGitlab} className="icon" />,
  },
];
const Navigation = () => {
  return (
    <nav className="navigationContainer">
      {navigationLinks.map((item) => (
        <a
          target="_blank"
          key={item.id}
          href={item.link}
          rel="noopener noreferrer"
        >
          {item.element}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
