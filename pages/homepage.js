import React from "react";
import Head from "next/head";
import Hero from "./components/landing-page/Hero";
import colors from "../utils/colors";
import Introduction from "./components/landing-page/Introduction";
import Timelineloop from "./components/landing-page/Timeline";
import timelineData from "../Data/timelineData";
import PrizesAwards from "./components/landing-page/PrizesAwards";
import Privacy from "./components/landing-page/Privacy";
import Footer from "./components/landing-page/Footer";
import styled from "styled-components";
import Partners from "./components/landing-page/Partners";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Timelineloop />
      <PrizesAwards />
      <Partners />
      <Privacy />
      <Footer />
    </div>
  );
}
