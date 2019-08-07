import styled from "styled-components";
const ContainerSectionAbsolute = styled.div`
  position: absolute;
  left: 0;
  top: calc(100vh - 100.8px);
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 730px) {
    top: calc(100vh - 84.8px);
  }
  @media (max-width: 530px) {
    top: calc(100vh - 67.2px);
  }
`;

export default ContainerSectionAbsolute;
