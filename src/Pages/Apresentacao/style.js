import {styled} from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    text-transform: uppercase;
    align-items: center;
    color: white;
    width: 100vw;
    height: 100vh;
`;
export const DivEquipe = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    color: white;
    width: 100vw;
    height: 100vh;
`;

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    height: 25%;
    width: 100%;
    gap:2%;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;

export const NomeEquipe = styled.div`
    display: flex;
    font-size: 3.5rem;
`;

export const DivTentativa = styled.div`
    display: flex;
    font-size: 2.5rem;
`;

export const DivCheckpoints = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 60%;
    width: 100%;

    gap: 1%;
    
    font-size: 2.2rem;
`;

export const DivClassificacao = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    color: white;
    width: 0vw;
    height: 100vh;
`;

export const DivTitle = styled.div`
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    
    font-size: 3rem;

    width: 100%;
    height: 15%;
`;