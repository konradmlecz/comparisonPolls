import styled from "styled-components";

const ContainerRestrictive = styled.div`
  display: flex;
  justify-content: center;
  align-items: "center";
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default ContainerRestrictive;
