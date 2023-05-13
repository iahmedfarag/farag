import React, { useEffect } from "react";
import { Portfolio } from "../components";
import { useAppContext } from "../context.jsx";

const PortfolioPage = () => {
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
      <Portfolio padding={"50px"} />
    </>
  );
};

export default PortfolioPage;
