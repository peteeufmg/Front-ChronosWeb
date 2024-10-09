import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: .5rem 5% 0 5%;
    
    color: black;
    text-transform: uppercase;
`;
export const NavTitle = styled.div`
    font-size: 4rem;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 2rem;

    font-size: 2rem;
    :hover {
        color: rgb(237, 165, 0)
    }
    
`;