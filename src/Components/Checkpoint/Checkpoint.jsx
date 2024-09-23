import {DivRow, DivRow1,DivRow2,DivButton, Ol, Li, DivC, Div, DivSumo} from './Style';
import {default as CustomButton} from '../../Components/Button/Button';
import { useState, useEffect, useRef } from 'react';
import { useTimer } from '../TimerProvider/TimerProvider';
import Edit from '../Edit/Edit'
import axios from 'axios';

export default function Checkpoint(){
    
    const {disabled, check, refListaDeEquipes, listaDeEquipes} = useTimer();
    const indexCheckpoint = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const[IdEnvidado, SetIdEnviado] = useState('');

    useEffect(() => { // colhe os dados de classificatórias existentes e salva em IdEnvidado
         const fetchEquipes = async () => {
             try {
                 const response = await fetch('http://localhost:8000/classificatorias', {
                     method: 'GET',
                     headers: {
                         'Content-Type': 'application/json',
                     },
                 });
                 if (response.ok) {
                     const data = await response.json();
                     SetIdEnviado(data); // Update the list of teams
                 } else {
                     console.error('Erro ao buscar equipes');
                 }
             } catch (error) {
                 console.error('Erro ao buscar equipes:', error);
             }
         };
         fetchEquipes();
     }, []); // Run only once when the component is mounted

     useEffect(() => { //filtra os Id's enviados e salva os que ainda não foram no banco de dados
            const fetchEquipes = async (id) => {
                const data = {
                    id_equipe: id,
                    apresentacao: 0,
                    criatividade: 0,
                    robustez: 0,
                    total: 0,
                    bateria: []
                };
                // Verifica se o ID já foi enviado
                if (IdEnvidado.some(idenviado => idenviado.id_equipe === id)) {
                    console.log(`Id ${id} para classificatórias já foi enviado`);
                    return;
                }
                try {
                    const response = await axios.post('http://localhost:8000/classificatorias', data);
                    console.log('Dados enviados com sucesso:', response.data);
                } catch (error) {
                    console.error('Erro ao enviar dados:', error);
                }
            };

            try{
                refListaDeEquipes.current.forEach((equipe) => {
                    fetchEquipes(equipe._id);
                });
            }
            catch(e){
                console.error('Erro ao ler dados:', e);
            }
            
    }, [listaDeEquipes]);
    
    
    //configuração para habilitação dos checkpoints
    useEffect(()=>{
        indexCheckpoint.forEach((e)=>{
            document.getElementById(e).disabled = true;
        })
    }, [])
    const[index, setIndex] = useState(null);
    const[valor, setvalor] = useState(true);
    useEffect(()=>{
        if(valor){ // Lógica de execução para primeira renderização
            console.log(valor);
            setvalor(false);
        }
        else{ // Lógica dos checkpoints 
            if(indexCheckpoint.every((e)=> document.getElementById(e).disabled === true) && document.getElementById("0").checked === false){//se todos estiverem bloqueados
                //&& document.getElementById("C0").textContent === "--:--:---"
                document.getElementById("0").disabled = false;
                setIndex("0");
                console.log("valor inicial");
            }
            else{//se houver algum desbloqueado
                const indexOn = indexCheckpoint.find((e) => document.getElementById(e).disabled === false) //faz uma busca no elemento desbloqueado

                if(indexCheckpoint.some((e)=> e === indexOn)){// se encontrou algum
                    document.getElementById(indexOn).disabled = true;
                    setIndex(indexOn);
                }
                else{
                    document.getElementById(index).disabled = false;
                }
            }
        }
    }, [disabled])
    return(
        <DivC>
            <DivRow>
                <h2>Checkpoints:</h2>
            </DivRow>
        <DivRow>
            <DivRow1>
                <Ol>
                    <DivRow2>
                        <input type="checkbox"  onClick={check} name="" id="0" />
                        <Li>Checkpoint 0:<span id="C0">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="1" />
                        <Li>Checkpoint 1:<span id="C1">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="2" />
                        <Li>Checkpoint 2:<span id="C2">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="3" />
                        <Li>Checkpoint 3:<span id="C3">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="4" />
                        <Li>Checkpoint 4:<span id="C4">--:--:---</span></Li>
                    </DivRow2>
                </Ol>
            </DivRow1>
            <DivRow1>
                <Ol>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="5" />
                        <Li>Checkpoint 5:<span id="C5">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="6" />
                        <Li>Checkpoint 6:<span id="C6">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="7" />
                        <Li>Checkpoint 7:<span id="C7">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="8" />
                        <Li>Checkpoint 8:<span id="C8">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input type="checkbox" onClick={check} name="" id="9" />
                        <Li>Checkpoint 9:<span id="C9">--:--:---</span></Li>
                    </DivRow2>
                </Ol>
            </DivRow1>
        </DivRow>
        <DivButton>
            <Edit/>
        </DivButton>
        </DivC>
    )
}