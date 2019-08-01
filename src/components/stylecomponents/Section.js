import styled from "styled-components";
const Section = styled.div`
  background-color: ${props => props.bgc};
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: "center";
  width: 100%;
  @media (max-width: 815px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export default Section;
