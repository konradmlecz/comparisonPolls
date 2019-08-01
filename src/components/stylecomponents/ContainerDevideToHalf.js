import styled from "styled-components";
const ContainerDevideToHalf = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  width: 50%;
  @media (max-width: 730px) {
    flex-direction: row;
    width: 100%;
  }
`;

export default ContainerDevideToHalf;
