import React from "react"
import NavBar from "./NavBar"
import "../style/App.css"
import Home from "./Home";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Project from "./projects/Project";

function App() {
  return <div>
    <NavBar/>
    <Home/>
    <AboutMe/>
    <Skills/>
    <Project/>
  </div>
}

export default App;
