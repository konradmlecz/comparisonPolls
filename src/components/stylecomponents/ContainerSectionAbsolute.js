import styled from "styled-components";
const ContainerSectionAbsolute = styled.div`
  position: absolute;
  left: 0;
  top: 100vh;
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default ContainerSectionAbsolute;
