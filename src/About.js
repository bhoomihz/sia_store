import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";
// import { AppContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Sia's Ecommerce Website",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
