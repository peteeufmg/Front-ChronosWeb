import React from "react";
import { useState, useEffect } from "react";
import { DivContainer, DivClassificacao, DivEquipe, NomeEquipe, DivCheckpoints, DivTentativa, DivHeader, DivTitle } from "./style";
import { Table } from "antd";
function Apresentacao() {
    const [checkpoints, setCheckpoints] = useState(()=>{
        const storedCheckpoints = localStorage.getItem('checkpoints');
        return storedCheckpoints ? JSON.parse(storedCheckpoints) : [];
    });
    const [equipeAtual, setEquipeAtual] = useState(localStorage.getItem('equipeAtual'));
    const [etapaAtual, setEtapaAtual] = useState(localStorage.getItem('etapaAtual'));
    const [tentativasFeitas, setTentativasFeitas] = useState(() => {
        const value = localStorage.getItem('tentativasFeitas')
        if (value==0 || value=='Bateria Concluida'){
            return "X";
        }else if(value!='Bateria Concluida'){
            return value;
        }
    });
    const [bateriaAtual, setBateriaAtual] = useState(localStorage.getItem('bateriaAtual'));
    const [categoriaAtual, setCategoriaAtual] = useState(localStorage.getItem('categoriaAtual'))

    const handleStorageChange = (event) => {
        if (event.key === 'checkpoints') {
            const storedCheckpoints = event.newValue;
            console.log(event.newValue)
            
            setCheckpoints(storedCheckpoints ? JSON.parse(storedCheckpoints) : []);
        }
        if (event.key === 'equipeAtual') {
            setEquipeAtual(event.newValue);
            console.log('oi')
          }
        if (event.key === 'etapaAtual') {
            setEtapaAtual(event.newValue);
        }
        if (event.key === 'tentativasFeitas') {
            if (event.newValue==0){
                setTentativasFeitas("X");
            }else if(event.newValue!='Bateria Concluida'){
                setTentativasFeitas(event.newValue);
            }
            
        }
        if (event.key === 'bateriaAtual') {
            setBateriaAtual(event.newValue);
        }
        if (event.key === 'categoriaAtual') {
            setCategoriaAtual(event.newValue);
        }
      };
  
      useEffect(() => {
        window.addEventListener('storage', handleStorageChange);

        // Cleanup: remover o listener ao desmontar o componente
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    useEffect(()=>{
        console.log(checkpoints);
    }, [checkpoints])

    const columns = [
        {
          title: 'N°',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: 'Equipe',
          dataIndex: 'Equipe',
          key: 'Equipe',
        },
        {
          title: 'Checks',
          dataIndex: 'Checks',
          key: 'Checks',
        },
        {
          title: 'Tempo',
          dataIndex: 'Tempo',
          key: 'Tempo',
        }
      ];

    return (
        <>
            <DivContainer>
                <DivEquipe>
                    <DivHeader>
                        <NomeEquipe>
                            {equipeAtual}
                        </NomeEquipe>
                        <DivTentativa>
                            Tentativa: {tentativasFeitas}
                        </DivTentativa>
                    </DivHeader>
                    <DivCheckpoints>
                        {checkpoints.map((Checkpoint, index)=>(
                            <p>Checkpoint  {index+1}: {Checkpoint}</p>    
                        ))}
                        {Array.from({ length: 9-checkpoints.length }, (_, i) => (
                            <p>Checkpoint {checkpoints.length+ i + 1}: --:--:---</p>
                        ))}
                    </DivCheckpoints>
                </DivEquipe>
        
            </DivContainer> 
        </>
    )
}

export default Apresentacao;