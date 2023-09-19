import styled from "styled-components";
import colors from "../../utils/colors";

export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>GetLinked</h1>
      </Hero>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.others};
`;

const Hero = styled.section`
  width: 100vw;
  height: 85vh;
  h1 {
    text-align: center;
    color: red;
  }
`;
