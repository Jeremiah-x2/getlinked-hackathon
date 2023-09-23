import styled from "styled-components";
import Header from "../Header";
import Button from "./Button";
import ChangeSrc from "./ChangeSrc";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <p class="ignite">Igniting a Revolution in HR Innovation</p>
          <div className="getLinked">
            <ChangeSrc
              mobile="/images/landing-page/getLinked-mobile.png"
              desktop="/images/landing-page/getLinked.png"
            />
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button text="Register" />
            <div className="countdown">
              <span>
                00<span>H</span>
              </span>
              <span>
                00<span>M</span>
              </span>
              <span>
                00<span>S</span>
              </span>
            </div>
          </div>
          {/* <p>Igniting a Revolution in HR Innovation</p> */}
          <div className="hero">
            <ChangeSrc
              mobile="/images/landing-page/hero-mobile.png"
              desktop="/images/landing-page/hero.png"
            />
          </div>
          <p></p>
        </Hero>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Hero = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-left: 8.1875rem;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  border-bottom: 1px solid #ffffff2e;
  overflow: hidden;
  &::before {
    content: "";
    width: 200%;
    height: 200%;
    background: url("/images/landing-page/flare.png");
    background-size: cover;
    position: absolute;
    top: -20px;
  }

  .ignite {
    position: absolute;
    right: 72px;
    font-size: 36px;
    font-family: Montserrat;
    font-style: italic;
    font-weight: bold;
    &::before {
      content: "";
      width: 253px;
      height: 40px;
      position: absolute;
      right: 0;
      bottom: -100%;
      border: 5px solid transparent;
      border-top: 5px solid #ff26b9;
      border-radius: 100%;
    }
  }

  .getLinked {
    grid-column: 1/8;
    grid-row-start: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 32px 0;
    .getLinked-image {
      width: 90%;
    }
    p {
      font-family: Montserrat;
      font-size: 1.25rem;
    }
  }
  .hero {
    position: relative;
    grid-column: 7/15;
    grid-row-start: 1;
    height: 100vh;
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
      height: 110%;
    }
  }
  .countdown {
    display: flex;
    gap: 1.5rem;
    font-family: UnicaOne;
    & > span {
      font-size: 64px;
      span {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    .ignite {
      margin-top: 1.9375rem;
      text-align: center;
      position: relative;
      top: 0;
      left: 0;
      display: inline-block;
      margin-bottom: 2rem;
      font-size: 16px;
      &::before {
        content: "";
        width: 115px;
        height: 20px;
        position: absolute;
        right: 30px;
        bottom: -150%;
        border: 3px solid transparent;
        border-top: 3px solid #ff26b9;
        border-radius: 100%;
      }
    }
    .getLinked {
      padding: 0 50px 0;
      text-align: center;
      p {
        font-size: 0.8125rem;
        line-height: 1.6;
      }
      button {
        margin: 24px auto;
      }
    }
    .hero {
      position: relative;
      top: 5px;
      height: auto;
      img {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }
`;
