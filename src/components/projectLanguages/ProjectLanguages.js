import React from "react";
import { Tooltip } from "react-tooltip"; // Update import statement

import "./ProjectLanguages.css";

export default function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => (
            <React.Fragment key={logo.name}>
              <li
                data-tip
                data-for={logo.name}
                className="software-skill-inline-languages"
                name={logo.skillName}
              >
                <span
                  className="iconify"
                  data-icon={logo.icon}
                  data-inline="false"
                ></span>
              </li>
              <Tooltip id={logo.name} effect="solid">
                {logo.name}
              </Tooltip>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
