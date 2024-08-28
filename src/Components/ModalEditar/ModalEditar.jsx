import React, { useState, useEffect } from "react";
import {DivContainer, DivEquipe, DivInfo, DivRetangulo, DivSelections, DivRow4, DivTentativas, Ol, Li, DivClassificacoes, DivDireta, DivRow6, DivButton, Selection, EditInput} from './style';
import Selecionar from "../../Components/Select";
import { Select, Input } from "antd";
import api from "../../Services/api";

function ModalEditar({onClickClose, team}) {

  useEffect(() => {

  }, [])

  const [dados, setDados] = useState({
    nomeEquipe: team.nome,
    nomeCapitao: team.capitao,
    categoria: team.categoria,
    id: team._id,
    baterias: 
      [
        {
          tempo_checkpoints_1: [{minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}], // 5 valores de tempo para a primeira bateria
          tempo_checkpoints_2: [{minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}],
          tempo_total_1: {minutes:'--',seconds:'--', milliseconds:'--'},
          tempo_total_2: {minutes:'--',seconds:'--', milliseconds:'--'} 
        }, 
        {
          tempo_checkpoints_1: [{minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}], // 5 valores de tempo para a primeira bateria
          tempo_checkpoints_2: [{minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}],
          tempo_total_1: '--:--:---',
          tempo_total_2: '--:--:---' 
        }, 
        {
          tempo_checkpoints_1: [{minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}], // 5 valores de tempo para a primeira bateria
          tempo_checkpoints_2: [{minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'},
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}, 
            {minutes:'--',seconds:'--', milliseconds:'--'}],
          tempo_total_1: {minutes:'--',seconds:'--', milliseconds:'--'},
          tempo_total_2: {minutes:'--',seconds:'--', milliseconds:'--'}
        } 
      ]
  });

  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [renderBattery, setRenderBattery] = useState(dados.baterias[0])
  const [etapa, setEtapa] = useState([]);
  const [batteries, setBatteries] = useState([]);
  const [edit, setEdit] = useState(false);
  let editBattery;

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
  }, [selectedBattery, selectedStep, dados])

  useEffect(() => {
    editBattery = {...renderBattery}
  }, [edit])

  function convertMilliseconds(msObject) {
    msObject.tempo_total_1 = {
      minutes: Math.floor(msObject.tempo_total_1 / 60000).toString().padStart(2, '0'), 
      seconds: Math.floor((msObject.tempo_total_1 % 60000) / 1000).toString().padStart(2, '0'),  
      milliseconds: (msObject.tempo_total_1 % 1000).toString().padStart(3, '0')
    };
  msObject.tempo_total_2 = {
      minutes: Math.floor(msObject.tempo_total_2 / 60000).toString().padStart(2, '0'), 
      seconds: Math.floor((msObject.tempo_total_2 % 60000) / 1000).toString().padStart(2, '0'),  
      milliseconds: (msObject.tempo_total_2 % 1000).toString().padStart(3, '0')
  };
  msObject.tempo_checkpoints_1 = msObject.tempo_checkpoints_1.map(ms => {
    if (Math.floor(ms / 60000)!=NaN){
      const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
      const milliseconds = (ms % 1000).toString().padStart(3, '0');

      return {
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds
      };
    }   
  });
  msObject.tempo_checkpoints_2 = msObject.tempo_checkpoints_2.map(ms => {
    if (Math.floor(ms / 60000)!=NaN){
      const minutes = Math.floor(ms / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
      const milliseconds = (ms % 1000).toString().padStart(3, '0');
      return {
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds
      };
    }  
  });
    return msObject
}
function convertToMilliseconds(msObject) {
  msObject.tempo_total_1 = parseInt(msObject.tempo_total_1.minutes)*60000 + parseInt(msObject.tempo_total_1.seconds)*1000 +  parseInt(msObject.tempo_total_1.milliseconds)
  msObject.tempo_total_2 = parseInt(msObject.tempo_total_2.minutes)*60000 +  parseInt(msObject.tempo_total_2.seconds)*1000 +  parseInt(msObject.tempo_total_2.milliseconds);
  msObject.tempo_checkpoints_1 = msObject.tempo_checkpoints_1.map(ms => {
    const millis = parseInt(ms.minutes)*60000 + parseInt(ms.seconds)*1000 + parseInt(ms.milliseconds)
    return millis; 
  });
  msObject.tempo_checkpoints_2 = msObject.tempo_checkpoints_2.map(ms => {
    const millis = parseInt(ms.minutes)*60000 + parseInt(ms.seconds)*1000 + parseInt(ms.milliseconds)
    return millis; 
  });
  return msObject
}

  function updateBattery(toSendData){
    if (selectedStep=='Classificatória'){
      const id = dados.id;  
      const fetchData = async () => {
        const data = {id: toSendData._id, index: 0, update_bateria: {...toSendData}};
        console.log(data)
        try {
          const response = await api.post(`/classificatorias`, data)
         
          
        } catch (error) {
          console.error("Erro ao atualizar os dados:", error); 
        }
      }
      fetchData();
    } else if (selectedStep=='Repescagem'){
      const fetchData = async () => {
        try {
          const response = await api.put('/repescagem', {...toSendData})
         
          
        } catch (error) {
          console.error("Erro ao atualizar os dados:", error); 
        }
      }
      fetchData();
    } else if (selectedStep=='Final'){
      const fetchData = async () => {
        try {
          const response = await api.put('/finais', {...toSendData})
         
          
        } catch (error) {
          console.error("Erro ao atualizar os dados:", error); 
        }
      }
      fetchData();
    }
  }

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
              id: team._id,
              baterias: 
                [
                  convertMilliseconds(response.data[0].bateria[0]), 
                  convertMilliseconds(response.data[0].bateria[1]), 
                  convertMilliseconds(response.data[0].bateria[2])   
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
            

            console.log(response.data[0].bateria[0])
             
                setDados({
                  nomeEquipe: team.nome,
                  nomeCapitao: team.capitao,
                  categoria: team.categoria,
                  id: team._id,
                  baterias: 
                    [
                         convertMilliseconds(response.data[0].bateria[0])
                    ] 
                });
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); 
          }
        }
        fetchData();
      }else if (selectedStep=='Final'){
        const fetchData = async () => {
          try {
            const response = await api.get('/finais', {params: {id:team.id}});
                setDados({
                  nomeEquipe: team.nome,
                  nomeCapitao: team.capitao,
                  categoria: team.categoria,
                  id: team._id,
                  baterias: 
                    [
                         convertMilliseconds(response.data[0].bateria[0])  
                    ]
                });
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
        {!edit && <DivClassificacoes>
          <DivDireta> 
            <DivTentativas>
              <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 1</h3>
            </DivTentativas>
          <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: {renderBattery.tempo_total_1.minutes || '00'}:
                {renderBattery.tempo_total_1.seconds || '00'}:
                {renderBattery.tempo_total_1.milliseconds || '00'}</p>
          <DivRow4>
            <DivRow6>
              <Ol>

              {[...renderBattery.tempo_checkpoints_1.slice(0,5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_1.slice(0,5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 1}: {checkpoint.minutes || '00'}:
                {checkpoint.seconds || '00'}:
                {checkpoint.milliseconds || '00'}
              </Li>
            ))}
              </Ol>
             </DivRow6>

          <DivRow6>
          <Ol>
            {[...renderBattery.tempo_checkpoints_1.slice(5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_1.slice(5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 6}: {checkpoint.minutes || '00'}:
                {checkpoint.seconds || '00'}:
                {checkpoint.milliseconds || '00'}
              </Li>
            ))}
          </Ol>
          </DivRow6>
          </DivRow4>
          </DivDireta>
          <div style={{ width: '2px', height: '90%' , backgroundColor: 'black', marginTop:'1.5%' }}></div>
          <DivDireta> 
            <DivTentativas>
              <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 2</h3>
            </DivTentativas>
            <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: {renderBattery.tempo_total_2.minutes || '00'}:
                {renderBattery.tempo_total_2.seconds || '00'}:
                {renderBattery.tempo_total_2.milliseconds || '00'}</p>
          <DivRow4>
          <DivRow6>
          <Ol>
            {[...renderBattery.tempo_checkpoints_2.slice(0,5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_2.slice(0,5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 1}: {checkpoint.minutes || '00'}:
                {checkpoint.seconds || '00'}:
                {checkpoint.milliseconds || '00'}
              </Li>
            ))}
          </Ol>
          </DivRow6>

          <DivRow6>
          <Ol>
      
            {[...renderBattery.tempo_checkpoints_2.slice(5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_2.slice(5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 6}: {checkpoint.minutes || '00'}:
                {checkpoint.seconds || '00'}:
                {checkpoint.milliseconds || '00'}
              </Li>
            ))}
          </Ol>
          </DivRow6>
          </DivRow4>
          </DivDireta>
        </DivClassificacoes>}
        {edit && <DivClassificacoes>
          <DivDireta> 
            <DivTentativas>
              <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 1</h3>
            </DivTentativas>
            <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: <EditInput onChange={(e) => {editBattery.tempo_total_1.minutes = e.target.value}} maxLength={2} variant={'borderless'} placeholder={renderBattery.tempo_total_1.minutes || '00'}/>:
                <EditInput onChange={(e) => {editBattery.tempo_total_1.seconds = e.target.value}} maxLength={2} variant={'borderless'} placeholder={renderBattery.tempo_total_1.seconds || '00'}/> :
                <EditInput onChange={(e) => {editBattery.tempo_total_1.milliseconds = e.target.value}} maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={renderBattery.tempo_total_1.milliseconds || '00'}/></p>
          <DivRow4>
            <DivRow6>
              <Ol>
              {[...renderBattery.tempo_checkpoints_1.slice(0,5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_1.slice(0,5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                <div>CHECKPOINT {index + 1}:</div> <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].minutes = e.target.value}} maxLength={2} variant={'borderless'} placeholder={checkpoint.minutes || '00'}/>:
                <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].seconds = e.target.value}} maxLength={2} variant={'borderless'} placeholder={checkpoint.seconds || '00'}/> :
                <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].milliseconds = e.target.value}} maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={checkpoint.milliseconds || '00'}/>
              </Li>
            ))}
              </Ol>
             </DivRow6>

          <DivRow6>
          <Ol>
          {[...renderBattery.tempo_checkpoints_1.slice(5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_1.slice(5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 6}: <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].minutes = e.target.value}} maxLength={2} variant={'borderless'} placeholder={checkpoint.minutes || '00'}/>:
                <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].seconds = e.target.value}} maxLength={2} variant={'borderless'} placeholder={checkpoint.seconds || '00'}/> :
                <EditInput onChange={(e) => {editBattery.tempo_checkpoints_1[index].milliseconds = e.target.value}} maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={checkpoint.milliseconds || '00'}/>
              </Li>
            ))}
          </Ol>
          </DivRow6>
          </DivRow4>
          </DivDireta>
          <div style={{ width: '2px', height: '90%' , backgroundColor: 'black', marginTop:'1.5%' }}></div>
          <DivDireta> 
            <DivTentativas>
              <h3 style ={{ alignItems: 'center', marginBottom: '1rem'}}>TENTATIVA 2</h3>
            </DivTentativas>
            <p style ={{ marginBottom: '0.2rem'}}>TEMPO TOTAL: <EditInput maxLength={2} variant={'borderless'} placeholder={renderBattery.tempo_total_2.minutes || '00'}/>:
                <EditInput maxLength={2} variant={'borderless'} placeholder={renderBattery.tempo_total_2.seconds || '00'}/> :
                <EditInput maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={renderBattery.tempo_total_2.milliseconds || '00'}/></p>
          <DivRow4>
          <DivRow6>
          <Ol>
          {[...renderBattery.tempo_checkpoints_2.slice(0,5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_2.slice(0,5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 1}: <EditInput maxLength={2} variant={'borderless'} placeholder={checkpoint.minutes || '00'}/>:
                <EditInput maxLength={2} variant={'borderless'} placeholder={checkpoint.seconds || '00'}/> :
                <EditInput maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={checkpoint.milliseconds || '00'}/>
              </Li>
            ))}
          </Ol>
          </DivRow6>

          <DivRow6>
          <Ol>
          {[...renderBattery.tempo_checkpoints_2.slice(5),...Array.from({ length: 5 - renderBattery.tempo_checkpoints_2.slice(5).length }, () => ({minutes: '--', seconds: '--', milliseconds: '---'}))].map((checkpoint, index) => (
              <Li key={index}>
                CHECKPOINT {index + 6}: <EditInput maxLength={2} variant={'borderless'} placeholder={checkpoint.minutes || '00'}/>:
                <EditInput maxLength={2} variant={'borderless'} placeholder={checkpoint.seconds || '00'}/> :
                <EditInput maxLength={3} style={{width:'35px'}} variant={'borderless'} placeholder={checkpoint.milliseconds || '00'}/>
              </Li>
            ))}
          </Ol>
          </DivRow6>
          </DivRow4>
          </DivDireta>
        </DivClassificacoes>}
          {!edit &&
          <DivButton>
              <button onClick={() => setEdit(!edit)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', width:'125px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', 'font-size':'1.5rem', gap: '15px', 'font-weight':'semi-bold'}}>
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7218 10.4814L3.53501 0.320687C2.13859 -0.504474 0 0.296274 0 2.33721V22.6538C0 24.4847 1.98722 25.5882 3.53501 24.6703L20.7218 14.5144C22.255 13.6112 22.2598 11.3847 20.7218 10.4814Z" fill="#EDA500"/>
                </svg>       Editar
              </button>
          </DivButton>}
          {edit &&
          <DivButton>
              <button onClick={() => {setEdit(!edit); updateBattery(convertToMilliseconds(editBattery))}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', width:'125px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', 'font-size':'1.5rem', gap: '15px', 'font-weight':'semi-bold'}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2155 5.46546L19.5345 0.784542C19.0322 0.282212 18.3509 3.71471e-06 17.6405 0H2.67857C1.19922 0 0 1.19922 0 2.67857V22.3214C0 23.8008 1.19922 25 2.67857 25H22.3214C23.8008 25 25 23.8008 25 22.3214V7.35949C25 6.64909 24.7178 5.96778 24.2155 5.46546ZM12.5 21.4286C10.5276 21.4286 8.92857 19.8296 8.92857 17.8571C8.92857 15.8847 10.5276 14.2857 12.5 14.2857C14.4724 14.2857 16.0714 15.8847 16.0714 17.8571C16.0714 19.8296 14.4724 21.4286 12.5 21.4286ZM17.8571 4.43527V10.0446C17.8571 10.4145 17.5573 10.7143 17.1875 10.7143H4.24107C3.87126 10.7143 3.57143 10.4145 3.57143 10.0446V4.24107C3.57143 3.87126 3.87126 3.57143 4.24107 3.57143H16.9933C17.1709 3.57143 17.3412 3.64196 17.4668 3.76758L17.661 3.96177C17.7232 4.02395 17.7725 4.09776 17.8062 4.17901C17.8398 4.26025 17.8572 4.34733 17.8571 4.43527Z" fill="#EDA500"/>
                </svg>       Salvar
              </button>
          </DivButton>}
        </DivRetangulo>
      </DivContainer>
    )
}
    export default ModalEditar;