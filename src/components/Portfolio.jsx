import React, { useState } from "react";
import { styled } from "styled-components";
import { portfolio as projects } from "../data.js";

import Project from "./Project.jsx";
const Portfolio = () => {
  const [isExtra, setIsExtra] = useState(false);
  return (
    <Wrapper>
      <div className="container">
        <h2>Portfolio</h2>
        <div className="wrapper">
          <div className="projects">
            {projects.projects.map((project) => {
              const {
                id,
                thumbnail,
                images,
                title,
                short_description,
                description,
                skills,
                urls,
              } = project;
              return (
                <Project
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  title={title}
                  short_description={short_description}
                  urls={urls}
                  category={"projects"}
                />
              );
            })}
          </div>
          <button
            className="main-btn"
            onClick={() => {
              setIsExtra(!isExtra);
            }}
          >
            Extra Projects
          </button>
          <div className="projects extra">
            {isExtra &&
              projects.extra.map((project) => {
                const {
                  id,
                  thumbnail,
                  images,
                  title,
                  short_description,
                  description,
                  skills,
                  urls,
                } = project;
                return (
                  <Project
                    key={id}
                    id={id}
                    thumbnail={thumbnail}
                    title={title}
                    short_description={short_description}
                    urls={urls}
                    category={"extra"}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 100px 0;
  .container {
    h2 {
      margin-bottom: 50px;
      font-size: 40px;
      letter-spacing: 5px;
      font-family: "Acme", sans-serif;
    }
    .wrapper {
      .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        &.extra {
          margin-top: 50px;
        }
      }
      .main-btn {
        margin: 0 auto;
        margin-top: 50px;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .wrapper {
        .projects {
          gap: 20px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export default Portfolio;
