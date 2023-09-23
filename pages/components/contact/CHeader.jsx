import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import { BsChevronLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

function CHeader() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/");
  };
  return (
    <Container>
      <div className="chevron--container">
        <div className="chevron">
          <BsChevronLeft />
        </div>
      </div>

      <div className="title" onClick={() => handleButtonClick()}>
        get<span>linked</span>
      </div>

      <nav>
        {["Timeline", "Overview", "FAQs", "Contact"].map((value, index) => {
          return value == "Contact" ? (
            <Link href="/contact">
              <p
                key={index}
                className={value == "Contact" ? "gradientText" : ""}
              >
                {value}
              </p>
            </Link>
          ) : (
            <p key={index} className={value == "Contact" ? "gradientText" : ""}>
              {value}
            </p>
          );
        })}
      </nav>
      <Link href="/register">
        <button>Register</button>
      </Link>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  padding-top: 4.188rem;
  padding-bottom: 1.875rem;
  padding-inline: 8rem;
  display: flex;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.18); */
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    padding-inline: 2.813rem;
    padding-top: 2.5rem;
  }
  @media screen and (max-width: 992px) {
    border-bottom: 0;
    padding-bottom: 0;
  }
  .chevron--container {
    @media screen and (min-width: 993px) {
      display: none;
    }
    width: 1.45rem;
    height: 1.45rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    .chevron {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      background: ${colors.darkPurple};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 12px;
        height: 12px;
        display: flex;
        border-radius: 50%;
        align-items: center;
      }
    }
  }
  .title {
    font-family: "ClashDisplay";
    font-size: 2.25rem;
    color: white;
    span {
      color: ${colors.pink};
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  nav {
    color: #fff;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    column-gap: 56px;
    color: white;
    margin-left: 22.25rem;
    padding-right: 3.563rem;
    @media screen and (max-width: 992px) {
      display: none;
    }
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
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
`;

export default CHeader;
