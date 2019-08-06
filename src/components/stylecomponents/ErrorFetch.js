import styled from "styled-components";
const ErrorFetch = styled.p`
  padding: 0 20px;
  font-size: 1.6rem;
  line-height: 200%;
  color: black;
  font-family: var(--font-default);
  text-align: ${props => props.align || "center"};
  @media (max-width: 430px) {
    font-size: 1.4rem;
  }
`;

export default ErrorFetch;
