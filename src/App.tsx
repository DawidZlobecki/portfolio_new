import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Technologies />
    </div>
  );
}

export default App;
