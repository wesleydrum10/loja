import styled from "styled-components";

export const BagContent = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-around;
  margin: 10px 0px;
  max-height: 100px;
  overflow: auto;
  
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    font-weight: 700;
    gap: 10px;
    width: 60%;

  }
`
export const ImageBag = styled.img`
  width: 64px;
  height: 64px;
`