import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import CHeader from "../contact/CHeader";
function Register() {
  return (
    <MainContainer>
      <OverlayAlert>
        <div className="container">
          <img src="/images/register/congrats.svg" alt="gradient" />
          <h1>
            Congratulations
            <br />
            you have successfully Registered!
          </h1>
          <p>
            Yes, it was easy and you did it! check your mail box for next step
            <img src="/images/register/emoji.svg" alt="emoji" />
          </p>
          <button>Back</button>
        </div>
      </OverlayAlert>
      <CHeader />
      <Body>
        <section className="desc--container">
          <img src="/images/register/3d-men.svg" alt="3d-men" />
        </section>

        <FormContainer>
          <h1>Register</h1>
          <div className="movement">
            <p>Be part of this movement!</p>
            <h2>CREATE YOUR ACCOUNT</h2>
          </div>
          <form>
            <div className="inputContainer">
              <label htmlFor="teamname">Team’s Name</label>
              <input
                type="text"
                name="teamname"
                id="#"
                placeholder="Enter the name of your group"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="#"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="#"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="topic">Project Topic</label>
              <input
                type="text"
                name="topic"
                id="#"
                placeholder="What is your group project topic"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="#"
                placeholder="Category"
              />
            </div>
            <div>
              <label htmlFor="groupsize">Group Size</label>

              <select name="groupSize" placeholder="Select">
                <option value="first">1 - 30</option>
                <option value="second">30 - 90</option>
                <option value="third">So many</option>
              </select>
            </div>
          </form>
          <p className="warning">
            Please review your registration details before submitting
          </p>
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button type="submit">Submit</button>
        </FormContainer>
      </Body>
      <div className="gradient--2">
        <img src="/images/register/gradient-2.svg" alt="gradient" />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.header`
  width: 100vw;
  padding-bottom: 7.188rem;
  background-color: ${colors.darkPurple};
  div.gradient--2 {
    position: absolute;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    img {
      object-fit: cover;
      opacity: 0.7;
      transform: translateY(10px);
    }
  }
`;

const Body = styled.section`
  padding-inline-start: 0rem;
  padding-inline-end: 8rem;
  display: flex;
  margin-top: 9.8125rem;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 1400px) {
    margin-top: 0rem;
    padding-inline-start: 0;
    padding-inline-end: 7rem;
  }

  section.desc--container {
    width: 50%;
    display: flex;
    align-items: start;
    img {
      transform: translateY(-100px);
    }
  }
`;

const FormContainer = styled.section`
  width: 50%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-inline: 5.625rem;
  padding-top: 75px;
  padding-bottom: 4.188rem;
  margin-top: 6rem;
  @media screen and (max-width: 1400px) {
    padding-top: 2.813rem;
    padding-bottom: 3.5rem;
    padding-inline: 3rem;
    margin-top: 1rem;
  }
  h1 {
    color: ${colors.pink};
    font-family: "ClashDisplay";
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
  }
  div.movement {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
    color: #fff;
    margin-top: 2.875rem;

    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      margin-top: 1.188rem;
    }
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    column-gap: 3.5rem;
    margin-top: 34px;
    align-items: center;
    @media screen and (max-width: 1400px) {
      column-gap: 1.875rem;
      row-gap: 1.875rem;
    }
    div {
      input,
      select {
        width: 100%;
        height: 2.938rem;
        border-radius: 4px;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-inline: 26px;
        margin-top: 11px;
        z-index: 1;

        &::placeholder {
          color: rgba(255, 255, 255, 0.25);
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
        }
        option {
          color: black;
        }
      }
      label {
        color: #fff;
        font-family: Montserrat;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  button {
    width: 100%;
    height: 3.313rem;
    border-radius: 4px;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    border: 0;
    margin-top: 1.375rem;
  }
  p.warning {
    color: #ff26b9;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.438rem;
  }
  div.checkbox {
    display: flex;
    column-gap: 10px;
    margin-top: 1rem;
    p {
      color: #fff;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const OverlayAlert = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #150e28e8;
  z-index: 999999999999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  div.container {
    padding-inline: 3.375rem;
    padding-top: 2rem;
    padding-bottom: 4.563rem;
    border-radius: 5px;
    border: 1px solid #d434fe;
    background: rgba(255, 255, 255, 0.01);
    @media screen and (max-width: 1400px) {
      padding-bottom: 2rem;
      padding-inline: 2.5rem;
      padding-top: 1rem;
    }

    h1 {
      color: #fff;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      line-height: normal;
    }
    p {
      width: 50%;
      color: #fff;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      margin-top: 0.938rem;
      margin-inline: auto;
      img {
        width: 1.25rem;
        height: 1.25rem;
        transform: translate(5px, 4px);
      }
    }
    button {
      border-radius: 4px;
      margin-top: 2.25rem;
      background: linear-gradient(
        270deg,
        #903aff 0%,
        #d434fe 56.42%,
        #ff26b9 99.99%,
        #fe34b9 100%
      );
      width: 100%;
      height: 3.313rem;
      border: 0;
    }
  }
`;
export default Register;
