import React from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  const data = {
    name: "Sia's Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
