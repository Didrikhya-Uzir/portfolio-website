import React from "react";
import { Tooltip } from "react-tooltip"; // Update import statement

import "./CompetitiveSites.css";

export default function CompetitiveSites(props) {
  return (
    <div className="competitive-sites-main-div">
      <ul className="dev-icons">
        {props.logos.map((logo) => (
          <React.Fragment key={logo.siteName}>
            <li
              data-tip
              data-for={logo.siteName}
              className="competitive-sites-inline"
              name={logo.siteName}
            >
              <a
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.icon}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </li>
            <Tooltip id={logo.siteName} effect="solid">
              <strong>{logo.siteName}</strong>
            </Tooltip>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
