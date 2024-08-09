import React from "react";
import {DivContainer, DivEquipe, DivRetangulo} from './style';
import React, { useState } from 'react';



function Modal() {

const [dados, setDados] = useState({
  nomeCapitao: 'Capitão gancho',
  categoria: 'Sequestrar criança',
  escola: 'Vida',
  etapas: 
    {
      bateria1: [0, 0], // 5 valores de tempo para a primeira bateria
      bateria2: [0, 0], // 5 valores de tempo para a segunda bateria
      bateria3: [0, 0] // 5 valores de tempo para a tereira bateria
    }
    // Adicione mais objetos de etapas conforme necessário
});


    return (
      <DivContainer>
        <DivRetangulo>
          <DivEquipe>
             <h1 className="Equipe">EQUIPE 1</h1>
          </DivEquipe>
        </DivRetangulo>
      </DivContainer>
           
    )
}

export default Modal;