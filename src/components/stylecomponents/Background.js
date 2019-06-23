import styled from "styled-components";
import img from "./../../images/ballot-box-32384.svg";
const Background = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 15%;
  width: 100%;
  height: 80vh;
  margin: 2px;
`;
export default Background;
