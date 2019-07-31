import styled, { keyframes } from "styled-components";
const anim = keyframes`
  0%{
    transform: translate(0, 0);
      text-shadow: none;
  }


50%{
    text-shadow: 8px 8px 3px #b52a2a;
    transform: translate(-5%, -5%);
}

100%{
    transform:translate(0, 0);
    text-shadow:none;

  
}


`;
const BannerArrow = styled.p`
  display: block;
  animation: ${anim} 2s linear infinite;
  font-family: var(--font-default);
  font-size: 6rem;
`;
export default BannerArrow;
