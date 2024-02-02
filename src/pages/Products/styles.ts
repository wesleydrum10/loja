import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 50px 2vw 10px;
  gap: 20px;
  min-height: 70vh;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px;
  }
`
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  gap: 30px;

  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`
export const FilterContainer = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    color: #086d72;
    font-weight: 600;
  }

  input {
    outline: none;
    border: 0;
    width: auto;
    border-bottom: 2px solid #f1f1f1;
    color: #086d72;
    font-weight: 600;
  }

  .input-filter {
    width: 100%;
  }

  h3:nth-child(even) {
    margin-top: 60px;
  }

  @media screen and (max-width: 1250px) {
    width: 30%;
  }

  @media screen and (max-width: 950px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

`
export const ContentLabel = styled.div`
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`
export const BtnFilter = styled.button`
  width: 100%;
  height: 50px;
  background-color: #101010;
  color: #ffffff;
  &:disabled {
    opacity: .2;
    cursor: not-allowed;
  }
`

export const EmptyReturn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const BoxSortContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 14px;
    display: flex;
    gap: 10px;
  }
`