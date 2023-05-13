import React from "react";
import { styled } from "styled-components";
import world from "../assets/images/egypt.png";
const ContactComp = () => {
  return (
    <Wrapper>
      <div className="wrapper">
        <section className="form">
          <header>
            <h2>Contact me</h2>
            <p>
              I am always happy to hear from potential clients and partners. If
              you are interested in working with me, please feel free to contact
              me through my website. I would be happy to discuss your needs and
              see if I can be of assistance.
            </p>
          </header>
          <form action="">
            <div className="row">
              <div>
                <input type="text" placeholder="Name" />
                <span></span>
              </div>
              <div>
                <input type="email" placeholder="Email" />
                <span></span>
              </div>
            </div>
            <div className="row">
              <div>
                <input type="text" placeholder="Subject" />
                <span></span>
              </div>
            </div>
            <div className="row">
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <span></span>
              </div>
            </div>
            <button type="submit" className="main-btn">
              Send message!
            </button>
          </form>
        </section>
        <section className="img">
          <img src={world} alt="" aria-disabled />
        </section>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 100px 0;
  padding-bottom: 50px;
  .wrapper {
    display: flex;
    align-items: center;
    gap: 40px;

    section {
      width: calc(50% - 20px);
    }
    .form {
      padding-left: 40px;
      header {
        h2 {
          font-size: 40px;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.3;
          margin-bottom: 20px;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .row {
          width: 100%;
          display: flex;
          gap: 20px;
          div {
            width: 100%;
            display: flex;
            gap: 10px;
            input,
            textarea {
              width: 100%;
              padding: 15px;
              border: none;
              outline: none;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              &:focus ~ span {
                width: 100%;
              }
            }
            &,
            div {
              position: relative;
              span {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0px;
                height: 2px;
                background-color: var(--color-red);
                transition: 0.3s;
              }
            }
          }
        }
        button {
          margin-left: auto;
          margin-top: 20px;
          background-color: inherit;
          color: var(--color-red);
          border: 1px solid var(--color-red);
          padding: 10px 30px;
          font-weight: normal;
        }
      }
    }
    .img {
      user-select: none;
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
      }
    }
  }
`;
export default ContactComp;
