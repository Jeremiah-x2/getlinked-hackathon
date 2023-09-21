import styled from "styled-components";
import colors from "../../../utils/colors";
import Header from "./Header";
import Button from "./Button";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <div className="getLinked">
            <img
              src="/images/landing-page/getLinked.svg"
              className="getLinked-image"
            />
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
            <img
              src="/images/landing-page/Hero.svg"
              alt="Hero Image"
              className="hero-image"
            />
          </div>
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
  width: 100vw;
  height: 100vh;
  padding-left: 8.1875rem;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  border-bottom: 1px solid;

  .getLinked {
    grid-column: 1/8;
    grid-row-start: 1;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 32px 0;
    .getLinked-image {
      width: 90%;
    }
  }
  .hero {
    position: relative;
    grid-column: 5/15;
    grid-row-start: 1;
    /* border: 1px solid green; */
    height: 100vh;
    overflow: hidden;
    display: flex;

    img {
      width: 130%;
      height: 105%;
      /* border: 1px solid orange; */
    }
  }
  .countdown {
    display: flex;
    gap: 1.5rem;
    & > span {
      font-size: 64px;
      span {
        font-size: 14px;
      }
    }
  }
`;
