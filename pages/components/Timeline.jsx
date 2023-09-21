import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";

export default function Timeline(props) {
  const { title, task, num, date, id } = props.timelineData;
  const Container = styled.section`
    margin-top: 2rem;
    & > div {
      display: flex;
      justify-content: space-between;
      flex-direction: ${id % 2 === 0 ? "row" : "row-reverse"};
    }
    .number {
      background: linear-gradient(270deg, #903aff 0%, #fe34b9 100%);
      padding: 20px;
      border-radius: 50px;
    }
  `;
  return (
    <Container>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{task}</p>
        </div>
        <div className="number">{num}</div>
        <div>{date}</div>
      </div>
    </Container>
  );
}
