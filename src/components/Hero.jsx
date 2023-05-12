import React from "react";
import { styled } from "styled-components";
import hero1 from "../assets/images/hero/hero1.svg";
import LetterElement from "./LetterElement.jsx";

const Hero = () => {
  let hi = "h i ,";
  let im = "i ' m  . f a r a g , ";
  //   let web = "w e b . d e v e l o p e r ";
  let dev = "f r o n t . e n d . d e v e l o p e r";

  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <h2>
              {hi.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
            <h2>
              {im.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
            <h2>
              {dev.split(" ").map((letter, index) => {
                return (
                  <LetterElement key={index} index={index} letter={letter} />
                );
              })}
            </h2>
          </div>
          <button>Download CV</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-family: "Acme", sans-serif;
  .container {
    .wrapper {
      height: calc(100vh - 100px);
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;
      gap: 30px;
      /* background-color: blue; */
      .content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        h2,
        h3 {
          display: flex;
          gap: 10px;
        }
        h2 {
          font-size: 80px;
          text-transform: uppercase;
        }
        h3 {
          font-size: 50px;
        }
      }
      button {
        width: fit-content;
        padding: 10px 20px;
        background-color: red;
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
`;
export default Hero;
