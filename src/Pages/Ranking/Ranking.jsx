import { ConfigProvider, Flex, Select, Table, Tabs, Typography } from "antd";
import { Container, RankContainer, RanksContainer, RankTitle } from "./style";
import NavBar from "../../Components/NavBar" 
import api from "../../Services/api";
import { useEffect, useState } from "react";

const { Title } = Typography;

export default function Ranking() {
    const [categoria, setCategoria] = useState(1);
    const [round, setRound] = useState(0);
    const [heat, setHeat] = useState(0);
    const [disableRepescagem, setDisableRepescagem] = useState(false);
    const [disableHeats, setDisableHeats] = useState(false);
    const [disableHeat3, setDisableHeat3] = useState(false);
    const [classificatorias, setClassificatorias] = useState([]);
    const [repescagem, setRepescagem] = useState([]);
    const [final, setFinal] = useState([]);
    const [rankedTeams, setRankedTeams] = useState([]);
    const [teams, setTeams] = useState([]);

    const fetchClassificatorias = async (heat) => {
        try {
            const response = await api.get("/classificatorias");

            setClassificatorias(response.data);
            setRankedTeams(ranking);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRepescagem = async () => {
        try {
            const response = await api.get("/classificatorias");

            setClassificatorias(response.data);
            setRankedTeams(ranking);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTeams = async () => {
        try {
            const response = await api.get("/equipes");

            setTeams(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, [])

    // Mapeia para encontrar o melhor desempenho de cada equipe
    const equipesComDesempenho = classificatorias.map(classificatoria => {
        const { id_equipe, bateria } = classificatoria;

        // Encontrar o melhor desempenho entre as baterias
        const melhorDesempenho = bateria.reduce((melhor, b) => {
            // Quantidade de checkpoints e tempos correspondentes
            const checkpoints1 = b.tempo_checkpoints_1.length;
            const checkpoints2 = b.tempo_checkpoints_2.length;
            
            // O maior número de checkpoints e o menor tempo correspondente
            let maiorCheckpointCount, menorTempo;

            if (checkpoints1 > checkpoints2) {
                maiorCheckpointCount = checkpoints1;
                menorTempo = b.tempo_total_1;
            } else if (checkpoints2 > checkpoints1) {
                maiorCheckpointCount = checkpoints2;
                menorTempo = b.tempo_total_2;
            } else {
                // Se os checkpoints forem iguais, usar o menor tempo
                maiorCheckpointCount = checkpoints1; // Ambos são iguais, pode ser checkpoints1 ou checkpoints2
                menorTempo = Math.min(b.tempo_total_1, b.tempo_total_2);
            }

            // Comparar com o melhor desempenho encontrado até agora
            return maiorCheckpointCount > melhor.checkpoints || 
                (maiorCheckpointCount === melhor.checkpoints && menorTempo < melhor.tempo) 
                ? { checkpoints: maiorCheckpointCount, tempo: menorTempo } 
                : melhor;
        }, { checkpoints: 0, tempo: Infinity });

        const teamInfo = teams.find(team => team._id.toString() === id_equipe.toString());

        function formatTime(ms) {
            // Calcula os minutos e segundos
            let minutes = Math.floor(ms / 60000); // 1 minuto = 60000 milissegundos
            let seconds = Math.floor((ms % 60000) / 1000); // 1 segundo = 1000 milissegundos
            let milliseconds = ms % 1000; // Milissegundos restantes
        
            // Formata os minutos e segundos para ter sempre dois dígitos
            let formattedMinutes = minutes.toString().padStart(2, '0');
            let formattedSeconds = seconds.toString().padStart(2, '0');
            let formattedMilliseconds = milliseconds.toString().padStart(3, '0');
        
            return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
        }

        // Retornar o _id, nome da equipe, checkpoints e o menor tempo
        return {
            _id: id_equipe._id,
            nome: teamInfo.nome,
            checkpoints: melhorDesempenho.checkpoints,
            tempo: formatTime(melhorDesempenho.tempo)
        };
    });

    // Ordenar as equipes pelo maior número de checkpoints, depois pelo menor tempo
    const ranking = equipesComDesempenho.sort((a, b) => {
        // Primeiro, comparar pela quantidade de checkpoints
        if (b.checkpoints !== a.checkpoints) {
            return b.checkpoints - a.checkpoints;
        }
        // Se a quantidade de checkpoints for igual, comparar pelo menor tempo
        return a.tempo - b.tempo;
    });

    useEffect(() => {
        switch (categoria) {
            case 1:
                setDisableHeats(false);
                setDisableHeat3(false);
                setDisableRepescagem(false);
                switch (round) {
                    case 0:

                        break;
                    default:
                        setDisableHeats(true);
                }
                break;
            case 2: 
                setDisableHeats(false);
                setDisableHeat3(true);
                setDisableRepescagem(true);
                break;
            case 3:
                setDisableHeats(false);
                setDisableRepescagem(true);
                break;
        }
        fetchClassificatorias();
    }, [categoria, round, heat]);

    const columns = [
        {
            title: "Posição",
            key: 'index',
            render: (text, record, index) => index + 1,
            width: 10
        },
        {
            title: "Equipe",
            dataIndex: "nome",
            key: "2",
            width: 350
        },
        { 
            title: "Checkpoints",
            dataIndex: "checkpoints",
            key: "3",
            width: 200
        },
        { 
            title: "Tempo",
            dataIndex: "tempo",
            key: "4",
            width: 200
        }
    ];
    
    const theme = {
        components: {
            Table: {

            },
        },
    };

    return(
        <ConfigProvider theme={theme}>
            <NavBar />
            <Container>
                <Flex align="center" gap="large" vertical>
                    {/* Select categoria, etapa e bateria */}
                    <Flex gap="large">
                        <Select 
                            defaultValue={1}
                            onChange={e => setCategoria(e)}
                        >
                            <Select.Option value={1}>Seguidor Avançado</Select.Option>
                            <Select.Option value={2}>Seguidor Mirim</Select.Option>
                            <Select.Option value={3}>Sumô</Select.Option>
                        </Select>
                        <Select 
                            defaultValue={0}
                            onChange={e => setRound(e)}
                        >
                            <Select.Option value={0}>Classificatória</Select.Option>
                            <Select.Option value={1} disabled={disableRepescagem}>Repescagem</Select.Option>
                            <Select.Option value={2}>Final</Select.Option>
                        </Select>
                        <Select
                            defaultValue={0}
                            disabled={disableHeats}
                            onChange={e => setHeat(e)}
                        >
                            <Select.Option value={0}>Bateria 1</Select.Option>
                            <Select.Option value={1}>Bateria 2</Select.Option>
                            <Select.Option disabled={disableHeat3} value={2}>Bateria 3</Select.Option>
                        </Select>
                    </Flex>
                    <Flex>
                        <Table
                            columns={columns}
                            dataSource={ranking}
                        />
                    </Flex>
                </Flex>
            </Container>
        </ConfigProvider>
    )
}