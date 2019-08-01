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
  font-size: 4rem;
  width: 100%;

  @media (max-width: 730px) {
    font-size: 3rem;
  }
  @media (max-width: 530px) {
    font-size: 1.8rem;
  }
`;
export default Header;
