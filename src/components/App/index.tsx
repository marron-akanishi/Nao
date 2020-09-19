import React from "react";
import "./styles.scss";
import Header from "../Header";
import Selecter from "../Selecter";
import Detail from "../Detail";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Selecter />
        <Detail />
      </div>
    </div>
  );
}

export default App;
