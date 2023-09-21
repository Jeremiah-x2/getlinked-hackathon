import React from "react";
import styled from "styled-components";
import Button from "./Button";
import colors from "../../../utils/colors";

export default function Privacy() {
  return (
    <Container>
      <div>
        <div className="privacy-heading">
          <h3>
            Privacy Policy and <span>Terms</span>
          </h3>
          <p>Last updated on september 12, 2023</p>
          <p>
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
      <img
        src="/images/landing-page/privacy.png"
        alt="Privacy and Policy"
        className="privacy-image"
      />
    </Container>
  );
}

const Container = styled.section`
  min-height: 90vh;
  padding: 40px 90px 60px 120px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    .privacy-heading {
      h3 {
        span {
          display: block;
          color: ${colors.pink};
        }
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
          color: ${colors.pink};
        }
        & > p {
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
`;
