import React from "react";
import { styled } from "styled-components";
import LetterElement from "./LetterElement.jsx";
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowDown,
  BsArrowUp,
} from "react-icons/bs";
import DownArror from "./DownArror.jsx";
import UpArrow from "./UpArrow.jsx";
const Hero = () => {
  let hi = "h i ,";
  let im = "i ' m  . f a r a g , ";
  //   let web = "w e b . d e v e l o p e r ";
  let dev = "f r o n t . e n d . d e v e l o p e r";

  let isScrolled = false;

  return (
    <Wrapper>
      <div className="container">
        {isScrolled && (
          <>
            <DownArror />
            <UpArrow />
          </>
        )}

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
          <button className="main-btn">Download CV</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  font-family: "Acme", sans-serif;

  .container {
    position: relative;

    .wrapper {
      height: calc(100vh - 100px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;

      .content {
        display: flex;
        flex-direction: column;
        gap: 0px;
        h2,
        h3 {
          display: flex;
          gap: 10px;
          margin: 0;
        }
        h2 {
          font-size: 80px;
          text-transform: uppercase;
        }
        h3 {
          font-size: 50px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      .wrapper {
        .content {
          h2 {
            font-size: 50px;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .wrapper {
        .content {
          gap: 10px;
          h2 {
            font-size: 40px;
            gap: 7px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding: 0 10px;
    .container {
      .wrapper {
        .content {
          h2:last-child {
            font-size: 28px;
            gap: 4px;
          }
        }
      }
    }
  }
`;
export default Hero;
