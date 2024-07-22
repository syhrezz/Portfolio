import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import "./App.css"; // Import the CSS file for styles
import WhyYouShouldHireMe from "./components/WhyYouShouldHireMe.jsx";
import PortfolioDocuments from "./components/PortfolioDocuments.jsx";
import Technologies from "./components/Technologies.jsx";
import NewExperience from "./components/newExperience.jsx";
// import Footer from "./components/Footer.jsx";
// import NewExperience from "./components/newEx.jsx";

const project = {
  title: "My Project",
  date: "2024-07-22",
  description:
    "This is a description of my project. It highlights the main features and functionalities.",
  technologies: ["React", "Styled Components", "Framer Motion"],
  github: "https://github.com/myproject",
  liveDemo: "https://myprojectdemo.com",
};

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Intro />
      <About />
      <NewExperience />
      {/* <Experience /> */}
      <Projects />
      <Technologies />
      {/* <Tools /> */}
      <PortfolioDocuments />
      <Achievements />
      {/* <Footer /> */}
      {/* <DetailsProject project={project} /> */}
      {/* <WhyYouShouldHireMe /> */}
    </div>
  );
}

export default App;
