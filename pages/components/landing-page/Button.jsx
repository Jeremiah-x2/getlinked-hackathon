import styled from "styled-components";
import colors from "../../../utils/colors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Button({ text }) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/register");
  };

  return <Buttons onClick={() => handleButtonClick()}>{text}</Buttons>;
}

const Buttons = styled.button`
  padding: 1rem 3.25rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: Montserrat;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  z-index: 90000000;
`;
