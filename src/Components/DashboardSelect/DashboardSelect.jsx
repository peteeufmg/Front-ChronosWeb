import { DivRow2, DivRow3, DivRow6 } from './Style';
import Selecionar from '../Select/Select';
import { useState, useEffect } from 'react';
import { useTimer } from '../TimerProvider/TimerProvider';
export default function DashboardSelect() {

    const { equipeAtual, setEquipeAtual, listaDeEquipes, setListaDeEquipes, setIndex, index} = useTimer();
    
    const [listaDeEquipesPorCategoria, setListaDeEquipesPorCategoria] = useState([]);

    const [etapas, setEtapas] = useState([
        { label: "Classificatoria", value: 1 },
        { label: "Repescagem", value: 2 },
        { label: "Final", value: 3 }
    ]);
    const [baterias, setBaterias] = useState([
        { label: "Bateria 1", value: 1 },
        { label: "Bateria 2", value: 2 },
        { label: "Bateria 3", value: 3 }
    ]);
    const [categorias, setCategorias] = useState([
        { label: "Avancado", value: 1 },
        { label: "Mirim", value: 2 },
    ]);

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
                        onSelect={value => setIndex(value)}
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




