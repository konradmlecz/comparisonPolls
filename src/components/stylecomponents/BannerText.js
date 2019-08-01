import styled from "styled-components";

const BannerText = styled.p`
  padding: 0 20px;
  font-size: 2.5rem;
  line-height: 200%;
  font-family: var(--font-default);
  text-align: "center";
  @media (max-width: 730px) {
    font-size: 1.8rem;
  }
  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
`;
export default BannerText;
