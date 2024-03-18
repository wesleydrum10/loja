import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  background-color: #101010;
  @media screen and (max-width: 600px) {
    height: 100%;
    gap: 5px;
  }
`
export const ImageContainer = styled.img`
  width: 10vw;
  height: 100%;
  @media screen and (max-width: 600px) {
    width: 20vw;
  }
`

export const InputContainer = styled.input`
  display: flex;
  outline: none;
  width: 40%;
  height: 40px;
  border: 0;
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    display: none;
    width: 0%;
  }
`
export const BagContainer = styled.div`
  width: 7%;
  cursor: pointer;
  @media screen and(max-width: 600px) {
    width: 100%;
  }
`
export const CountBag = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 25px;
  color: #ffffff;
  position: absolute;
  margin-top: 20px;
  span {
    font-size: .8rem;
  }
  @media screen and(max-width: 600px) {
    margin-left: 16px;
    margin-top: 15px;
  }
`
export const ContentCart = styled.div`
  position: absolute;
  width: 400px;
  max-height: 400px;
  background-color: #ffffff;
  right: 12vw;
  margin-top: 10vh;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 1px 1px 5px #000000;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100000;

  &::-webkit-scrollbar-track {
    border-radius:4px;
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
  
  @media screen and (max-width: 600px) {
    width: auto;
    max-height: 400px;
    background-color: #ffffff;
    right: 1vw;
    top: 0;
    margin: 20px 10px;
  }

  @media screen and (max-width: 1300px) {
    top: 6vh;
  }
`
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
`
export const ImageBag = styled.img`
  width: 44px;
  height: 44px;
  @media screen and (max-width: 600px) {
    width: 34px;
    height: 34px;
  }
`