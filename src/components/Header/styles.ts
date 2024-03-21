import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  background-color: #101010;
  @media (max-width: 600px) {
    gap: 25px;
  }
`;
export const ImageContainer = styled.img<{ $origin?: boolean }>`
  width: ${(props) => (props.$origin && "8vw")};
  height: 100%;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 25vw;
  }
`;

export const InputContainer = styled.input`
  display: flex;
  outline: none;
  width: 100%;
  height: 40px;
  border: 0;
  padding: 0 10px;
  @media (max-width: 600px) {
    width: 45vw;
  }
`;

export const BagContainer = styled.div`
  width: 33%;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 23%;
  }
`;

export const CountBag = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 28px;
  color: #ffffff;
  position: absolute;
  margin-top: 20px;
  span {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    margin-left: 16px;
    margin-top: 15px;
  }
`;
export const ContentCart = styled.div`
  position: absolute;
  width: 30%;
  max-height: 400px;
  background-color: #ffffff;
  right: 21vw;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 1px 1px 5px #000000;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  top: 10vh;

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #086d72;
  }

  p {
    text-align: center;
    font-weight: 600;
  }

  a {
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 98%;
    max-height: 400px;
    background-color: #ffffff;
    right: inherit;
  }
`;
export const BtnCheckout = styled.button`
  width: 100%;
  position: relative;
  bottom: 0;
  height: 50px;
  outline: none;
  background-color: #086d72;
  color: #ffffff;
  cursor: pointer;
  border: 0;
`;
export const ImageBag = styled.img`
  width: 48px;
  height: 40px;
  @media (max-width: 600px) {
    width: 34px;
    height: 34px;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
