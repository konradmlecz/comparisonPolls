import styled from "styled-components";

const Cite = styled.div`
  padding: 30px 30px 30px 90px;
  position: relative;
  font-size: 1.6rem;
  font-style: italic;
  :after {
    content: "”";
    width: 90px;
    font-family: "Georgia", serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    color: #ca2017;
    position: absolute;
    top: 31px;
    left: 0px;
  }
`;
export default Cite;
