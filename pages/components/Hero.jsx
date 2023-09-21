import styled from "styled-components";
import colors from "../../utils/colors";
import Header from "./Header";
import Button from "./Button";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <div className="getLinked">
            <img src="getLinked.svg" className="getLinked-image" />
            <Button text="Register" />
            <div className="countdown">
              <span>
                00 <sub>H</sub>
              </span>
              <span>
                00 <sub>M</sub>
              </span>
              <span>
                00 <sub>S</sub>
              </span>
            </div>
          </div>
          {/* <p>Igniting a Revolution in HR Innovation</p> */}

          <div className="hero">
            <img src="Hero.svg" alt="Hero Image" className="hero-image" />
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
  grid-template-columns: repeat(12, 1fr);
  border-bottom: 1px solid;

  .getLinked {
    grid-column: 1/6;
    .getLinked-image {
      width: 100%;
    }
  }
  .hero {
    position: relative;
    grid-column: 6/13;
    border: 1px solid green;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
