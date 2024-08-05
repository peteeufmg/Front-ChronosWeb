import {styled} from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-transform: uppercase;
    align-items: center;
    color: white;
    width: 100vw;
    height: 100vh;
`;

export const DivHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32%;
    width: 90%;
    height: 15%;
`;
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const DivRow1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const DivRow2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 650px) {
    width: 25%;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    }
`;
export const DivRow3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 4%;

    @media (max-width: 650px) {
        justify-content: space-between;    
        width: 100%;
    }

   
`;
export const DivRow4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 75%;

    @media (max-width: 650px) {
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    }
`;
export const DivRow5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    height: 100%;

    @media (max-width: 650px) {
    width: 100%;

    }
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 2%;
    width: 50%;
`;
export const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 2px solid #EDA500;
    width: 80%;
    gap: 10%;
`;
export const Dashboard = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 70%;
    gap: 1%;
`;
export const Display = styled.div`
    display: flex;
    flex-direction: column;
    height: 25%;
    gap: 10%;
    
`;
export const Checkpoint = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 75%;
`;
export const Classification = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    
    @media (max-width: 650px) {
    width: 50%;

    }
`;
export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 32%;
`;
export const DivRow6 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    gap: 2rem;
    align-items: center;

    @media (max-width: 650px) {
    }
`;
export const Title = styled.h1`
   font-size: 4rem;

`;
export const Link = styled.a`
`;
export const Link1 = styled.a`
    font-size: 1.8rem;
`;
export const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4%;
    font-size: 1.8rem;

    @media (max-width: 650px) {
    justify-content: space-around;
    }
`;
export const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
    font-size: 2.3rem;
`;
export const Tentativa = styled.p`
    display: flex;
    font-size: 1.4rem;
    color: #EDA500;
    font-weight: 700;
`;