import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <main className=" max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
    </main>
  );
};

export default App;
