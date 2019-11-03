import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Main from "./components/main/main";
// import Apresentation from "./components/apresentation/apresentation";

const App = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
