import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useTimer } from '../TimerProvider/TimerProvider';
const DataContext = createContext();

export function DataProvider({ children }) {
    const { Iniciar, Pausar, Reiniciar, minute, second, millisecond, disabled, setdisabled, returnMinute, returnSecond, returnMillisecond} = useTimer();

    const[BateryDisable, setdesableBatery] = useState(false);
    const categorias = ["SegidorAvancado", "SeguidorMirim", "Sumo"];
    const etapasSeguidor = ["Arrancada", "Classificatoria", "Repescagem", "Final"];
    const etapasSumo = ["Confronto"];
    const BateriaAvancada = ["Bateria 1", "Bateria 2", "Bateria 3"];
    const BateriaMirim = ["Bateria 1", "Bateria 2"];
    const equipesPorCategoria = {
        SegidorAvancado: ['EquipeAvançado1', 'EquipeAvançado2', 'EquipeAvançado3'],
        SeguidorMirim: ['EquipeMirim1', 'EquipeMirim2', 'EquipeMirim3'],
        Sumo: ['EquipeSumô1', 'EquipeSumô2', 'EquipeSumô3']
    }
    const[categoria, setCategoria] = useState();
    const[equipefiltrada, setequipe] = useState(equipesPorCategoria[categorias[0]]);
    const[equipeAtual, setequipeAtual] = useState(/*equipesPorCategoria[categorias[0]][0]*/);

    const[etapa, setetapas] = useState(etapasSeguidor);
    const[etapaAtual, setetapaAtual] = useState(/*etapasSeguidor[0]*/);

    const[bateria, setbateria] = useState(BateriaAvancada); 
    const[bateriaAtual, setbateriaAtual] = useState();
    const[listaDeDados, setListaDeDados] = useState([]);
    const minhaLista = [];
    const DadosBaseDasEquipes = 
        {
            nome: '',
            categoria: '',
            numeroDeBaterias: 0,
            numeroDeTentativasPorEtapa: {
                Arrancada: 0,
                Classificatoria: 0,
                Repescagem: 0,
                Final: 0,
                Confronto: 0
            },

            DadosDePontuacao: {
                TempoNaArrancada: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoNaClassificatoria: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoNaRepescagem: {
                    tempo: 0,
                    checkpoint: 0
                },
                TempoFinal: {
                    tempo: 0,
                    checkpoint: 0
                }
            },
            DadosDecisivos: {
                AprovadoNaArrancada: false,
                AprovadoNaClassificatoria: false,
                AprovadoNaRepescagem: false,
                AprovadoFinal: false
            }
        }
    const equipesEcategoria = [
        {
            nome: 'EquipeAvançado1',
            categoria: 'SegidorAvancado'
        },
        {
            nome: 'EquipeMirim1',
            categoria: 'SeguidorMirim'
        },
        {
            nome: 'EquipeSumô1',
            categoria: 'Sumo'
        }
    ];
    
    
    function criarListaDeDados(){ // Adiciona uma novas equipes à lista de equipes conforme o banco de dados
       const minhaLista = equipesEcategoria.map((elemento) => {
           const newData = {                   // Cria uma nova versão do objeto que você deseja modificar
                ...DadosBaseDasEquipes,
                nome: elemento.nome,           // Atualiza a propriedade "nome"
                categoria: elemento.categoria, // Atualiza a propriedade "categoria"
            };
            return newData;
        });
        setListaDeDados(minhaLista);
     } 

     useEffect(() => {
        criarListaDeDados();
     }, []);
     
     function Salvar(){
        
    ContagemDeTentativas();
    //AtualizacaoDeClassificacao();
    }
    function ContagemDeTentativas(){

        const indice = listaDeDados.findIndex(equipe => equipe.nome === equipeAtual);
        if((categoria === "SegidorAvancado" || categoria === "SeguidorMirim") && (etapaAtual === "Classificatoria") && listaDeDados[indice].numeroDeTentativasPorEtapa[etapaAtual] < 2){
            console.log("seg");
        }
        else if(listaDeDados[indice].numeroDeTentativasPorEtapa[etapaAtual] < 1){
         console.log("sum"); 
        }
        
    }
    function calculaPontuacoa(){

    }

    const [DataTeam, setDataTeam] = useState(DadosBaseDasEquipes);
    const Data = {
        setDataTeam,
        Salvar,setdesableBatery, setequipe, 
        setequipeAtual, setetapas, 
        setetapaAtual, setbateria, 
        setbateriaAtual, setCategoria,
        DataTeam,
        BateryDisable, categorias, etapasSeguidor,
        etapasSumo, BateriaAvancada, BateriaMirim, equipesPorCategoria, 
        equipefiltrada, equipeAtual, etapa, etapaAtual, bateria, 
        bateriaAtual, listaDeDados
        };

    return (
        <DataContext.Provider value={Data}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
