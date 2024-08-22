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
    
    @media (max-width: 500px) {
    flex-direction: column;
    }

`;
export const DivEquipe = styled.div`
    display: flex;
    Justify-content: space-between;
    width: 100%;
    height:16%;
    margin-top: 1.2rem;
    margin-bottom: 0.1rem; 
    padding-left:13px;
    padding-right:13px;  
  
    font-size: 0.8rem;
    color: #000000;
`;
export const DivInfo = styled.div`
    display: flex;
    gap: 0.4rem;
    width: 100%;
    height:12%;
    padding-left:13px;
    padding-right:13px;   
    font-size: 0.9rem;
    color: #000000; 

     @media (max-width: 1230px) {
    margin-bottom: 0rem;
    }
      @media (max-width: 900px) {
    font-size:0.6rem
    }
    @media (max-width: 500px) {
    flex-direction: column;
    }
`;
export const DivSelections = styled.div`
    display: flex;
    align-items: center;
    text-align: center;  
    Gap: 0.4rem;
    width: 100%;
    height:12%;
    padding-left:13px;
    padding-right:13px;
    color: #000000;    
    font-size: 0.9rem;
      
    @media (max-width: 500px) {
    flex-direction: column;
    }

`;

export const DivButton = styled.div`
   Display: flex;           
   justify-content: center;
   font-size: 0.9rem;

`;

/*export const DivTentativas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top:1rem;
    margin-bottom:1.5rem;
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
    padding-left:10px;
    padding-right:13px;
    height:80%;

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

    @media (max-width: 650px) {
    justify-content: space-around;
    }
`;

export const Li = styled.li`
    text-decoration: none;
    list-style-type: none;
    font-size: 1.1rem;
    color: #000000;
    margin-bottom: 0.4rem;

    @media (max-width: 1230px) {
    margin-bottom: 0.3 rem;
    }
     @media (max-width: 1150px) {
    margin-bottom: 0.2 rem;
    font-size: 0.9rem;
    }
`;*/
