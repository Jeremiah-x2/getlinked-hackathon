import styled from "styled-components";
import colors from "../../../utils/colors";

export default function Button({ text }) {
  console.log(text);
  return <Buttons>{text}</Buttons>;
}

const Buttons = styled.button`
  padding: 1rem 3.25rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
`;
