import React, { useState } from "react";
import { DivContainer, DivEquipe, DivInfo, DivRetangulo, DivSelections, DivButton} from './style';
import Selecionar from "../../Components/Select";


function ModalS() {

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
    //
});

    return(
      <DivContainer>
        <DivRetangulo>
          <DivEquipe>
             <h1>{dados.nomeEquipe}</h1>
             <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px 10px 0', backgroundColor: '#E4E4E4', border: 'none', borderRadius: '5px' }}>
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
          <DivButton>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', 'font-size':'1.5rem', gap: '15px', 'font-weight':'semi-bold'}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2155 5.46546L19.5345 0.784542C19.0322 0.282212 18.3509 3.71471e-06 17.6405 0H2.67857C1.19922 0 0 1.19922 0 2.67857V22.3214C0 23.8008 1.19922 25 2.67857 25H22.3214C23.8008 25 25 23.8008 25 22.3214V7.35949C25 6.64909 24.7178 5.96778 24.2155 5.46546ZM12.5 21.4286C10.5276 21.4286 8.92857 19.8296 8.92857 17.8571C8.92857 15.8847 10.5276 14.2857 12.5 14.2857C14.4724 14.2857 16.0714 15.8847 16.0714 17.8571C16.0714 19.8296 14.4724 21.4286 12.5 21.4286ZM17.8571 4.43527V10.0446C17.8571 10.4145 17.5573 10.7143 17.1875 10.7143H4.24107C3.87126 10.7143 3.57143 10.4145 3.57143 10.0446V4.24107C3.57143 3.87126 3.87126 3.57143 4.24107 3.57143H16.9933C17.1709 3.57143 17.3412 3.64196 17.4668 3.76758L17.661 3.96177C17.7232 4.02395 17.7725 4.09776 17.8062 4.17901C17.8398 4.26025 17.8572 4.34733 17.8571 4.43527Z" fill="#EDA500"/>
                </svg>       Salvar
              </button>
          </DivButton>
        </DivRetangulo>
      </DivContainer>
    )
}

export default ModalS;