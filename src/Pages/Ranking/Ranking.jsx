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
    const [rankedTeams, setRankedTeams] = useState([]);

    const fetchClassificatorias = async () => {
        try {
            const response = await api.get("/classificatorias");

            setClassificatorias(response.data);
            setRankedTeams(equipesComMelhorTempo.sort((a, b) => a.melhorTempo - b.melhorTempo));
            console.log(classificatorias);
        } catch (error) {
            console.log(error);
        }
    };

    // Mapeia para encontrar o melhor tempo de cada equipe
    const equipesComMelhorTempo = classificatorias.map(classificatoria => {
        const { id_equipe, bateria } = classificatoria;

        // Encontrar o melhor tempo de todas as baterias
        const melhorTempo = bateria.reduce((menorTempo, b) => {
            // Verifica os tempos totais das baterias
            const tempos = [b.tempo_total_1, b.tempo_total_2];
            const menorTempoBateria = Math.min(...tempos);
            return Math.min(menorTempo, menorTempoBateria);
        }, Infinity);

        console.log(melhorTempo);

        // Retornar o _id, nome da equipe, e o menor tempo
        return {
            _id: id_equipe._id,
            nome: id_equipe.nome,
            melhorTempo
        };
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
            key: "1",
            width: 10
        },
        {
            title: "Equipe",
            dataIndex: "nome",
            key: "2",
            width: 350
        },
        { 
            title: "Tempo",
            dataIndex: "tempo",
            key: "3",
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
                        />
                    </Flex>
                </Flex>
            </Container>
        </ConfigProvider>
    )
}