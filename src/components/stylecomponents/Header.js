import styled, { keyframes } from "styled-components";

const anim = keyframes`
  0%{
    transform: translate(-80%, -200%) scale(3.3);
    opacity:0;

  }
  90%{
    transform: translate(-80%, -200%) scale(3.3);
    opacity:1;

}
100%{
  transform: translate(0%, 0%) scale(1.1);
    opacity:1;
}
`;

const Header = styled.h1`
  text-align: center;
  mix-blend-mode: multiply;
  animation: ${anim} 3s ease-in;
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  font-size: 38px;
  font-weight: 600;
  position: fixed;
  left: 60%;
  top: 70%;
  margin: 2px;
  color: #d90404;
`;
export default Header;
