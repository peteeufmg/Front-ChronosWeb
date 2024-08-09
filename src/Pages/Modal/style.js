import styled from "styled-components";


export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: 38 , 39, 41, 0.3; 
    width: 100vw;
    height: 100vh;
`;
export const DivRetangulo = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width:75vw;
    background-color:#E4E4E4;
`;
export const DivEquipe = styled.div`
    display: flex;
    Justify-content: space-between;
    width: 100%;
    height:16%;
    margin-top: 10px;
    padding-left:13px;
    padding-right:13px;    
    font-size: 0.7rem;
    color: #000000;
`;

export const DivInfo = styled.div`
    display: flex;
    gap: 0.4rem;
    width: 100%;
    height:12%;
    margin-top: 15px;
    padding-left:13px;
    padding-right:13px;   
    font-size: 0.8rem;
    color: #000000; 
`;
export const DivSelections = styled.div`
    display: flex;
    align-items: center;   
    Gap: 0.4rem;
    width: 100%;
    height:12%;
    padding-left:13px;
    padding-right:13px;
    color: #000000;    
    font-size: 0.8rem;
`;
export const Button = styled.button`

    background-color: #E4E4E4;

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
    font-size: 1.3rem;
    color: #000000;
`;