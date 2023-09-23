import React from "react";
import styled from "styled-components";
import Button from "./Button";
import colors from "../../../utils/colors";
import ChangeSrc from "./ChangeSrc";

export default function Privacy() {
  return (
    <Container>
      <div>
        <div className="privacy-heading">
          <h3>
            Privacy Policy and <span>Terms</span>
          </h3>
          <p className="updated">Last updated on september 12, 2023</p>
          <p className="about">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div class="policy">
          <p className="policy-note">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className="license">
            <h4>Licensing Policy</h4>
            <p>Here are terms of our Standard License:</p>
            <ul>
              <li>
                <img
                  src="/images/landing-page/list-terms.png"
                  alt="check mark"
                />
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </li>
              <li>
                <img
                  src="/images/landing-page/list-terms.png"
                  alt="check mark"
                />
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </li>
            </ul>
            <div class="button">
              <Button text="Read More" />
            </div>
          </div>
        </div>
      </div>
      <ChangeSrc
        mobile="/images/landing-page/privacy-mobile.png"
        desktop="/images/landing-page/privacy.png"
        alt="Privacy and Policy"
        className="privacy-image"
      />
    </Container>
  );
}

const Container = styled.section`
  font-size: 14px;
  min-height: 90vh;
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 40px 90px 60px 120px;
  background: url("/images/landing-page/flare.png");
  background-position: 0 400px;
  background-repeat: no-repeat;
  background-color: rgba(225, 225, 225, 0.03);

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .privacy-heading {
      h3 {
        font-family: clashDisplay;
        font-size: 32px;
        font-weight: bold;
        span {
          display: block;
          color: ${colors.pink};
        }
      }
      .updated {
        opacity: 75%;
        margin: 16px 0 24px;
      }
      .about {
        font-family: Montserrat;
        line-height: 1.9;
      }
    }
    .policy {
      border: 1px solid ${colors.pink};
      background: #d9d9d908;
      padding: 60px;
      border-radius: 5px;
      font-size: 14px;
      line-height: 1.9;
      .policy-note {
        margin-bottom: 40px;
      }
      .license {
        h4 {
          font-size: 16px;
          color: ${colors.pink};
        }
        & > p {
          font-size: 14px;
          font-weight: 800;
          margin: 16px 0 32px;
        }
        ul {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          li {
            display: flex;
            align-items: start;
            gap: 16px;
          }
        }
      }
    }
    .button {
      margin-top: 32px;
      display: flex;
      justify-content: center;
    }
  }

  img {
    max-width: 583px;
    max-height: 952px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 12px;
    flex-direction: column;
    padding: 4.5rem 2.875rem 5.25rem;
    background: url("/images/landing-page/flare.png");
    background-size: 350%;
    .policy {
      padding: 2.8125rem 0.8125rem !important;
      .policy-note {
        text-align: center;
        font-size: 12px;
      }
    }
    .license {
      h4 {
        font-size: 13px;
      }
      & > p {
        font-size: 12px;
      }
      ul {
        img {
          width: 17px;
          height: 17px;
        }
        p {
          font-size: 12px;
        }
      }
    }
    img {
      width: 100%;
    }
  }
`;
