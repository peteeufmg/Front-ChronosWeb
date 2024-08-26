import styled from "styled-components";
import { Select } from "antd";

export const DivContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: 38 , 39, 41, 0.3; 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
`;
export const DivRetangulo = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 65vh;
    width:75vw;
    background-color:#E4E4E4;
`;
export const DivEquipe = styled.div`
    display: flex;
    Justify-content: space-between;
    width: 100%;
    height:10%;
    margin-top: 1.2rem;
    margin-bottom: 0.1rem; 
    padding-left: 1rem;
    padding-right: 1rem;  
  
    font-size:1rem;
    color: #000000;
`;
export const DivInfo = styled.div`
    display: flex;
    gap: 0.4rem;
    width: 100%;
    margin: 0.4rem;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: #000000; 

     @media (max-width: 1230px) {
    margin-bottom: 0rem;
    }
`;
export const DivSelections = styled.div`
    display: flex;
    align-items: center;
    text-align: center;  
    Gap: 0.4rem;
    width: 100%;
    height:12%;
    padding-left: 1rem;
    padding-right: 1rem;  
    color: #000000;    
    font-size: 0.9rem;
`;
export const Selection = styled(Select)`
    width: 150px;
`;
export const Button = styled.button`
    background-color: #E4E4E4;

`;
export const DivClassificacoes = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-around;
    width: 100%;
    height:50%;

    
    margin-top:1rem;

    color:#000000;

    @media(max-width:800px){
    flex-direction: column;
    }
`;
export const DivDireta = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivTentativas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    color:#000000;
    font-size: 1rem;

    @media (max-width: 1230px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    font-size: 0.8rem;
    }
`;

export const DivRow4 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height:80%;

    //padding-left:10px;
    //padding-right:13px;


    @media (max-width: 650px) {
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    }
`;

export const DivRow6 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DivRow5 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    margin-left: 0.7rem;

    @media (max-width: 650px) {
    width: 100%;
    }
`;

export const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4%;
    font-size: 1rem;
    color: #000000;
    margin-top: 0.5rem;
    margin-right: 1rem;

    @media (max-width: 650px) {
    justify-content: space-around;
    }
`;

export const Li = styled.li`
    display: flex;
    width: 100%;
    text-decoration: none;
    list-style-type: none;
    font-size: 1.2rem;
    color: #000000;
    margin-bottom: 0.4rem;

    @media (max-width: 1230px) {
    margin-bottom: 0.3 rem;
    }
     @media (max-width: 1150px) {
    margin-bottom: 0.2 rem;
    font-size: 0.9rem;
    }
`;
export const DivButton = styled.div`
   Display: flex;           
   justify-content: center;
   font-size: 0.9rem;
   margin-top: 0.2rem;
   margin-bottom: 0.6rem;


`;
