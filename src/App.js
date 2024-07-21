import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
// import Services from "./components/Services";
// import Works from "./components/Works";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import "./App.css"; // Import the CSS file for styles

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      {/* <Services />
      <Works />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
