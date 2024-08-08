import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    flex-direction: row;

    align-items: center;
    padding: 3px 10px;
    gap: 10px;
    border-radius: 5px;

    background-color: white;

    &:active {
        background-color: grey;
    }
`;

export const ButtonText = styled.div`
    font-size: 1.6rem;
    
    color: #343537;
    text-transform: uppercase;
    font-weight: 600;
`;