import React from "react";
import styled from "styled-components";
import colors from "../../../utils/colors";
import timelineData from "./timelineData";
import { useState, useEffect } from "react";

export function Timeline(props) {
  const { title, task, num, date, id } = props.timelineData;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [style, setStyle] = useState("");
  const [textAlign, setTextAlign] = useState("");
  const [textAlignDate, setTextAlignDate] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1100) {
        setIsSmallScreen(true);
        setStyle("column");
        setTextAlign("left");
        setTextAlignDate("left");
      } else {
        setIsSmallScreen(false);
        setStyle(id % 2 === 0 ? "row" : "row-reverse");
        setTextAlign(id % 2 === 0 ? "right" : "left");
        setTextAlignDate(id % 2 === 0 ? "left" : "right");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className="number">{num}</div>
      <div
        className="timeline"
        style={{
          flexDirection: style,
        }}
      >
        <div className="head-wrapper" style={{ textAlign: textAlign }}>
          <h3 className="head-title">{title}</h3>
          <p>{task}</p>
        </div>
        <div className="date" style={{ textAlign: textAlignDate }}>
          {date}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  margin-top: 5.4375rem;
  /* border: 1px solid green; */
  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 53px;
    height: 53px;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 24px;
    &::before {
      content: "";
      width: 4px;
      height: 86px;
      position: absolute;
      background-color: ${colors.pink};
      top: -180%;
    }
  }
  .timeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14.5rem;
    & > div {
      width: 50%;
      max-width: 30.3125rem;
      /* border: 1px solid red; */
    }
    .head-wrapper {
      .head-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${colors.pink};
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.7;
      }
    }

    .date {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${colors.pink};
    }
  }
  @media screen and (max-width: 1100px) {
    margin-top: 1.4375rem;
    align-items: end;
    gap: 1rem;
    .number {
      font-size: 12px;
      position: relative;
      left: 0;
      bottom: 0;
      width: 1.2075rem;
      height: 1.2075rem;
      translate: 0 0;
      &::before {
        content: "";
        bottom: 0;
        translate: 0 -2.8125rem;
        height: 4.375rem;
      }
    }
    .timeline {
      justify-content: start;
      align-items: start;
      gap: 0.625rem;
      & > div {
        width: auto;
      }
      .head-wrapper {
        text-align: left;
        .head-title {
          font-size: 0.75rem;
          margin-bottom: 0.3125rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
      .date {
        font-size: 0.75rem;
        text-align: left;
      }
    }
  }
`;

export default function Timelineloop() {
  const timeline = timelineData.map((item, index) => (
    <Timeline key={index} timelineData={item} />
  ));
  return (
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
  );
}

const TimelineDiv = styled.div`
  padding: 32px 64px;
  text-align: center;
  .head {
    h3 {
      font-family: clashDisplay;
      font-size: 32px;
      font-weight: bold;
    }
    p {
      max-width: 368px;
      margin: 0 auto;
      font-family: Montserrat;
      font-size: 14px;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 110px) {
    padding: 80px 46px;
  }
`;
