import React from "react";
import styled from "styled-components";
import { faq } from "../../../Data/faqData";
import colors from "../../../utils/colors";

export default function FAQ() {
  return (
    <Container>
      <header>
        We got answers to the questions that you might want to ask about
        <span>getlinked Hackathon 1.0</span>
      </header>
      <div>
        {faq.map((item, index) => (
          <div key={index} className="question-container">
            <h4 className="question">
              {item.question} <span>+</span>
            </h4>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  max-width: 427px;

  header {
    margin-bottom: 60px;
    span {
      font-weight: bold;
    }
  }
  .question-container {
    border-bottom: 1px solid ${colors.pink};
    padding-bottom: 13px;
    margin-top: 13px;
    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      line-height: 1.9;
      @media screen and (max-width: 1200px) {
        text-align: left;
        font-size: 12px;
        line-height: 1.5;
      }
      span {
        font-size: 20px;
        color: ${colors.pink};
      }
    }
  }
`;
