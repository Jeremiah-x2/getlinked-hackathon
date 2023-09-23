import React from "react";
import { useState, useEffect } from "react";
import colors from "../../../utils/colors";
import styled from "styled-components";
import ChangeSrc from "./ChangeSrc";
import { itemsData } from "../../../Data/itemsData";

export default function Introduction() {
  const items = itemsData.map((value, index) => (
    <IntroductionLoop key={index} data={value} />
  ));
  return <ItemsContainer>{items}</ItemsContainer>;
}

const ItemsContainer = styled.section`
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(225, 225, 225, 0.04);
    background-image: url("/images/landing-page/flare.png");
    background-repeat: repeat-y;
    background-size: contain;
  }
  @media screen and (max-width: 1100px) {
    &::before {
      content: "";
      background-size: 100%;
      background-image: url("/images/landing-page/flare-mobile.png");
      background-size: 180%;
    }
  }
`;

export function IntroductionLoop(props) {
  const {
    id,
    image,
    head: { top, bottom },
    mainContent,
  } = props.data;

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [style, setStyle] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200) {
        setIsSmallScreen(true);
        setStyle("column");
      } else {
        setIsSmallScreen(false);
        setStyle(id % 2 === 0 ? "row" : "row-reverse");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  return (
    <Container>
      <div style={{ flexDirection: style }}>
        <div className="image">
          <img src={"/images/landing-page/" + image} alt="" />
          <ChangeSrc
            mobile={"/images/landing-page/" + image + "-mobile.png"}
            desktop={"/images/landing-page/" + image + ".png"}
            class={image}
            alt={top + " " + bottom}
          />
        </div>
        <div className="description" style={{ style }}>
          <h1>
            {top} <span className="head-bottom">{bottom}</span>
          </h1>
          <div className="main-content">{mainContent}</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  & > div {
    padding: 45px 100px;
    display: flex;
    gap: 5rem;
    border-bottom: 1px solid #ffffff2e;
    align-items: center;

    & > div {
      width: 50%;
      max-width: 530px;
    }
    .image img {
      width: 100%;
    }
    .description {
      h1 {
        font-family: clashDisplay;
        font-size: 2rem;
        font-weight: bold;
      }
      .head-bottom {
        display: block;
        color: ${colors.pink};
        margin-top: 12px;
      }
      .main-content {
        margin-top: 16px;
        font-size: 14px;
        line-height: 1.9;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    text-align: center;
    & > div {
      padding: 1.5rem 2.1875rem;
      /* flex-direction: column; */
      gap: 1.5rem;
      & > div {
        width: 100%;
        max-width: 100vw;
      }
      .description {
        h1 {
          font-size: 1.25rem;
        }
        .main-content {
          font-size: 13px;
        }
      }
    }
  }
`;
