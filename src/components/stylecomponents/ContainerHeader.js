import styled from "styled-components";
const ContainerHeader = styled.div`
  padding: 20px 0;
  background-color: ${props => props.bgc};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default ContainerHeader;
