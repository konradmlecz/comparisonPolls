import styled from "styled-components";

const Select = styled.select`
  display: block;
  width: 150px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid #d90404;
  margin: 0 5px;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Select;
