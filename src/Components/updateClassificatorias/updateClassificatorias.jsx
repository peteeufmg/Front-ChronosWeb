import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useTimer } from '../TimerProvider/TimerProvider';

export default function updateClassificatorias(){
    const {categoriaAtual, etapaAtual, equipeAtual, bateriaAtual, listaDeEquipes, save, setTentativasFeitas} = useTimer();
    const [etapas, setEtapas] = useState([
        { label: "Classificatoria", value: 1 },
        { label: "Repescagem", value: 2 },
        { label: "Final", value: 3 }
    ]);
    const [baterias, setBaterias] = useState([
        { label: "0", value: 1 },
        { label: "1", value: 2 },
        { label: "2", value: 3 }              
    ]);
    const[etapaParaBack, setEtapaParaBack] = useState();
    const refEtapaParaBack = useRef();
    useEffect(()=>{
        if(etapaAtual == 0) setEtapaParaBack("arrancada")
        else if(etapaAtual == 1) setEtapaParaBack("classificatorias")
        else if(etapaAtual == 2) setEtapaParaBack("repescagem")
        else if(etapaAtual == 3) setEtapaParaBack("finais")
        else setEtapaParaBack()
    }, [etapaAtual, equipeAtual])
    useEffect(()=>{
    refEtapaParaBack.current = etapaParaBack
    console.log(etapaParaBack);
    }, [etapaParaBack])

    const[classificatoria, setclassificatoria] = useState();
    const[RenderIncicial, setRenderInicial] = useState(true); // Evita a renderização inicial
   
    useEffect(() =>{ // quando o botão saldar for clicado, essa função
        if(RenderIncicial){
            setRenderInicial(false);
            return;
        }
        try{ // Busca os dados de classificatória para a equipe selecionada
            const Id = (listaDeEquipes.find((e)=>e.nome == equipeAtual))._id;   // Id da equipe atual
            const Id_classificatorias = classificatoria.find((e)=>e.id_equipe == Id)._id; // Id da classificatória da equipe atual
            const ClassificatoriaAtual = classificatoria.find((e)=>e._id == Id_classificatorias); // elemento da classificatória da equipe atual
            let labelBateriaAtual;
            if(etapaAtual == 1) labelBateriaAtual =  baterias.find((e)=>e.value == bateriaAtual).label // string com o label da bateria atual
            else labelBateriaAtual = '0'
            const ElementBateriaAtual = ClassificatoriaAtual.bateria[labelBateriaAtual] // elemento da bateria atual

            if (ElementBateriaAtual.tempo_checkpoints_1.length == 0 && ElementBateriaAtual.tempo_checkpoints_2.length == 0){ // Caso ambos os tempos e todos os checkpoints estejam vazios - 1ª tentativa
                const indexCheckpoint = "tempo_checkpoints_1";
                const indexMaiorValor = "tempo_total_1";
                saveCheckpoint(ElementBateriaAtual, indexCheckpoint, indexMaiorValor)
                upDateCheckpoint(Id_classificatorias, labelBateriaAtual,ElementBateriaAtual);
                setTentativasFeitas(2);
                
            }
            else if(ElementBateriaAtual.tempo_checkpoints_1.length != 0 || ElementBateriaAtual.tempo_checkpoints_2.length != 0){ // 2ª tentativa
                const indexCheckpoint = "tempo_checkpoints_2";
                const indexMaiorValor = "tempo_total_2";
                saveCheckpoint(ElementBateriaAtual, indexCheckpoint, indexMaiorValor)
                upDateCheckpoint(Id_classificatorias, labelBateriaAtual, ElementBateriaAtual);
                setTentativasFeitas("Bateria Concluida");
            }
            else{ // ambas tentativas foram comcluidas
                
            }
        }
        catch(error){
            console.error('Erro:', error);
        }
        //
    }, [save]);
     
    useEffect(()=>{ // Quando a bateria for atualizada, os dados da classificatoria será requisitado
        const fetchData = async () => {
            try {
                const response = await fetch(`https://front-chronosweb-1.onrender.com/${refEtapaParaBack.current}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setclassificatoria(data)
                } else {
                    console.error('Erro ao buscar equipes');
                }
            }
            catch (error) {
                    console.error('Erro ao buscar equipes:', error);
                }
          };
          //if((categoriaAtual && etapaAtual && equipeAtual && bateriaAtual) !== undefined){
            fetchData();
          //}
          
    }, [etapaParaBack, bateriaAtual])
    
    useEffect(()=>{
        try{
            const Id = (listaDeEquipes.find((e)=>e.nome == equipeAtual))._id;   // Id da equipe atual
            const Id_classificatorias = classificatoria.find((e)=>e.id_equipe == Id)._id; // Id da classificatória da equipe atual
            const ClassificatoriaAtual = classificatoria.find((e)=>e._id == Id_classificatorias); // elemento da classificatória da equipe atual
            let labelBateriaAtual;
            if(etapaAtual == 1) labelBateriaAtual =  baterias.find((e)=>e.value == bateriaAtual).label // string com o label da bateria atual
            else labelBateriaAtual = '0'
            const ElementBateriaAtual = ClassificatoriaAtual.bateria[labelBateriaAtual] // elemento da bateria atual
            console.log(ElementBateriaAtual);
            if (ElementBateriaAtual.tempo_checkpoints_1.length == 0 && ElementBateriaAtual.tempo_checkpoints_2.length == 0){ // Caso ambos os tempos e todos os checkpoints estejam vazios - 1ª tentativa
            setTentativasFeitas(1);
            }
            else if(ElementBateriaAtual.tempo_checkpoints_1.length != 0 ^ ElementBateriaAtual.tempo_checkpoints_2.length != 0){ // 2ª tentativa
            setTentativasFeitas(2);
            }
            else{ // ambas tentativas foram comcluidas
            setTentativasFeitas("Bateria Concluida");
            }
        }
        catch(error){
            console.error('Erro:', error);
        }
        
    }, [equipeAtual, classificatoria, etapaAtual])

    const upDateCheckpoint = async (id, index, dados_bateria) => {
        try {
            const response = await axios.post(`https://front-chronosweb-1.onrender.com/${refEtapaParaBack.current}/${id}`, {
                [`bateria.${index}`]: dados_bateria 
            });
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    const saveCheckpoint = (elementoBateriaAtual, Indexcheckpoint, indexValor) =>{
        
        const checkpoints = [];
        for (let i = 0; i <= 9; i++){
            const millissecond = parseInt(document.getElementById(`C${i}`).textContent.split(":")[2]);
            const second = parseInt(document.getElementById(`C${i}`).textContent.split(":")[1]);
            const minute = parseInt(document.getElementById(`C${i}`).textContent.split(":")[0]);
            const checkpointTotal = millissecond + second*1000 + minute*60000;
            if (!isNaN(checkpointTotal)) {
                checkpoints.push(checkpointTotal);
            }
        }
        elementoBateriaAtual[Indexcheckpoint] = checkpoints
        elementoBateriaAtual[indexValor] = Math.max(...checkpoints)
        return elementoBateriaAtual;
    }
}