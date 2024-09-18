import { DivRow2, DivRow3, DivRow6 } from './Style';
import Selecionar from '../Select/Select';
import { useState, useEffect } from 'react';
import { useTimer } from '../TimerProvider/TimerProvider';
export default function DashboardSelect() {

    const { equipeAtual, setEquipeAtual, listaDeEquipes, setListaDeEquipes, setIndex, index} = useTimer();

    const [listaDeEquipesPorCategoria, setListaDeEquipesPorCategoria] = useState([]);

    const [categoriaAtual, setCategoriaAtual] = useState();
    const [etapaAtual, setEtapaAtual] = useState();
    const [etapas, setEtapas] = useState([]);
    const [baterias, setBaterias] = useState([]);
    const [categorias, setCategorias] = useState([
        { label: "Avancado", value: 1 },
        { label: "Mirim", value: 2 },
    ]);
    
    useEffect(() => {
        if(categoriaAtual == 1){ // se for Avancado
            setEtapas([
            { label: "Classificatoria", value: 1 },
            { label: "Repescagem", value: 2 },
            { label: "Final", value: 3 }]);

            if (etapaAtual== 1){ //Classificatoria
              setBaterias([
                { label: "Bateria 1", value: 1 },
                { label: "Bateria 2", value: 2 },
                { label: "Bateria 3", value: 3 }
              ])
            }if (etapaAtual == 2){ // Repescagem
              setBaterias([])
              //setSelectedHeat([]);
            }if (etapaAtual == 3){ // Final
              setBaterias([])
              //setSelectedHeat([]);
            }
        }else if (categoriaAtual == 2){ //Se for Mirim
            setEtapas([
                { label: "Classificatoria", value: 1 },
                { label: "Final", value: 3 }])
            if (etapaAtual == 1){ //Classificatoria
              setBaterias([
                { label: "Bateria 1", value: 1 },
                { label: "Bateria 2", value: 2 },
              ])
            }else if (etapaAtual == 3){ //Final
              setBaterias([]);
              //setSelectedHeat([]);
            }
        }
        //setSentToBack(false);
      }, [etapas, baterias, categorias, categoriaAtual])

    // Fetching data once on component mount
    useEffect(() => {
        const fetchEquipes = async () => {
            try {
                const response = await fetch('http://localhost:8000/equipes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setListaDeEquipes(data); // Update the list of teams
                } else {
                    console.error('Erro ao buscar equipes');
                }
            } catch (error) {
                console.error('Erro ao buscar equipes:', error);
            }
        };
        fetchEquipes();
    }, []); // Run only once when the component is mounted

    // Filter teams based on selected index
    useEffect(() => {
        if (index !== null && listaDeEquipes.length > 0) {
            // Filter and update teams based on the selected index
            const equipesFiltradas = listaDeEquipes
                .filter(equipe => equipe.categoria === index)
                .map(equipe => ({ label: equipe.nome, value: equipe.nome }));
            setListaDeEquipesPorCategoria(equipesFiltradas);
        }
    }, [index, listaDeEquipes]); // Run when `index` or `listaDeEquipes` changes

    return (
        <DivRow6>
            <DivRow2>
                <DivRow3>
                    <div><label htmlFor="">Categoria:</label></div>
                    <Selecionar
                        onSelect={value => {setCategoriaAtual(value); setIndex(value)}}
                        options={categorias}
                    />
                </DivRow3>
                <DivRow3>
                    <div><label htmlFor="">Equipe:</label></div>
                    <Selecionar
                        valorequipe={equipeAtual}
                        onSelect={e => setEquipeAtual(e)}
                        options={listaDeEquipesPorCategoria}
                    />
                </DivRow3>
                <DivRow3>
                    <div><label htmlFor="">Etapa:</label></div>
                    <Selecionar
                    onSelect = {value => setEtapaAtual(value)} 
                        options={etapas}/>
                </DivRow3>
                <DivRow3>
                    <div><label htmlFor="">Bateria:</label></div>
                    <Selecionar 
                        options={baterias}/>
                </DivRow3>
            </DivRow2>
            <output>tentativas restantes: 2</output>
        </DivRow6>
    );
}




