import styled from "styled-components";

const Paragraf = styled.p`
  display: ${props => props.display};
  color: ${props => props.color};
  padding: 0 20px;
  font-size: 1.6rem;
  line-height: 200%;
  font-family: var(--font-default);
  text-align: ${props => props.align || "center"};
`;
export default Paragraf;
