import React from "react";
import styled from "styled-components";

export default function PrizesAwards() {
  return (
    <Container>
      <div>
        <img src="/trophy.png" alt="" />
      </div>
      <div>
        <h3>
          Prizes and <span>Awards</span>
        </h3>
        <p>
          Highlights of the prizes or rewards for the winners and for
          participants.
        </p>
        <img src="/medals.png" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  padding: 30px 40px;
`;
