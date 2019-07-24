import styled, { keyframes } from "styled-components";

const load = keyframes`
 0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Loader = styled.div`
  left: 50%;
  top: 50%;
  font-size: 8px;
  position: absolute;
  text-indent: -9999em;
  border-top: 1.1em solid white;
  border-right: 1.1em solid white;
  border-bottom: 1.1em solid white;
  border-left: 1.1em solid #f2f2f2;
  transform: translate(-50%, -50%);
  -webkit-animation: ${load} 1.1s infinite linear;
  animation: ${load} 1.5s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;
`;
export default Loader;
