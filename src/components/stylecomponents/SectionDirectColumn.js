import styled from "styled-components";
const SectionDirectColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 815px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export default SectionDirectColumn;
