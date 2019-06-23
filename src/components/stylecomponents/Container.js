import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${props => props.paddingtop};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Container;
