import styled from "styled-components";

const Paragraf = styled.p`
  display: ${props => props.display};
  text-indent: 30px;
  color: ${props => props.color};
  padding: 0 20px;
  font-size: 1.6rem;
  line-height: 200%;
  font-family: var(--font-default);
  text-align: ${props => props.align || "center"};
  @media (max-width: 430px) {
    font-size: 1.4rem;
  }
`;
export default Paragraf;
