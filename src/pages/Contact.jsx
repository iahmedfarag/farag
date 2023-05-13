import React, { useEffect } from "react";
import { useAppContext } from "../context.jsx";
import { ContactComp } from "./../components";

const Contact = () => {
  const { isLoading, setIsLoading } = useAppContext();

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <ContactComp />
    </>
  );
};

export default Contact;
