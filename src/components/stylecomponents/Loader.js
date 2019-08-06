import styled, { keyframes } from "styled-components";

const load = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  font-size: 8px;
  text-indent: -9999em;
  border-top: 1.1em solid var(--color-complementary);
  border-right: 1.1em solid var(--color-complementary);
  border-bottom: 1.1em solid var(--color-complementary);
  border-left: 1.1em solid #f2f2f2;
  -webkit-animation: ${load} 1.1s infinite linear;
  animation: ${load} 1.5s infinite linear;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
`;
export default Loader;
