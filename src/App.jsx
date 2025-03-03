import React from "react";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/ResumeDwnl/Resume";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Resume/>
    </div>
  );
}

export default App;
