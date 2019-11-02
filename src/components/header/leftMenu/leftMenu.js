import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Options } from "../templates";
import { OpacScreen } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import changePage from "./../../../actions/index";

import "./styles.scss";

const LeftMenu = () => {
  const page = useSelector(state => state.changePage);
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(false);

  const options = ["Recentes", "Photograph", "Development"];

  const handleClick = option => {
    setDisplay(!display);
    dispatch(changePage(option));
  };

  return (
    <>
      <div className="projects-wrapper">
        <GiHamburgerMenu
          size={32}
          style={{ cursor: "pointer" }}
          onClick={() => setDisplay(!display)}
        />
        {}
        <Options>{page}</Options>

        <nav
          className={`leftMenu ${display ? "showLeftMenu" : "hideLeftMenu"}`}
        >
          <ul>
            {options.map(option => (
              <li key={option} onClick={() => handleClick(option)}>
                {option}
              </li>
            ))}
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
