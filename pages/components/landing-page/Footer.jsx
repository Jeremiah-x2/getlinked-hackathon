import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Footer() {
  return (
    <Container>
      <div>
        <div className="title">
          get<span>linked</span>
        </div>
        <p>
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
        <p>
          <a href="#">Terms of Use | Privacy Policy</a>
        </p>
      </div>
      <div>
        <h4>Useful Links</h4>
        <ul>
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
            <ul>
              <h5>Follow Us</h5>
              <li>
                <img src="/instagram.png" alt="" />
              </li>
              <li>
                <img src="/x.png" alt="" />
              </li>
              <li>
                <img src="/facebook.png" alt="" />
              </li>
              <li>
                <img src="/linkedin.png" alt="" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="contact-us">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <img src="/contact.png" alt="" /> <span>+234 679 81819</span>
          </li>
          <li>
            <img src="/location.png" alt="" />{" "}
            <span>27,Alara Street Yaba 100012 Lagos State</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  .title {
    font-family: "ClashDisplay";
    font-size: 2.25rem;
    color: white;
    span {
      color: ${colors.pink};
    }
  }
`;
