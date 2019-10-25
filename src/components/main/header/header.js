import React from "react";

import { Options } from "./templates"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="projects-wrapper">
        <GiHamburgerMenu size={32} />
        <Options>Projects</Options>
      </div>

      <div className="title-wrapper">
        <h1>Arthur Ussuy</h1>
      </div>

      <div className="search-wrapper ">
        <FaSearch size={28} />
        <Options>Search</Options>
      </div>
    </header>
  );
};

export default Header;
