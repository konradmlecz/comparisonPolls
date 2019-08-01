import styled from "styled-components";

const NavContainerRestrictive = styled.div`
  background-color: ${props => props.bgc || "transparent"};
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;
export default NavContainerRestrictive;
