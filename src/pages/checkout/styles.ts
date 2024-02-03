import { styled } from 'styled-components';

export const ChekoutContainer = styled.main`
    min-height: 75vh;
    padding: 5vh 20vw 10vh;
    h2 {
        text-align: center;
    }
    @media screen and (max-width: 600px) {
        padding: 5vw;
        height: 100vh;
    }
`
export const FinalizePurchaseContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        margin-top: 30px;
        gap: 20px;
    }
`

export const BtnFinished = styled.button` 
    width: 300px;
    height: 50px;
    border: 0;
    background-color: #006400;
    color: #ffffff;
    &:hover {
        transition: 2s;
        opacity: .6
    }
    
`