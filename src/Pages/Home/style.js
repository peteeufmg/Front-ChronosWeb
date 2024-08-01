import {styled} from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20%;
    width: 100vw;
    height: 100vh;
`;

export const DivTitle = styled.div`
    display: flex;
`;
export const DivLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const Title = styled.h1`
    display: flex;
    color: #FFFFFF;
    font-family: "Jura", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    font-size: 8rem;   
    
    @media (max-width: 900px) {
        font-size: 4.8rem;  
    }
    @media (max-width: 550px) {
        font-size: 3rem; 
    }
    @media(max-width: 380px){
        font-size: 1.5rem;
    }
`;

export const Link = styled.a`
    display: flex;
    color: #FFFFFF;
    font-family: "Jura", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    font-size: 3rem;
    @media (max-width: 900px) {
        font-size: 2.5rem;  
    }
    @media (max-width: 550px) {
        font-size: 2rem; 
    }
    @media(max-width: 380px){
        font-size: 1.0rem;
    }
`;


