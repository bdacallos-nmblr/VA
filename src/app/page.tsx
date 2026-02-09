import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Contacts from "./components/Contacts";

const Home = () => {
  return (
    <div className="min-h-screen w-full space-y-6">
      <div className="landing-page">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col items-center ">
        <About />
        <Services />
        <Expertise />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
