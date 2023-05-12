import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>About</h1>;
};

export default About;
