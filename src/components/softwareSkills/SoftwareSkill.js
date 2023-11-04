import React from "react";
import { Tooltip } from "react-tooltip"; // Update import statement

import "./SoftwareSkill.css";

export default function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <React.Fragment key={logo.skillName}>
                <li
                  data-tip
                  data-for={logo.skillName}
                  className="software-skill-inline"
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
                <Tooltip id={logo.skillName} effect="solid">
                  <strong>{logo.skillName}</strong>
                </Tooltip>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
