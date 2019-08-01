import styled from "styled-components";

const NavContainerRestrictive = styled.div`
  background-color: ${props => props.bgc || "transparent"};
  width: 80%;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 730px) {
    width: 90%;
  }
  @media (max-width: 450px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
export default NavContainerRestrictive;
