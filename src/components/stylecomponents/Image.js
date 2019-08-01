import styled from "styled-components";

const Img = styled.img`
  src: url(${props => props.src});
  width: ${props => props.width};
`;
export default Img;
