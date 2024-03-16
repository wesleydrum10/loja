import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding-bottom: 10px;
  /* height: 8vh; */
  overflow: hidden;
  div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: end;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;
