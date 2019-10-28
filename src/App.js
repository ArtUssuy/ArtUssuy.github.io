import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Main from "./components/main/main";
import Apresentation from "./components/apresentation/apresentation";

const App = () => {

  const [display, setDisplay] = useState(true);

  const test = () => console.log("clicking apresentation");

  return (
    <>
      <GlobalStyle />
      {
        display ? <Apresentation /> : <Main />
      }
      <button onClick={() => setDisplay(false)}>CLICK HERE</button>
    </>
  );
};

export default App;
