import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import CHeader from "./CHeader";
function Contact() {
  return (
    <MainContainer>
      <CHeader />

      <Body>
        <section className="desc--container">
          <h1>Get in touch</h1>
          <p className="first--txt">
            <span>Contact</span>
            <span>Information</span>
          </p>

          <p className="second--txt">
            <span>27,Alara Street</span>
            <span>Yaba 100012</span>
            <span>Lagos State</span>
          </p>

          <p className="third--txt">
            <span>Call Us : 07067981819</span>
          </p>

          <p className="fourth--txt">
            <span>we are open from Monday-Friday</span>
            <span>08:00am - 05:00pm</span>
          </p>

          <h3>Share on</h3>

          <div className="icons">
            <img src="/icons/instagram.svg" />
            <img src="/icons/x.svg" />
            <img src="/icons/facebook.svg" />
            <img src="/icons/linkedin.svg" />
          </div>
        </section>

        <FormContainer>
          <h3>Questions or need assistance?</h3>
          <h3>Let us know about it!</h3>

          <form>
            <input
              type="text"
              name="firstname"
              id="#"
              placeholder="Firstname"
            />
            <input type="email" name="email" id="#" placeholder="Email" />
            <textarea type="text" name="message" id="#" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </Body>
    </MainContainer>
  );
}

const MainContainer = styled.header`
  width: 100vw;
  padding-bottom: 7.188rem;
  background-color: ${colors.darkPurple};
`;

const Body = styled.section`
  padding-inline: 11.75rem;
  display: flex;
  margin-top: 9.8125rem;
  justify-content: space-between;
  row-gap: 40px;
  @media screen and (max-width: 1400px) {
    margin-top: 6rem;
    padding-inline: 6rem;
  }

  section.desc--container {
    padding-top: 3rem;
    h1 {
      color: #d434fe;
      font-family: "ClashDisplay";
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p {
      color: #fff;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      flex-direction: column;
      margin-top: 1.0625rem;
      span {
        margin-top: 2px;
      }
    }
    h3 {
      color: #d434fe;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin-top: 2.188rem;
    }
    div.icons {
      display: flex;
      column-gap: 19px;
      img {
        margin-top: 19px;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const FormContainer = styled.section`
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-inline: 5.625rem;
  padding-top: 4.688rem;
  padding-bottom: 67px;
  @media screen and (max-width: 1400px) {
    padding-top: 2.813rem;
    padding-bottom: 4.188rem;
    padding-inline: 3rem;
  }
  h3 {
    color: ${colors.pink};
    font-family: "ClashDisplay";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 56px;
    margin-top: 34px;
    align-items: center;
    @media screen and (max-width: 1400px) {
      row-gap: 30px;
    }
    input {
      width: 100%;
      height: 47px;
      border-radius: 4px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      padding-left: 15px;
      &::placeholder {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    textarea {
      width: 437px;
      height: 119px;
      flex-shrink: 0;
      border-radius: 4px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      resize: none;
      &::placeholder {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 15px;
      }
    }
    button {
      width: 10.75rem;
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
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      border: 0;
    }
  }
`;

export default Contact;
