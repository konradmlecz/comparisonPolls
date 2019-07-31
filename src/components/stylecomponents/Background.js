import styled from "styled-components";
import img from "./../../images/protest.jpg";
const Background = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  z-index: -3;
  opacity: 0.6;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100vh;
`;
export default Background;
