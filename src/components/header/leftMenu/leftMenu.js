import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Options } from "../templates";
import { OpacScreen } from "./styles";
import "./styles.scss";

const LeftMenu = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="projects-wrapper">
        <GiHamburgerMenu
          size={32}
          style={{ cursor: "pointer" }}
          onClick={() => setDisplay(!display)}
        />
        <Options>Projects</Options>

        <nav
          className={`leftMenu ${display ? "showLeftMenu" : "hideLeftMenu"}`}
        >
          <ul>
            <li>Projects</li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>

      <OpacScreen
        className={`${display ? "showOpacScreen" : "hideOpacScreen"}`}
        onClick={() => setDisplay(!display)}
      ></OpacScreen>
    </>
  );
};

export default LeftMenu;
