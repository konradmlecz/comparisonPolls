import styled from "styled-components";
const ContainerHeader = styled.div`
  position: absolute;
  left: 0;
  padding: 20px 0;
  bottom: 0;
  z-index: 2;
  background-color: ${props => props.bgc};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  box-shadow: 4px 5px 5px #424242;
`;

export default ContainerHeader;
