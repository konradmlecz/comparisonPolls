import styled from "styled-components";

const ListItem = styled.li`
  font-family: var(--font-default);
  color: ${props => props.color};
  font-size: 1.6rem;
  list-style-type: none;
  line-height: 200%;
  text-align: justify;
  @media (max-width: 430px) {
    font-size: 1.4rem;
  }
`;
export default ListItem;
