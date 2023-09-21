import styled from "styled-components";
import judgingCriteria from "./judgingCriteria";
import colors from "../../utils/colors";

export default function Criteria() {
  return (
    <Container>
      {judgingCriteria.map((item, index) => {
        return (
          <div>
            <p>
              <span>{item.name}</span>: {item.description}
            </p>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  font-size: 14px;
  line-height: 1.95;
  display: flex;
  flex-direction: column;
  gap: 30px;
  div p {
    span {
      color: ${colors.pink};
      font-weight: 800;
    }
  }
`;
