import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>Contact</h1>;
};

export default Contact;
