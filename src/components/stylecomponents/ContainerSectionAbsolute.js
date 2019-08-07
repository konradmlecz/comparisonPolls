import styled from "styled-components";
const ContainerSectionAbsolute = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
`;

export default ContainerSectionAbsolute;
