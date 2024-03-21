import styled from "styled-components";

export const CardContainer = styled.div`
  transition: 1s;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  height: 430px;
  width: 100%;
  margin: 0px 10px;

  p:nth-child(2) {
    font-size: 1rem;
    font-weight: 500;
  }
  p:nth-child(3) {
    font-size: 1.2rem;
    font-weight: 700;
  }
  p:nth-child(4) {
    font-size: 0.8rem;
    margin-top: 10px;
  }
  button {
    display: none;
  }
  &:hover {
    border: 1px solid #086d72;
    transition: 1s;
    min-height: 430px;
    .description {
      display: none;
    }
    button {
      transition: 10s;
      border: 1px solid #086d72;
      height: 50px;
      width: 100%;
      background-color: #086d72;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      color: #ffffff;
      span {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 600px) {
    height: 500px;
    width: auto;
    margin: 10px;
    padding: 20px;
  }
  @media (min-width: 1650px) {
    height: 550px;
  }
`;

export const CardContent = styled.div`
  background-color: transparent;
  padding: 20px;
  width: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  p:nth-child(2) {
    font-weight: 700;
  }
  p:nth-child(1) {
    color: #07bc0c;
  }
  p:nth-child(5) {
    font-size: 0.8rem;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  strong {
    color: #ffffff;
    font-weight: 900;
    background-color: #ffa500;
    border-radius: 4px;
    padding: 0 2px;
  }
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
export const ImageCard = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ButtonAddBag = styled.button`
  border: 1px solid #086d72;
  height: 50px;
  width: 100%;
  background-color: #086d72;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  color: #ffffff;

  span {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const CardContainerSkeleton = styled.div`
  transition: 1s;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  height: 430px;
  width: 100%;
  margin: 0px 10px;
  background-color: rgba(222,222,222,.5);

`;
