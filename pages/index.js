import Head from "next/head";
import Hero from "./components/landing-page/Hero";
import colors from "../utils/colors";
import Introduction from "./components/landing-page/Introduction";
import itemsData from "./components/landing-page/itemsData";
import Timeline from "./components/landing-page/Timeline";
import timelineData from "./components/landing-page/timelineData";
import PrizesAwards from "./components/landing-page/PrizesAwards";
import Privacy from "./components/landing-page/Privacy";
import Footer from "./components/landing-page/Footer";
import styled from "styled-components";
export default function Home() {
  const items = itemsData.map((value, index) => (
    <Introduction key={index} data={value} />
  ));

  const timeline = timelineData.map((item, index) => (
    <Timeline key={index} timelineData={item} />
  ));

  return (
    <div>
      <Head>
        <title>GetLinked</title>
        <meta name="description" content="GetLinked" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {items}
      <TimelineDiv>
        <div class="head">
          <h3>Timeline</h3>
          <p>
            Here is the breakdown of the timeline we anticipate using for the
            upcoming event.
          </p>
        </div>
        {timeline}
      </TimelineDiv>
      <PrizesAwards />
      <Privacy />
      <Footer />
    </div>
  );
}

const TimelineDiv = styled.div`
  padding: 32px 64px;
  text-align: center;
`;
