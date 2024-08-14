import {styled} from 'styled-components';
import { Button, List } from 'antd';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;


    align-items: center;

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

    gap: 2.5%;
`;

export const ShuffleContainer = styled.div`
    display: flex;
    justify-content: center;

    margin: 2.5%;
`;

export const Text = styled.div`
    margin: 0;
    font-size: 2rem;
`;

export const StyledList = styled(List)`
    display: flex;
    flex-direction: column;
    margin: 1.5% 0 0 0;
    color:white; 
    font-size: 1.5rem;
`;

export const Description = styled(List.Item.Meta)`
    display: flex;
    flex-direction: row;
    padding: 0.7% 1.5% 0.7% 1.5%;
    margin: 0;
`;

export const Info = styled.h2`
    font-family: 'Jura', sans-serif;
    color:white; 
    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
`;



