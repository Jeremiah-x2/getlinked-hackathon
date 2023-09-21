import React from "react";
import colors from "../../../utils/colors";
import styled from "styled-components";

export default function Introduction(props) {
  const {
    id,
    image,
    head: { top, bottom },
    mainContent,
  } = props.data;

  const Container = styled.section`
    border: 2px solid blue;
    padding: 45px 100px;
    display: flex;
    gap: 5rem;
    flex-direction: ${id % 2 === 0 ? "row" : "row-reverse "};
    border-bottom: 1px solid;
    align-items: center;
    & > div {
      width: 50%;
      /* border: 2px solid red; */
    }
    .image img {
      width: 100%;
    }
    .description {
      h1 {
        font-size: 32px;
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
  `;
  return (
    <Container>
      <div className="image">
        <img src={"/images/landing-page/" + image} alt="" />
      </div>
      <div className="description">
        <h1>
          {top} <span className="head-bottom">{bottom}</span>
        </h1>
        <div className="main-content">{mainContent}</div>
      </div>
    </Container>
  );
}
