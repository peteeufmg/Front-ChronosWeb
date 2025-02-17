import React, { useState, useEffect } from "react";
import {DivContainer, DivEquipe, DivInfo, DivRetangulo, DivSelections, DivRow4, DivTentativas, Ol, Li, DivClassificacoes, DivDireta, DivRow6, Selection} from './style';
import Selecionar from "../../Components/Select";
import { Select } from "antd";
import api from "../../Services/api";

function Modal({onClickClose, team}) {

    useEffect(() => {

    }, [])

    const [dados, setDados] = useState({
      nomeEquipe: team.nome,
      nomeCapitao: team.capitao,
      categoria: team.categoria,
      baterias: 
        [// 5 valores de tempo para a primeira bateria
          {
            tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
            tempo_checkpoints_2: [0, 0, 0, 0, 0],
            tempo_total_1: '--:--:---',
            tempo_total_2: '--:--:---' 
          }, 
          {
            tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
            tempo_checkpoints_2: [0, 0, 0, 0, 0],
            tempo_total_1: '--:--:---',
            tempo_total_2: '--:--:---' 
          }, 
          {
            tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
            tempo_checkpoints_2: [0, 0, 0, 0, 0],
            tempo_total_1: '--:--:---',
            tempo_total_2: '--:--:---' 
          } 
        ]
        // Adicione mais objetos de etapas conforme necessário
    });

    const [selectedStep, setSelectedStep] = useState(null);
    const [selectedBattery, setSelectedBattery] = useState(null);
    const [renderBaterry, setRenderBattery] = useState(dados.baterias[0])
    const [etapa, setEtapa] = useState([]);
    const [batteries, setBatteries] = useState([]);

    useEffect(() => {
      if (dados.categoria==1){
        setEtapa([{ value:'Classificatória' },
          { value:'Repescagem' },
          { value:'Final' }]);
      }else if (dados.categoria==2){
        setEtapa([{ value:'Classificatória' },
          { value:'Final' }])
      }
      
    }, [dados])
    
    useEffect(() => {
      if (dados.categoria==1){
        if (selectedStep=='Classificatória'){
          setBatteries([{value:'Bateria 1' },
            { value:'Bateria 2' },
            { value:'Bateria 3'}
          ])
          setSelectedBattery(null);
        }if (selectedStep=='Repescagem'){
          setBatteries([])
          setSelectedBattery(null);
        }if (selectedStep=='Final'){
          setBatteries([])
          setSelectedBattery(null);
        }
      }else if (dados.categoria==2){
        if (selectedStep=='Classificatória'){
          setBatteries([{value:'Bateria 1' },
            { value:'Bateria 2' }
          ])
          setSelectedBattery(null);
        }else if (selectedStep=='Final'){
          setBatteries([])
          setSelectedBattery(null);
        }
      }
    }, [selectedStep])
    useEffect(() => {
      if (selectedBattery=='Bateria 1'){
        setRenderBattery(dados.baterias[0]);
      }else if (selectedBattery=='Bateria 2'){
        setRenderBattery(dados.baterias[1]);
      }else if (selectedBattery=='Bateria 3'){
        setRenderBattery(dados.baterias[2]);
      }else if(selectedStep=='Classificatória'){
        setRenderBattery(dados.baterias[0]);
      }else{
        setRenderBattery(dados.baterias[0]);
      }

    }, [selectedBattery, selectedStep,dados])
    useEffect(() => {
      if (selectedStep !== null) {
        if (selectedStep=='Classificatória'){
          const fetchData = async () => {
            try {
              const response = await api.get('/classificatorias', {params: {id:team.id}});
              setDados({
                nomeEquipe: team.nome,
                nomeCapitao: team.capitao,
                categoria: team.categoria,
                baterias: 
                  [// 5 valores de tempo para a primeira bateria
                   
                       // 5 valores de tempo para a primeira bateria
                    response.data[0].bateria[0]
                    , 
                    response.data[0].bateria[1] // 5 valores de tempo para a segunda bateria
                    , 
                    
                    response.data[0].bateria[2]// 5 valores de tempo para a terceira bateria
                      
                     
                  ]
                
              });
             
              
            } catch (error) {
              console.error("Erro ao buscar os dados:", error); 
            }
          };
          fetchData();
          
          
        }else if (selectedStep=='Repescagem'){
          
          const fetchData = async () => {
            try {
              const response = await api.get('/repescagem', {params: {id:team.id}});
              

              if(response.data){
                try{
                  setDados({
                    nomeEquipe: team.nome,
                    nomeCapitao: team.capitao,
                    categoria: team.categoria,
                    baterias: 
                      [// 5 valores de tempo para a primeira bateria
                       
                           // 5 valores de tempo para a primeira bateria
                          response.data[0].bateria
                          
                         
                      ]
                    
                  });
                }catch(error){
                  setDados({
                    nomeEquipe: team.nome,
                    nomeCapitao: team.capitao,
                    categoria: team.categoria,
                    baterias: 
                      [// 5 valores de tempo para a primeira bateria
                        {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                          tempo_checkpoints_2: [0, 0, 0, 0, 0],
                          tempo_total_1: '--:--:---',
                          tempo_total_2:'--:--:---' },
                          {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                            tempo_checkpoints_2: [0, 0, 0, 0, 0],
                            tempo_total_1: '--:--:---',
                            tempo_total_2: '--:--:---' },
                            {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                              tempo_checkpoints_2: [0, 0, 0, 0, 0],
                              tempo_total_1: '--:--:---',
                              tempo_total_2:'--:--:---' }
                         
                      ]
                    
                  });
                }
                
              }else{ 
                console.log('haha')
              }
              
            } catch (error) {
              console.error("Erro ao buscar os dados:", error); 
            }
          
          
          }
          fetchData();
        }else if (selectedStep=='Final'){
          const fetchData = async () => {
            try {
              
              const response = await api.get('/finais', {params: {id:team.id}});
              if(response.data){
                try{
                  setDados({
                    nomeEquipe: team.nome,
                    nomeCapitao: team.capitao,
                    categoria: team.categoria,
                    baterias: 
                      [// 5 valores de tempo para a primeira bateria
                       
                           // 5 valores de tempo para a primeira bateria
                          response.data[0].bateria
                          
                         
                      ]
                    
                  });
                }catch(error){
                  setDados({
                    nomeEquipe: team.nome,
                    nomeCapitao: team.capitao,
                    categoria: team.categoria,
                    baterias: 
                      [// 5 valores de tempo para a primeira bateria
                        {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                          tempo_checkpoints_2: [0, 0, 0, 0, 0],
                          tempo_total_1: '--:--:---',
                          tempo_total_2:'--:--:---' },
                          {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                            tempo_checkpoints_2: [0, 0, 0, 0, 0],
                            tempo_total_1: '--:--:---',
                            tempo_total_2: '--:--:---' },
                            {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                              tempo_checkpoints_2: [0, 0, 0, 0, 0],
                              tempo_total_1: '--:--:---',
                              tempo_total_2:'--:--:---' }
                         
                      ]
                    
                  });
                }
              }else{
                setDados({
                  nomeEquipe: team.nome,
                  nomeCapitao: team.capitao,
                  categoria: team.categoria,
                  baterias: 
                    [// 5 valores de tempo para a primeira bateria
                      {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                      tempo_checkpoints_2: [0, 0, 0, 0, 0],
                      tempo_total_1: [],
                      tempo_total_2: [] },
                      {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                        tempo_checkpoints_2: [0, 0, 0, 0, 0],
                        tempo_total_1: [],
                        tempo_total_2: [] },
                        {tempo_checkpoints_1: [0, 0, 0, 0, 0], // 5 valores de tempo para a primeira bateria
                          tempo_checkpoints_2: [0, 0, 0, 0, 0],
                          tempo_total_1: [],
                          tempo_total_2: [] },
                       
                    ]
                  
                });
              }
              
            } catch (error) {
              console.error("Erro ao buscar os dados:", error); 
            }
          
        }
        fetchData();
      }
      }
    }, [selectedStep]);
    return(
        <DivContainer>
        <DivRetangulo>
          <DivEquipe>
             <h1>{dados.nomeEquipe}</h1>
             <button onClick={onClickClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingleft: '10px', backgroundColor: '#E4E4E4', border: 'none', borderRadius: '5px' }}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z" fill="#EDA500"/>
                </svg>
              </button>
          </DivEquipe>
          <DivInfo>
            <h3>CAPITÃO:</h3><p>{dados.nomeCapitao}</p>
            <h3>CATEGORIA:</h3><p>{dados.categoria}</p>
          </DivInfo>
          
          <DivSelections>
            <h3>ETAPA:</h3>
            <Selection
                placeholder="Selecionar"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                value={selectedStep}
                onChange={value => setSelectedStep(value)}
              >
                {etapa.map(steps => (
                  <Option key={steps.value} value={steps.value}>
                      {steps.values}
                </Option>
                ))}
              </Selection>
            <h3>BATERIA:</h3>
            <Selection
                placeholder="Selecionar"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                value={selectedBattery}
                onChange={value => setSelectedBattery(value)}
              >
                {batteries.map(battery => (
                  <Option key={battery.value} value={battery.value}>
                      {battery.values}
                  </Option>
                ))}
              </Selection>
          </DivSelections>
          <DivClassificacoes>
            <DivDireta> 
              <DivTentativas>
                <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 1</h3>
              </DivTentativas>
            <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: {renderBaterry.tempo_total_1 || '--:--:---'}</p>
            <DivRow4>
              <DivRow6>
                <Ol>
                  <Li>CHECKPOINT 1: {renderBaterry.tempo_checkpoints_1[0] || '--:--:---'} </Li>
                  <Li>CHECKPOINT 2: {renderBaterry.tempo_checkpoints_1[1] || '--:--:---'}</Li>
                  <Li>CHECKPOINT 3: {renderBaterry.tempo_checkpoints_1[2] || '--:--:---'}</Li>
                  <Li>CHECKPOINT 4: {renderBaterry.tempo_checkpoints_1[3] || '--:--:---'}</Li>
                  <Li>CHECKPOINT 5: {renderBaterry.tempo_checkpoints_1[4] || '--:--:---'}</Li>
                </Ol>
               </DivRow6>

            <DivRow6>
            <Ol>
                <Li>CHECKPOINT 6:  {renderBaterry.tempo_checkpoints_1[5] || '--:--:---'}</Li>
                <Li>CHECKPOINT 7:  {renderBaterry.tempo_checkpoints_1[6] || '--:--:---'}</Li>
                <Li>CHECKPOINT 8:  {renderBaterry.tempo_checkpoints_1[7] || '--:--:---'}</Li>
                <Li>CHECKPOINT 9:  {renderBaterry.tempo_checkpoints_1[8] || '--:--:---'}</Li>
                <Li>CHECKPOINT 10: {renderBaterry.tempo_checkpoints_1[9] || '--:--:---'}</Li>
            </Ol>
            </DivRow6>
            </DivRow4>
            </DivDireta>
            <div style={{ width: '2px', height: '90%' , backgroundColor: 'black', marginTop:'1.5%' }}></div>
            <DivDireta> 
              <DivTentativas>
                <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 2</h3>
              </DivTentativas>
            <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: {renderBaterry.tempo_total_2 || '--:--:---'}</p>
            <DivRow4>
            <DivRow6>
            <Ol>
                <Li>CHECKPOINT 1: {renderBaterry.tempo_checkpoints_2[0] || '--:--:---'}</Li>
                <Li>CHECKPOINT 2: {renderBaterry.tempo_checkpoints_2[1] || '--:--:---'}</Li>
                <Li>CHECKPOINT 3: {renderBaterry.tempo_checkpoints_2[2] || '--:--:---'}</Li>
                <Li>CHECKPOINT 4: {renderBaterry.tempo_checkpoints_2[3] || '--:--:---'}</Li>
                <Li>CHECKPOINT 5: {renderBaterry.tempo_checkpoints_2[4] || '--:--:---'}</Li>
            </Ol>
            </DivRow6>

            <DivRow6>
            <Ol>
                <Li>CHECKPOINT 6:  {renderBaterry.tempo_checkpoints_2[5] || '--:--:---'}</Li>
                <Li>CHECKPOINT 7:  {renderBaterry.tempo_checkpoints_2[6] || '--:--:---'}</Li>
                <Li>CHECKPOINT 8:  {renderBaterry.tempo_checkpoints_2[7] || '--:--:---'}</Li>
                <Li>CHECKPOINT 9:  {renderBaterry.tempo_checkpoints_2[8] || '--:--:---'}</Li>
                <Li>CHECKPOINT 10: {renderBaterry.tempo_checkpoints_2[9] || '--:--:---'}</Li>
            </Ol>
            </DivRow6>
            </DivRow4>
            </DivDireta>
          </DivClassificacoes>
        </DivRetangulo>
      </DivContainer>
    )
}
export default Modal;