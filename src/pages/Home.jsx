import React, { useEffect } from "react";
import { Hero, Portfolio } from "../components";
import { useAppContext } from "../context.jsx";

const Home = () => {
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Hero />
      <Portfolio />
    </>
  );
};

export default Home;
