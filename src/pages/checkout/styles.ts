import { styled } from 'styled-components';

export const ChekoutContainer = styled.main`
    padding: 5vh 20vw 10vh;
    overflow-y: scroll;
    height: 80vh;
    h2 {
        text-align: center;
    }
    @media (max-width: 600px) {
        padding: 5vw;
        min-height: 85vh;
    }
`
export const FinalizePurchaseContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 600px) {
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
    background-color: #07bc0c;
    color: #ffffff;
    font-weight: 700;
    &:hover {
        transition: .7s;
        opacity: .6;
        color: #000000
    }
    @media (max-width: 600px) {
        width: 100%;
    }
    
`
export const Return = styled.a`
    display: flex;
    outline: none;
    margin: 50px 0px 0px 50px;
`
