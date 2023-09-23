import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Partners() {
  return (
    <Partner>
      <div className="head">
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="partners-image">
        <img src="/images/landing-page/partners.png" alt="Partners" />
      </div>
    </Partner>
  );
}

const Partner = styled.section`
  border-bottom: 1px solid #ffffff2e;
  padding: 7.125rem 8rem;
  text-align: center;
  background: url("/images/landing-page/flare.png"),
    url("/images/landing-page/flare.png");
  background-position: 0 -100px;
  background-repeat: no-repeat;
  background-color: rgba(225, 225, 225, 0.04);

  h3 {
    font-family: clashDisplay;
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    margin: 1.25rem auto 0;
    font-size: 0.875rem;
    max-width: 27.9375rem;
    line-height: 1.9;
  }
  .partners-image {
    max-width: 68.75rem;
    max-height: 35rem;
    margin: 4.0625rem auto 0;
    padding: 9rem 11.125rem;
    border-radius: 0.3125rem;
    border: 0.0625rem solid ${colors.pink};
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1100px) {
    padding: 2.5625rem 1.875rem 6.5rem;
    background: url("/images/landing-page/flare-mobile.png");
    background-size: 140%;
    h3 {
      font-size: 1.25rem;
      line-height: 1.4;
    }
    p {
      font-size: 12px;
      line-height: 1.7;
    }
    .partners-image {
      width: 100%;
      padding: 2.3125rem 2.9375rem;
    }
  }
`;
