import styled from "styled-components";
import judgingCriteria from "./judgingCriteria";
import colors from "../../../utils/colors";

export default function Criteria() {
  return (
    <Container>
      {judgingCriteria.map((item, index) => {
        return (
          <div>
            <p>
              <span>{item.name}:</span> {item.description}
            </p>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  font-size: 14px;
  font-family: Montserrat;
  line-height: 1.95;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  div p {
    span {
      color: #ff26b9;
      font-weight: 800;
      font-size: 16px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1100px) {
    gap: 1.25rem;
    p {
      font-size: 12px;
      span {
        font-size: 13px;
      }
    }
  }
`;
