import React from "react";

import LeftMenu from "./leftMenu/leftMenu";
import RightMenu from "./rightMenu/rightMenu";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <LeftMenu />
      <div className="title-wrapper">
        <h1>Arthur Ussuy</h1>
      </div>
      <RightMenu />
    </header>
  );
};

export default Header;
