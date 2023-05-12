import React, { useEffect } from "react";
import { Hero, Portfolio } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Portfolio />
    </>
  );
};

export default Home;
