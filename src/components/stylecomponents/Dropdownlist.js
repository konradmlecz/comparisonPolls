import styled from "styled-components";

const Select = styled.select`
  font-family: var(--font-default);
  display: block;
  width: 150px;
  background: var(--color-white);
  color: var(--color-black);
  padding-left: 5px;
  font-size: 1.4rem;
  border: 1px solid var(--color-complementary);
  margin: 0 5px;
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  @media (max-width: 650px) {
    width: 200px;
    margin: 5px 0;
    padding: 5px;
  }
`;

export default Select;
