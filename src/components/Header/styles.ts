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
    gap: 10px;
  }
`
export const ImageContainer = styled.img`
  width: 10vw;
  height: 100%;
`

export const InputContainer = styled.input`
  outline: none;
  width: 40%;
  height: 40px;
  border: 0;
  padding: 0 10px;
`
export const BagContainer = styled.div`
  width: 7%;
  cursor: pointer;
`
export const CountBag = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-weight: 700;
  margin-left: 25px;
`
export const ContentCart = styled.span`
  position: absolute;
  width: 250px;
  height: auto;
  background-color: #ffffff;
  right: 12vw;
  top: 100px;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 1px 1px 5px #000000;
`
