import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Footer() {
  return (
    <Container>
      <div class="footer">
        <div className="about">
          <div className="title">
            get<span>linked</span>
          </div>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p>
            <a href="#">
              Terms of Use{" "}
              <span style={{ color: colors.pink, fontWeight: "bold" }}>|</span>{" "}
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="useful-links">
          <ul>
            <span>Useful Links</span>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#register">Register</a>
            </li>
            <li>
              <ul className="follow-us">
                <span>Follow Us</span>
                <li>
                  <img src="/images/landing-page/instagram.png" alt="" />
                </li>
                <li>
                  <img src="/images/landing-page/x.png" alt="" />
                </li>
                <li>
                  <img src="/images/landing-page/facebook.png" alt="" />
                </li>
                <li>
                  <img src="/images/landing-page/linkedin.png" alt="" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <img src="images/landing-page/contact.png" alt="" />{" "}
              <p>+234 679 81819</p>
            </li>
            <li>
              <img src="images/landing-page/location.png" alt="" />
              <p>27, Alara Street Yaba 100012 Lagos State</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">All rights reserved. © getlinked Ltd.</div>
    </Container>
  );
}

const Container = styled.footer`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.7;
  padding: 70px 200px 40px;
  background: #100b20;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .footer {
    display: flex;
    justify-content: space-between;
    .about {
      max-width: 420px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-family: "ClashDisplay";
        font-size: 2.25rem;
        color: white;
        span {
          color: ${colors.pink};
        }
      }
    }
    .useful-links > ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      span {
        font-size: 14px;
        font-weight: bold;
        color: ${colors.pink};
      }
      .follow-us {
        font-weight: bold;
        list-style-type: none;
        color: ${colors.pink};
        display: flex;
        gap: 1rem;
        align-items: flex-end;
        span {
        }
      }
    }
    .contact-us {
      h4 {
        color: ${colors.pink};
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      ul {
        list-style: none;
        li {
          display: flex;
          align-items: start;
          gap: 0.625rem;
          margin-bottom: 1rem;
          p {
            width: 100px;
          }
        }
      }
    }
  }
  .right {
    text-align: center;
    margin-top: 3.3125rem;
  }
  @media screen and (max-width: 1100px) {
    padding: 51px 67px;
    .footer {
      flex-direction: column;
      .about {
        p {
          font-size: 12px;
        }
      }
      .useful-links {
        margin-bottom: 1.2rem;
        span {
          font-size: 12px;
        }
      }
    }
  }
`;
