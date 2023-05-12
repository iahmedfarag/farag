import React, { useEffect } from "react";
import { Portfolio } from "../components";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Portfolio padding={"50px"} />
    </>
  );
};

export default PortfolioPage;
