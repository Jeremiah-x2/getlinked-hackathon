import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import Link from "next/link";

function Header() {
  const [showMenu, setShowMenu] = useState("");
  function handleShowMenu() {
    setShowMenu("show--menu");
  }
  function handleCloseMenu() {
    setShowMenu("");
  }
  return (
    <Container>
      <div className="title">
        {/* <Link href="/"> */}
        get<span>linked</span>
        {/* </Link> */}
      </div>

      <div className={["nav--list", showMenu].join(" ")}>
        <div className="close--menu" onClick={handleCloseMenu}>
          <img src="/images/landing-page/close-menu.png" alt="Close menu" />
        </div>
        <nav>
          {["Timeline", "Overview", "FAQs", "Contact"].map((value, index) => {
            return value == "Contact" ? (
              <Link key={index} href="/contact">
                <p key={index}>{value}</p>
              </Link>
            ) : (
              <p key={index}>{value}</p>
            );
          })}
        </nav>
        <Link href="/register">
          <button>Register</button>
        </Link>
      </div>
      <img
        src="/images/landing-page/hamburger.png"
        alt="Menu"
        onClick={handleShowMenu}
        className="menu"
      />
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  padding-top: 4.188rem;
  padding-bottom: 1.875rem;
  padding-inline-start: 8rem;
  padding-inline-end: 8rem;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  align-items: center;
  @media screen and (max-width: 1400px) {
    padding-top: 1.875rem;
    margin-bottom: 2rem;
  }
  .title {
    font-family: "ClashDisplay";
    font-size: 2.25rem;
    color: white;
    span {
      color: ${colors.pink};
    }
  }
  .menu {
    display: none;
  }

  .nav--list {
    display: flex;
    column-gap: 3.5rem;
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
      align-items: center;
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
    .close--menu {
      display: none;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 28px 49px;
    justify-content: space-between;
    .title {
      font-size: 0.9375rem;
    }
    .nav--list {
      display: none;
      &.show--menu {
        padding: 7.4375rem 2.9375rem 8.8125rem;
        display: flex;
        align-items: start;
        row-gap: 1.5rem;
        position: absolute;
        top: 0;
        left: 50%;
        translate: -50% 0;
        width: 95%;
        flex-direction: column;
        background: ${colors.darkPurple};
        border-radius: 8px;
        z-index: 10;
        nav {
          flex-direction: column;
          justify-content: start;
          align-items: start;
          margin: 0;
          padding: 0;
          row-gap: 1.5rem;
        }
        button {
          margin: 0;
        }
        .close--menu {
          display: block;
          position: absolute;
          top: 30px;
          right: 40px;
        }
      }
    }

    .menu {
      display: block;
    }
  }
`;

export default Header;
