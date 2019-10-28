import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Options } from "../templates";
import { OpacScreen } from "./styles";
import "./styles.scss";

const LeftMenu = () => {
  const [display, setDisplay] = useState(false);
  const [optionDisplayed, setOptionDisplayed] = useState("Recentes");

  const options = [
    "Recentes",
    "Fixed Gear",
    "Skateboard",
    "Front End",
  ]

  return (
    <>
      <div className="projects-wrapper">
        <GiHamburgerMenu
          size={32}
          style={{ cursor: "pointer" }}
          onClick={() => setDisplay(!display)}
        />
        {

        }
        <Options>{optionDisplayed}</Options>

        <nav
          className={`leftMenu ${display ? "showLeftMenu" : "hideLeftMenu"}`}
        >
          <ul>
            {
              options.map( option => <li key={option} onClick={() => setOptionDisplayed(option)}>{option}</li>)
            }
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
