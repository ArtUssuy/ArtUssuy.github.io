import React from "react";

import { Options } from "../templates";
import { FaSearch } from "react-icons/fa";

const RightMenu = () => {
  return (
    <div className="search-wrapper ">
      <FaSearch size={28} />
      <Options>Search</Options>
    </div>
  );
};

export default RightMenu;
