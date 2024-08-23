import {DivRow2, DivRow3, DivRow6} from './Style';
import  Selecionar  from '../Select/Select';
import { useState } from 'react';

export default function DashboardSelect(){
    
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

    const DadosDasEquipes = [
        {
            nome: 'Equipe',
            categoriaDaEquipe: 'categoria',
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
    ]

    const[equipefiltrada, setequipe] = useState(equipesPorCategoria[categorias[0]]);
    const[equipeAtual, setequipeAtual] = useState(/*equipesPorCategoria[categorias[0]][0]*/);

    const[etapa, setetapas] = useState(etapasSeguidor);
    const[etapaAtual, setetapaAtual] = useState(/*etapasSeguidor[0]*/);

    const[bateria, setbateria] = useState(BateriaAvancada); 
    const[bateriaAtual, setbateriaAtual] = useState();

    const handleCategoryChange = (value) => {
        if(value == "Sumo"){
            setetapas(etapasSumo);
            setetapaAtual();
            //bloqueia a bateria
            setbateriaAtual(null);
            setdesableBatery(true);
        }
        else if(value == "SegidorAvancado"){
            setetapas(etapasSeguidor);
            setetapaAtual();
            setdesableBatery(false);
            setbateria(BateriaAvancada);
            setbateriaAtual(undefined);
        }
        else if(value == "SeguidorMirim"){
            setetapas(etapasSeguidor);
            setetapaAtual();
            setdesableBatery(false);
            setbateria(BateriaMirim);
            setbateriaAtual(undefined);
        }
        setequipe(equipesPorCategoria[value]);
        setequipeAtual();
    };

    const handleTeamChange = (value) => {
        setequipeAtual(value);
    };
    const handlebateryChange = (value) => {
        setbateriaAtual(value);
    };

    const handleStageChange = (value) => {
     if(value === "Final"){
        setbateriaAtual(null);
        setdesableBatery(true);
     }
     else if(value === "Repescagem"){
        setbateriaAtual(null);
        setdesableBatery(true);
     }
     else if(value === "Arrancada"){
        setbateriaAtual(null);
        setdesableBatery(true);
     }
     else if(value === "Confronto"){
        setbateriaAtual(null);
        setdesableBatery(true);
     }
     else{
        setdesableBatery(false);
        setbateriaAtual();
     }
        setetapaAtual(value);
    };

    return(
        <DivRow6>
                <DivRow2>
                    <DivRow3>
                        <div><label htmlFor="">Categoria:</label></div>
                        <Selecionar 
                        defaultValue={categorias[0]}
                        onChange={handleCategoryChange}
                        options={categorias.map((categoria) => ({
                          label: categoria,
                          value: categoria
                        }))}/>
                    </DivRow3>
                    <DivRow3>
                    <div><label htmlFor="">Etapa:</label></div>
                        <Selecionar
                        onChange={handleStageChange}
                        value={etapaAtual}
                        options={etapa.map((etapa)=>({
                            value:etapa, 
                            label:etapa
                        }))}/>
                    </DivRow3> 
                    <DivRow3>
                        <div><label htmlFor="">Equipe:</label></div>
                        <Selecionar 
                        onChange={handleTeamChange}
                        value={equipeAtual}
                        options={equipefiltrada.map((equipe) => ({ 
                            label: equipe,
                            value: equipe 
                        }))}/>
                    </DivRow3>
                    <DivRow3>
                        <div><label htmlFor="">Beteria:</label></div>
                        <Selecionar 
                        onChange={handlebateryChange}
                        value={bateriaAtual}
                        options = {bateria.map((bateria) => ({ 
                            label: bateria,
                            value: bateria
                        }))}
                        disabled={BateryDisable}
                        />
                    </DivRow3>
                </DivRow2>
                <output>tentativas restantes: 2</output>
        </DivRow6>
    )
}