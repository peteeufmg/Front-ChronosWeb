import styled from "styled-components";

export const DivC = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    @media (max-width: 650px) {
    width: 100%;
    }
`;

export const DivRow1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
    @media (max-width: 650px) {
    width: 100%;
    }
`;
export const DivRow2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
   
    @media (max-width: 650px) {
    width: 100%;
    }
`;
export const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4%;

    @media (max-width: 650px) {
    justify-content: space-around;
    }
`;
export const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
    font-size: 2.1rem;
`;
export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 2%;
    width: 50%;
`;
