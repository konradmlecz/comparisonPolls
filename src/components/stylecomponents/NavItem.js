import styled from "styled-components";
const NavItem = styled.p`
  font-family: var(--font-default);
  background-color: ${props => props.backgroudcolor || "none"};
  color: ${props => props.color || "black"};
  display: inline-block;
  margin: 1% 2%;
  padding: 0 5px;
  border: ${props => props.border || "none"};
  font-size: 1.6rem;
  line-height: 200%;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    /* color: #262626; */
  }
`;

export default NavItem;
