import styled from 'styled-components'

export const CardContainer = styled.div`
  transition: 1s;
  border-radius: 4px;
  border: .5px solid #f1f1f1;
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  height: 400px;

  p:nth-child(2) {
    font-size: 1rem;
    font-weight: 500;
  }
  p:nth-child(3) {
    font-size: 1.2rem;
    font-weight: 700;
  }
  p:nth-child(4) {
    font-size: .8rem;
    margin-top: 10px;
  }
  button {
    display: none;
  }
  &:hover {
    border: 1px solid #086d72;
    transition: 1s;
    height: 400px;
    p:nth-child(4) {
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
  @media screen and (max-width: 600px) {
    height: auto;
    width: 100%;
  }
  @media screen and (min-width: 1650px) {
    min-height: 450px;
  }
`

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
`
export const ImageCard = styled.img`
  width: 100%;
  min-height: 200px;
`
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
`

