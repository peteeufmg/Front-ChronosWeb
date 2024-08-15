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

    gap: 5%;

    padding: .5rem 10% 0 10%;
`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 2.5%;
`;
export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;

    gap: 1%;
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



