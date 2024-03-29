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
  @media (max-width: 600px) {
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
  background-color: #086d72;
  margin-left: 5px;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 10px 2vw 10px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    height: 83vh;
    overflow-x: hidden;
  }
`;
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 85%;
  gap: 30px;
  height: 73vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 20px;
  @media (max-width: 1550px) {
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
    width: 60%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: auto;
    padding: 0 10px;
    gap: 0px;
  }
`;
export const FilterContainer = styled.div`
  width: 25%;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 20px;
  z-index: 9999;
  top: 0;
  background-color: rgba(333,333,333,.8);
  left: 0;
  height: 100vh;
  div:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  label {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    color: #000000;
    font-weight: 600;
    padding-right: 10px;
  }

  input {
    outline: none;
    border: 0;
    width: 15%;
    background-color: transparent;
    height: 20px;
    border-bottom: 1px solid #086d72;
    color: #086d72;
    font-weight: 600;
    touch-action: none;
  }

  input:focus-visible {
    width: 100%;
  }

  .input-filter {
    width: 100%;
  }

  h3:nth-child(even) {
    margin-top: 60px;
  }

  @media (max-width: 1250px) {
    width: 30%;
  }

  @media (max-width: 950px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 85%;
    background-color: #f1f1f1f1;
    input {
      font-size: 16px;
    }
  }
`;
export const ContentLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0px 0px 20px;
`;
export const BtnFilter = styled.button`
  width: 90%;
  height: 50px;
  background-color: #086d72;
  color: #ffffff;
  border: 0;
  margin: 0 auto;
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
  justify-content: center;
  gap: 10px;
  span {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    gap: 10px;
    width: 60%;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    span {
      width: 42%;
    }
  }
`;
export const ClearFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 10%;
  padding: 0 20px;
  color: #ffffff;
  background-color: #000000;
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
export const Close = styled.div`
  position: absolute;
  top: 3vh;
  left: 93%;
  color: #ffffff;
`;
