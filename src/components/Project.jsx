import React, { useState } from "react";
import { styled } from "styled-components";

import { AiFillGithub } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Project = ({
  id,
  thumbnail,
  title,
  short_description,
  urls,
  category,
}) => {
  return (
    <Wrapper key={id}>
      <img src={thumbnail} alt="project" />

      <div>
        <h3>
          <Link to={`/${category}/${id}`}>{title}</Link>
        </h3>
        <p>{short_description}</p>
        <div>
          <Link to={`/${category}/${id}`} className="more-btn">
            More Details
          </Link>
          <Link to={urls.git} target="_blank">
            <AiFillGithub />
          </Link>
          <Link to={urls.demo} target="_blank">
            <BsFillShareFill />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background-color: var(--color-white);
  width: calc(50% - 20px);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    div {
      div {
        .more-btn {
          color: var(--color-red);
        }
      }
    }
  }
  img {
    width: 100%;
    height: 300px;
  }

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
      a {
        transition: 0.1s;
        &:hover {
          color: var(--color-red);
        }
      }
    }
    p {
      color: var(--color-black-4);
      line-height: 1.5;
    }
    div {
      margin-top: auto;
      display: flex;
      flex-direction: row;
      gap: 20px;
      a {
        transition: 0.1s;

        &:hover {
          color: var(--color-red);
        }
        svg {
          font-size: 18px;
        }
      }
      .more-btn {
        margin-right: auto;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Project;
