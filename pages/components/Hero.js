import styled from "styled-components";
import colors from "../../utils/colors";
import Header from "./Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero></Hero>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.darkPurple};
`;

const Hero = styled.section`
  width: 100vw;
  height: 85vh;
  font-family: "Montserrat";
  h1 {
    text-align: center;
    color: red;
  }
`;
