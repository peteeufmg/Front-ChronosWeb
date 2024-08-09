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
             <Button type = "Close" style = {{}}/>
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