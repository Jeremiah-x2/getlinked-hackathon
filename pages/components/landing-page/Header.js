import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";

function Header() {
  return (
    <Container>
      <div className="title">
        get<span>linked</span>
      </div>

      <nav>
        {["Timeline", "Overview", "FAQs", "Contact"].map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </nav>

      <button>Register</button>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  padding-top: 4.188rem;
  padding-bottom: 1.875rem;
  padding-inline-start: 8rem;
  padding-inline-start: 8rem;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  align-items: center;
  .title {
    font-family: "ClashDisplay";
    font-size: 2.25rem;
    color: white;
    span {
      color: ${colors.pink};
    }
  }

  nav {
    font-family: "Montserrat";
    color: #fff;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    column-gap: 3.5rem;
    color: white;
    margin-left: 22.25rem;
    padding-right: 3.563rem;
  }

  button {
    padding-inline: 3.25rem;
    padding-block: 1.063rem;
    border-radius: 4px;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    border: 0;
    outline: 0;
    color: white;
    font-weight: normal;
  }
`;

export default Header;