import React, { useState } from "react";
import {DivContainer, DivEquipe, DivRetangulo} from './style';


function Modal() {

const [dados, setDados] = useState({
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


    return (
      <DivContainer>
        <DivRetangulo>
          <DivEquipe>
             <h1 className="Equipe">{dados.nomeCapitao}</h1>
          </DivEquipe>
        </DivRetangulo>
      </DivContainer>
           
    )
}

export default Modal;