import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import "./App.css"; // Import the CSS file for styles
import WhyYouShouldHireMe from "./components/WhyYouShouldHireMe.jsx";
import PortfolioDocuments from "./components/PortfolioDocuments.jsx";
import Technologies from "./components/Technologies.jsx";
import Tools from "./components/Tools.jsx";
// import NewExperience from "./components/newEx.jsx";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Tools />
      <PortfolioDocuments />
      <Achievements />
      <WhyYouShouldHireMe />
    </div>
  );
}

export default App;
