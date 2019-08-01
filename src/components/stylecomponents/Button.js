import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-complementary);
  font-family: var(--font-default);
  margin: 0 5px;
  color: var(--color-white);
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 2px 0px var(--color-medium);
  }
  :disabled {
    background-color: var(--color-gray);
  }
  :disabled:hover {
    box-shadow: none;
  }
`;
export default Button;
