
import { Table, Thead, Th, Td, Div } from './Style';
import { useTimer } from '../../TimerProvider/TimerProvider';
import { useEffect, useState } from 'react';

function ClassificationTable() {
    const { index, listaDeEquipes, } = useTimer();
    const [sortedTeams, setSortedTeams] = useState([]);
    const [categoriaAtual, setCategoriaAtual] = useState("Avançada");
    const [categorias, setCategorias] = useState([
        { label: "Avançada", value: 1 },
        { label: "Mirim", value: 2 },
        { label: "Sumo", value: 3 }
    ]);

    useEffect(() => {
        // Ordena as equipes pela pontuação em ordem decrescente
        const sorted = [...listaDeEquipes].sort((a, b) => b.pontuacao - a.pontuacao);
        setSortedTeams(sorted);
        setCategoriaAtual(categorias.filter((e)=>e.value === index).map((e)=>(e.label)));
    }, [index, listaDeEquipes]);

    useEffect(() => {
        // Ordena as equipes pela pontuação em ordem decrescente
        const sorted = [...listaDeEquipes].sort((a, b) => b.pontuacao - a.pontuacao);
        setSortedTeams(sorted);
    }, [listaDeEquipes]);

    return (
        <Div>
            <h2>Classificação {categoriaAtual}</h2>
            <Table>
                <Thead>
                    <tr>
                        <Th>nº</Th>
                        <Th>Equipe</Th>
                        <Th>Pontuação</Th>
                    </tr>
                </Thead>
                <tbody>
                    {sortedTeams.filter((item)=> item.categoria === index).map((item, index) => (
                        <tr key={item.id}>
                            <Td>{index + 1}</Td>
                            <Td>{item.nome}</Td>
                            <Td>{item.pontuacao}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Div>
    );
}

export default ClassificationTable;
