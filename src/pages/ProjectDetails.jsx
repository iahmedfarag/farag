import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { portfolio } from "../data.js";
import { useParams, Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
const ProjectDetails = () => {
  const { category, id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    if (category === "projects") {
      const proj = portfolio.projects.filter((item) => item.id === Number(id));
      setProject(...proj);
    }
    if (category === "extra") {
      const proj = portfolio.extra.filter((item) => item.id === Number(id));
      setProject(...proj);
    }
  }, []);

  if (!project) {
    return <></>;
  }

  // const { description, features, images, skills, thumbnail, title, urls } =
  //   project;

  if (project) {
    return (
      <Wrapper>
        <div className="container">
          <h1>
            <Link to="/portfolio">Portfolio / </Link> {project?.title}
          </h1>
          <div className="wrapper">
            <div className="images">
              {project?.images?.map((img, index) => {
                return <img key={index} src={img} />;
              })}
            </div>

            <div className="info">
              <h2>{project?.title}</h2>

              <div>
                <p>
                  {project?.description?.body}
                  <span></span>
                </p>
              </div>

              <div>
                <h3>Features</h3>
                <ul>
                  {project?.features?.map((feature, index) => {
                    return (
                      <li key={index}>
                        {feature}
                        <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  {project?.skills?.map((skill, index) => {
                    return (
                      <li key={index}>
                        {skill} <span></span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <Link to={project?.urls?.demo}>
                  Visit Website <BsFillShareFill />
                </Link>
                <Link to={project?.urls?.git}>
                  Github <AiFillGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.main`
  padding: 50px 0;

  .container {
    h1 {
      margin-bottom: 50px;
      color: var(--color-red);
      a {
        color: var(--color-black);
      }
    }
    .wrapper {
      display: flex;
      gap: 40px;
      .images {
        width: calc(60% - 20px);
        height: 700px;
        overflow-y: scroll;
        img {
          width: 100%;
        }
      }
      .info {
        width: calc(40% - 20px);
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          p,
          li {
            line-height: 1.2;
            position: relative;
            padding-left: 10px;
            span {
              position: absolute;
              height: 100%;
              width: 2px;
              background-color: var(--color-red);
              left: 0;
              top: 0;
            }
          }
          a {
            display: flex;
            align-items: center;
            gap: 5px;
            transition: 0.1s;
            &:hover {
              color: var(--color-red);
            }
          }
          ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          &:last-child {
            flex-direction: row;
            gap: 20px;
          }
          h3 {
            border-bottom: 1px solid var(--color-red);
            padding-bottom: 5px;
          }
          &.skills {
            ul {
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              li {
                width: calc(50% - 15px);
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      .wrapper {
        gap: 20px;

        .images {
          width: calc(60% - 10px);
        }
        .info {
          width: calc(40% - 10px);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      .wrapper {
        flex-wrap: wrap;
        gap: 30px;

        .images {
          width: calc(100%);
          height: 400px;
        }
        .info {
          width: calc(100%);
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export default ProjectDetails;
