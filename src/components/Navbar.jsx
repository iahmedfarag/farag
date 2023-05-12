import React from "react";
import { styled } from "styled-components";
import icon from "../assets/images/logo/favicon3.ico";
import { navLinks } from "../data.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          {/* logo */}
          <div className="logo">
            <Link to="/">
              <img src={icon} alt="logo" />
            </Link>
          </div>
          {/* nav links */}
          <div className="nav-links">
            <ul>
              {navLinks.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
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
          gap: 20px;
          li {
            a {
              font-size: 24px;
              padding: 10px;
              transition: 0.1s;
              &:hover {
                /* box-shadow: rgba(172, 22, 22, 0.2) 0px 2px 8px 0px; */
                color: var(--color-red);
              }
            }
          }
        }
      }
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }

  @media (max-width: 576px) {
    .container {
      .wrapper {
        .nav-links {
          ul {
            li {
              a {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
`;
export default Navbar;
