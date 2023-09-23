import React, { useState } from "react";
import styled from "styled-components";
import { TailSpin } from "react-loading-icons";
import colors from "../../../utils/colors";
import CHeader from "./CHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    try {
      if (firstName.length > 0 && email.length > 0 && message.length > 0) {
        let formdata = {
          email: email,
          first_name: firstName,
          message: message,
        };
        let request = await fetch(
          "https://backend.getlinked.ai/hackathon/contact-form",
          {
            method: "POST",
            headers: {
              Content: "application/json",
            },
            body: JSON.stringify(formdata),
          }
        );
        if (request.ok) {
          toast.success("Thank you for cthe submission!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } else {
        notify("Field(s) cannot be empty");
      }
      setSubmitting(false);
    } catch (e) {
      notify("API Cors not enable to make cross origin request");
      setSubmitting(false);
    }
  };

  const notify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CHeader />

      <Body>
        <div className="gradient-3">
          <img src="/images/contact/mobile-gradient.svg" alt="" />
        </div>
        <div className="mobile-star">
          <img src="/images/contact/stars.svg" alt="" />
        </div>
        <section className="desc--container">
          <div className="gradient-1">
            <img src="/images/contact/gradient-1.svg" alt="" />
          </div>
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
            <img src="/icons/instagram.svg" alt="" />
            <img src="/icons/x.svg" alt="" />
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/linkedin.svg" alt="" />
          </div>
        </section>

        <FormContainer>
          <h3>Questions or need assistance?</h3>
          <h3>Let us know about it!</h3>
          <p className="mobile--txt">
            Email us below to any question related to our event
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <input
              type="text"
              name="team-name"
              id="#"
              placeholder="Team’s Name"
            /> */}
            {/* <input type="text" name="topic" id="#" placeholder="Topic" /> */}
            <input
              type="text"
              name="firstname"
              id="#"
              placeholder="Firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="#"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              name="message"
              id="#"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
              {!submitting && <span>Submit</span>}
              {submitting && <TailSpin fontSize={8}></TailSpin>}
            </button>
          </form>

          <FormFooter>
            <h3>Share on</h3>
            <div className="icons">
              <img src="/icons/instagram.svg" alt="" />
              <img src="/icons/x.svg" alt="" />
              <img src="/icons/facebook.svg" alt="" />
              <img src="/icons/linkedin.svg" alt="" />
            </div>
          </FormFooter>
          <div className="gradient-2">
            <img src="/images/contact/gradient-2.svg" alt="" />
          </div>
        </FormContainer>
      </Body>
    </MainContainer>
  );
}

const MainContainer = styled.header`
  width: 100vw;
  /* padding-bottom: 7.188rem; */
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
  @media screen and (max-width: 992px) {
    border-bottom: 2.25rem;
    flex-direction: column;
    padding-inline: 2.5rem;
    margin-top: 2.563rem;
    justify-content: center;
    align-items: center;
  }

  .gradient-1 {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    transform: translate(-100px, -50px);
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .gradient-2 {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    transform: translate(200px, 50px);
    z-index: 2;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .gradient-3 {
    position: absolute;
    left: 0;
    top: 0;
    /* opacity: 0.5; */
    /* transkform: translate(0px, 100px); */
    @media screen and (min-width: 993px) {
      display: none;
    }
  }
  .mobile-star {
    position: absolute;
    left: 0;
    bottom: 0;
    /* opacity: 0.5; */
    /* transkform: translate(0px, 100px); */
    @media screen and (min-width: 993px) {
      display: none;
    }
  }
  section.desc--container {
    @media screen and (max-width: 992px) {
      display: none;
    }
    padding-top: 3rem;
    position: relative;

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
  position: relative;
  @media screen and (max-width: 1400px) {
    padding-top: 2.813rem;
    padding-bottom: 4.188rem;
    padding-inline: 3rem;
    width: 50%;
  }
  @media screen and (max-width: 992px) {
    background-color: transparent;
    padding-inline: 0;
    box-shadow: none;
  }
  h3 {
    color: ${colors.pink};
    font-family: "ClashDisplay";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p.mobile--txt {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.5rem;
    @media screen and (min-width: 993px) {
      display: none;
    }
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
      z-index: 90000000;
      &::placeholder {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      &[name="firstname"] {
        @media screen and (max-width: 992px) {
          /* display: none; */
        }
      }
      &[name="topic"],
      &[name="team-name"] {
        @media screen and (min-width: 993px) {
          display: none;
        }
      }
    }
    textarea {
      width: 100%;
      height: 119px;
      flex-shrink: 0;
      border-radius: 4px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      resize: none;
      padding: 15px;
      z-index: 20000;
      &::placeholder {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
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
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
    }
  }
`;

const FormFooter = styled.footer`
  @media screen and (min-width: 993px) {
    display: none;
  }
  margin-top: 2.563rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: #d434fe;
    font-size: 0.75rem;
    font-weight: 400;
  }
  div.icons {
    display: flex;
    column-gap: 13px;
    img {
      margin-top: 0.5rem;
      width: 0.438rem;
      height: 0.438rem;
    }
  }
`;
export default Contact;
