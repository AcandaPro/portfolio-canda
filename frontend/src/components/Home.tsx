import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-20 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
