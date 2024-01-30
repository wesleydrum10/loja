import styled from 'styled-components'

export const CardContainer = styled.div`
  transition: 1s;
  border-radius: 4px;
  border: .5px solid #f1f1f1;
  box-shadow: 1px 1px 5px 1px #f1f1f1;
`

export const CardContent = styled.div`
  background-color: transparent;
  padding: 20px;
  width: 100%;
  border: 1px solid transparent;
  box-sizing: border-box;
  text-align: center;
`
export const ImageCard = styled.img`
  width: 100%;
  min-height: 200px;
`
export const ButtonAddBag = styled.button`
  border: 2px solid #101010;
  height: 50px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  span {
    font-size: 1.5rem;
  }
`

