import React, { useState, useEffect } from "react";
import {DivContainer, DivEquipe, DivInfo, DivRetangulo, DivSelections, DivRow4, DivTentativas, Ol, Li, DivClassificacoes, DivDireta, DivRow6, DivButton, Selection} from './style';
import Selecionar from "../../Components/Select";
import { Select } from "antd";
import api from "../../Services/api";

function ModalS({onClickClose, team}) {
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