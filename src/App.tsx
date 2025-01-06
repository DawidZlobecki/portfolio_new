import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
