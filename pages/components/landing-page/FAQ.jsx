import React from "react";
import styled from "styled-components";
import faq from "./faqData";

export default function FAQ() {
  return (
    <Container>
      <header>
        We got answers to the questions that you might want to ask about
        getlinked Hackathon 1.0
      </header>
      <div>
        {faq.map((item) => (
          <div>
            <h4 class="question">{item.question}</h4>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div``;
