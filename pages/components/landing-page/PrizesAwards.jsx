import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import ChangeSrc from "./ChangeSrc";

export default function PrizesAwards() {
  return (
    <Container>
      <div className="award--desc">
        <div className="award--heading">
          <h3>
            Prizes and <span>Awards</span>
          </h3>
          <p>
            Highlights of the prizes or rewards for the winners and for
            participants.
          </p>
        </div>
      </div>
      <ChangeSrc
        mobile="/images/landing-page/trophy-mobile.png"
        desktop="/images/landing-page/trophy.png"
        alt="Trophy Image"
        classname="trophy"
      />

      <ChangeSrc
        mobile="/images/landing-page/medals-mobile.png"
        desktop="/images/landing-page/medals.png"
        alt="Medals Image"
        classname="medals"
      />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  row-gap: 4.5rem;
  /* flex-direction: column; */
  grid-template-columns: repeat(6, 1fr);
  padding: 80px 106px;
  img {
    width: 100%;
  }
  .award--desc {
    max-width: 25.125rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    grid-column: 3/7;
    .award--heading {
      max-width: 401px;
      h3 {
        font-size: 2rem;
        font-family: clashDisplay;
        font-weight: bold;
        margin-bottom: 1rem;
        span {
          color: ${colors.pink};
          display: block;
        }
      }
    }
    p {
      font-size: 16px;
      font-family: Montserrat;
    }
  }
  .trophy {
    grid-column: 1/3;
    grid-row: 2;
  }
  .medals {
    padding-left: 5rem;
    grid-column: 3/7;
  }
  /* .award--images {
    display: flex;
    justify-content: space-between;
    .trophy {
      width: 40%;
    }
    .medals {
      width: 55%;
    }
  } */

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    gap: 2rem;
    padding: 4.5rem 3rem 5.6875rem;
    .award--desc {
      width: 100%;
      .award--heading {
        max-width: 277px;
        font-size: 20px;
        text-align: center;
      }
      p {
        font-size: 12px;
      }
    }
    .trophy {
      grid-row: 4;
      grid-column: 1/2;
    }
    .medals {
      padding: 0;
    }
  }
`;
