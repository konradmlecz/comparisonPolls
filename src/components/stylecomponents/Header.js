import styled, { keyframes } from "styled-components";
const anim = keyframes`
  0%{
    transform: translateX(-120%);
  }
}
100%{
  transform: translateX(0);
  
}
`;
const Header = styled.h1`
  display: block;
  margin: 0 auto;
  color: var(--color-white);
  animation: ${anim} 1s ease-out;
  font-family: var(--font-default);
  font-size: ${props => props.fs};
  width: 100%;
`;
export default Header;
