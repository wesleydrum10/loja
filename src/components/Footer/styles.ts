import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding-bottom: 10px;
  overflow: hidden;
  div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
  @media screen and (max-width: 600px) {
    height: auto;
  }
  a {
    text-decoration: none;
    outline: none;
    color: #000000;
    margin-top: 3px;
  }
`;
