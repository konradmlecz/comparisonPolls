import styled from "styled-components";

const ListItem = styled.li`
  display: block;
  font-family: var(--font-default);
  color: ${props => props.color};
  font-size: 1.6rem;
  line-height: 200%;
  text-align: center;
`;
export default ListItem;
