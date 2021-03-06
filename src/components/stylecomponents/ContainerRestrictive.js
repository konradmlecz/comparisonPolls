import styled from "styled-components";

const ContainerRestrictive = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  @media (max-width: 730px) {
    flex-direction: column;
    width: 90%;
  }
`;
export default ContainerRestrictive;
