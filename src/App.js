import React from "react";
import GlobalStyle from "./styles/global";
import Main from "./components/main/main";
import Apresentation from "./components/apresentation/apresentation";

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Apresentation /> */}
      <Main />
    </>
  );
};

export default App;
