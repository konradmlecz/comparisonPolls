import styled from "styled-components";
const ContainerChart = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;
  align-items: "center";
  width: 100%;
  min-height: ${props => props.mh};
  @media (max-width: 815px) {
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

export default ContainerChart;
