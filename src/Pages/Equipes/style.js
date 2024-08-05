import {styled} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    color: white;
    text-transform: uppercase;
    gap: 5% ;
`;
export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem 10% 0 10%;
`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    font-size: 1rem;
`;
export const List = styled.div`
    display: flex;
    flex-direction: column;

    margin: 3% 0 0 0;

    font-size: 1.5rem;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: horizontal;

    padding: 0 1.5% 0 1.5%;

`;

export const Team = styled.span`

`;

export const School = styled.span`
    
`;

export const Text = styled.div`
    margin: 0;
    font-size: 2rem;
`;


export const Actions = styled.div`
    display: flex;
    gap: 3vw;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: horizontal;

    justify-content: space-between;

    margin-bottom: 1.5%;
    border-bottom: 1px solid #eda500;
`;


