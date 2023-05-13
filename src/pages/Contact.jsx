import React, { useEffect } from "react";
import { useAppContext } from "../context.jsx";
import { ContactComp } from "./../components";
import { styled } from "styled-components";
const Contact = () => {
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
    <Wrapper>
      <ContactComp />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  margin-top: 100px;
  @media (max-width: 576px) {
    margin-top: 70px;
  }
`;
export default Contact;
