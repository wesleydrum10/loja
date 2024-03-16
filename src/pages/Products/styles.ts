import styled from "styled-components";

export const ShowFilter = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-left: 10px;
  height: 5vh;
  width: 100%;
  font-weight: 700;
  span {
    cursor: pointer;
  }
  div {
    display: flex;
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
    gap: 20px;
    margin-left: 0;
    width: auto;
  }
`;
export const Mark = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: blue;
  margin-left: 5px;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 10px 2vw 10px;
  height: 65vh;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    height: 83vh;
    overflow-x: hidden;
  }
`;
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90%;
  gap: 30px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }
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
    width: auto;
    padding: 0 10px;
    gap: 0px;
  }
`;
export const FilterContainer = styled.div`
  width: 20%;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 20px;
  z-index: 9999;
  top: 0;
  background-color: #ffffff;
  left: 0;
  margin-left: 20px;
  margin-top: 26vh;

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
    width: 95%;
    margin: 10px;
    top: 0;
    margin-top: 18vh;
  }
`;
export const ContentLabel = styled.div`
  box-shadow: 1px 1px 5px 1px #f1f1f1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const BtnFilter = styled.button`
  width: 100%;
  height: 50px;
  background-color: #101010;
  color: #ffffff;
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const EmptyReturn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BoxSortContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 14px;
    display: flex;
    gap: 10px;
  }
`;
export const ClearFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px 0px 10px;
`;
export const ClearAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: 14px;
  }
`;
