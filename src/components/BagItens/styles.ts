import styled from "styled-components";

export const BagContent = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 4px;
  border: .5px solid #f1f1f1;
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .8rem;
    width: 100%;
    gap: 5px;
  }

  p:nth-child(1) {
    word-wrap: break-word;
    width: 100%;
    text-align: left;
    margin-right: 5px;
  }
  
  p:nth-child(2) {
    word-wrap: break-word;
    text-align: left;
  }

  p:nth-child(3) {
    width: 100%;
    text-align: left;
    word-wrap: break-word;
    font-weight: 600;
  }

  span {
    cursor: pointer;
    text-align: center;
    width: 20%;
    font-weight: 400;
    margin-right: 10px;
  }
`
export const ImageBag = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 10px;
`