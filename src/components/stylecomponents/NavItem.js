import styled from "styled-components";
const NavItem = styled.p`
  font-family: var(--font-default);
  background-color: ${props => props.backgroudcolor || "none"};
  color: var(--color-white);
  display: block;
  margin: 10px 20px;
  padding: 0 5px;
  border: ${props => props.border || "none"};
  font-size: 1.6rem;
  line-height: 200%;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 450px) {
    font-size: 1.4rem;
    margin: 5px 5px;
  }
`;

export default NavItem;
