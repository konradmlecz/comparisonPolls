import styled from "styled-components";

const Img = styled.img`
  src: url(${props => props.src});
  width: ${props => props.width};
  @media (max-width: 730px) {
    width: 70%;
  }
`;
export default Img;
