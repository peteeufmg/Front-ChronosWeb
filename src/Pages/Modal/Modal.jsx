import React, { useState } from "react";
import {DivContainer, DivEquipe, DivInfo, DivRetangulo, DivSelections, DivRow4, DivTentativas, DivRow5, Ol, Li} from './style';
import Button from "../../Components/Button";
import Selecionar from "../../Components/Select";


function Modal() {

const [dados, setDados] = useState({
  nomeEquipe: 'Terra do nunca',
  nomeCapitao: 'Capitão gancho',
  categoria: 'Sequestrar criança',
  escola: 'Vida',
  etapas: 
    {// 5 valores de tempo para a primeira bateria
      bateria1: {
        tentativa1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
        tentativa2: [0, 0, 0, 0, 0] 
      }, 
      bateria2: {
        tentativa1: [0, 0, 0, 0, 0], // 5 valores de tempo para a segunda bateria
        tentativa2: [0, 0, 0, 0, 0]
      }, 
      bateria3: {
        tentativa1: [0, 0, 0, 0, 0], // 5 valores de tempo para a terceira bateria
        tentativa2: [0, 0, 0, 0, 0] 
      } 
    }
    // Adicione mais objetos de etapas conforme necessário
});

    return(
      <DivContainer>
        <DivRetangulo>
          <DivEquipe>
             <h1>{dados.nomeEquipe}</h1>
             <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', backgroundColor: '#E4E4E4', border: 'none', borderRadius: '5px' }}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z" fill="#EDA500"/>
                </svg>
              </button>
          </DivEquipe>
          <DivInfo>
            <h3>CAPITÃO:</h3><p>{dados.nomeCapitao}</p>
            <h3>CATEGORIA:</h3><p>{dados.categoria}</p>
            <h3>ESCOLA:</h3><p>{dados.escola}</p>
          </DivInfo>
          <DivSelections>
            <h3>ETAPA:</h3><Selecionar/>
            <h3>BATERIA:</h3><Selecionar/>
          </DivSelections>
          <DivTentativas>
            <p>TENTATIVA 1</p>
            <p>TENTATIVA 2</p>
          </DivTentativas>
          <DivRow4> 
            <DivRow5>
              <Ol>
                <Li>Checkpoint 1: --:--:---</Li>
                <Li>Checkpoint 2: --:--:---</Li>
                <Li>Checkpoint 3: --:--:---</Li>
                <Li>Checkpoint 4: --:--:---</Li>
                <Li>Checkpoint 5: --:--:---</Li>
              </Ol>
            </DivRow5>
            <DivRow5>
              <Ol>
                <Li>Checkpoint 6:  --:--:---</Li>
                <Li>Checkpoint 7:  --:--:---</Li>
                <Li>Checkpoint 8:  --:--:---</Li>
                <Li>Checkpoint 9:  --:--:---</Li>
                <Li>Checkpoint 10: --:--:---</Li>
              </Ol>
            </DivRow5>
            <div style={{ width: '2px', height: '90%' , backgroundColor: 'black' }}></div>
            <DivRow5>
              <Ol>
                <Li>Checkpoint 1: --:--:---</Li>
                <Li>Checkpoint 2: --:--:---</Li>
                <Li>Checkpoint 3: --:--:---</Li>
                <Li>Checkpoint 4: --:--:---</Li>
                <Li>Checkpoint 5: --:--:---</Li>
              </Ol>
           </DivRow5>
           <DivRow5>
             <Ol>
               <Li>Checkpoint 6:  --:--:---</Li>
               <Li>Checkpoint 7:  --:--:---</Li>
               <Li>Checkpoint 8:  --:--:---</Li>
               <Li>Checkpoint 9:  --:--:---</Li>
               <Li>Checkpoint 10: --:--:---</Li>
             </Ol>
           </DivRow5>
          </DivRow4>
        </DivRetangulo>
      </DivContainer>
    )
}

export default Modal;