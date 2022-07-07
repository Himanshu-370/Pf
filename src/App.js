import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroIntro from "./Components/HeroIntro/HeroIntro";
import AboutMe from "./Components/AboutMe/AboutMe";
import MySkills from "./Components/MySkills/MySkills";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroIntro />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
