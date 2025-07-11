import React from "react";
import MainHeader from "../../components/MainHeader";
import Hero from "./Hero";
import About from "./About";
import CategorySection from "./Categories";
import FeaturesBanner from "./Features";
import Demo from "./Demo";

function Root() {
  return (
    <>
      <MainHeader />
      <main>
        <Hero />
        <About />
        <CategorySection />
        <FeaturesBanner />
        <Demo />
      </main>
    </>
  );
}

export default Root;
