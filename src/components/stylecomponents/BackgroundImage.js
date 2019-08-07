import styled from "styled-components";
import img from "./../../images/poland-polish-5611.jpg";
const BackgroundImage = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  filter: sepia(30%);
  z-index: -3;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100vh;
`;
export default BackgroundImage;
