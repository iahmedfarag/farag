import React from "react";
import { styled } from "styled-components";
import icon from "../assets/images/logo/favicon3.ico";
import { navLinks } from "../data.js";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          {/* logo */}
          <div className="logo">
            <a href="/">
              <img src={icon} alt="logo" />
            </a>
          </div>
          {/* nav links */}
          <div className="nav-links">
            <ul>
              {navLinks.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* fill */}
          <div className="empty"></div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  font-family: "Acme", sans-serif;
  /* width: 100%; */
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #fff;
  .container {
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
      }
      .nav-links {
        ul {
          display: flex;
          gap: 30px;
          li {
            a {
              font-size: 24px;
            }
          }
        }
      }
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }
`;
export default Navbar;
