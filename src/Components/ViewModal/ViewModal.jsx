import { Flex, Modal, Select, Typography } from "antd";
import ConfigProvider from "antd/es/config-provider"
import { useEffect, useState } from "react";
import api from "../../Services/api";
const { Title, Text } = Typography;

// Permite visualizar as info de uma equipe
const ViewModal = ({open, close, teamData}) => {
    const [selectedRound, setSelectedRound] = useState([0]);
    const [selectedHeat, setSelectedHeat] = useState([0]);
    const [disableRepescagem, setDisableRepescagem] = useState(teamData.categoria === 2 ? true : false);
    const [disableHeats, setDisableHeats] = useState(false);
    const [displayScores, setDisplayScores] = useState(true);
    const [fetchedData, setFetchedData] = useState({
        apresentacao: 0,
        criatividade: 0,
        robustez: 0,
        bateria: [
            {
            tempo_total_1: 0,
            tempo_checkpoints_1: [],
            tempo_total_2: 0,
            tempo_checkpoints_2: [],
            },
            {
            tempo_total_1: 0,
            tempo_checkpoints_1: [],
            tempo_total_2: 0,
            tempo_checkpoints_2: [],
            },
            {
            tempo_total_1: 0,
            tempo_checkpoints_1: [],
            tempo_total_2: 0,
            tempo_checkpoints_2: [],
            }
        ]
    });
    const [data, setData] = useState({
        score: [0,0,0],
        tempo_total_1: 0,
        checkpoints_1: 0,
        tempo_total_2: 0,
        checkpoints_2: 0,
    });

    // Função para converter milisegundos no tempo
    function formatTime(milliseconds) {
        // Calcula os minutos
        const minutes = Math.floor(milliseconds / 60000);
        
        // Calcula os segundos
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        
        // Calcula os milissegundos restantes
        const millis = milliseconds % 1000;
      
        // Formata os minutos, segundos e milissegundos com dois dígitos
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        const formattedMillis = String(millis).padStart(3, '0');
      
        return `${formattedMinutes}:${formattedSeconds}:${formattedMillis}`;
      }

    // Select behaviour
    const checkCategory = () => {
        setDisableRepescagem(teamData.categoria === 2 ? true : false);
    };

    useEffect(() => {
        checkCategory();
    }, [teamData]);

    useEffect(() => {
        switch (selectedRound) {
            case 0:
                setDisableHeats(false);
                setDisplayScores(true);
                break;
            case 1:
                setDisableHeats(true);
                setDisplayScores(false);
                break;
            case 2:
                setDisableHeats(true);
                setDisplayScores(false);
                break;
        }

    }, [selectedHeat, selectedRound]);

    // Fetch backend data from team
    const id = teamData._id;

    async function fetchData(round) {
        try {
            let response;
            switch (round) {
                case 0:
                    response = await api.get("/classificatorias/team/"+id);
                    response = response.data;
                    setFetchedData(response);
                    console.log(fetchedData);
                    setData({
                        score: [response.apresentacao, response.criatividade, response.robustez],
                        tempo_total_1: formatTime(response.bateria[selectedHeat].tempo_total_1),
                        checkpoints_1: response.bateria[selectedHeat].tempo_checkpoints_1.map(formatTime),
                        tempo_total_2: formatTime(response.bateria[selectedHeat].tempo_total_2),
                        checkpoints_2: response.bateria[selectedHeat].tempo_checkpoints_2.map(formatTime),
                    });
                    break;
                case 1:
                    response = api.get("/repescagem/team/"+id);
                    setData({
                        score: [response.apresentacao, response.criatividade, response.robustez],
                        tempo_total_1: formatTime(response.bateria[selectedHeat].tempo_total_1),
                        checkpoints_1: response.bateria[selectedHeat].tempo_checkpoints_1.map(formatTime),
                        tempo_total_2: formatTime(response.bateria[selectedHeat].tempo_total_2),
                        checkpoints_2: response.bateria[selectedHeat].tempo_checkpoints_2.map(formatTime),
                    });
                    break;
                case 2:
                    response = api.get("/finais/team/"+id);
                    setData({
                        score: [response.apresentacao, response.criatividade, response.robustez],
                        tempo_total_1: formatTime(response.bateria[selectedHeat].tempo_total_1),
                        checkpoints_1: response.bateria[selectedHeat].tempo_checkpoints_1.map(formatTime),
                        tempo_total_2: formatTime(response.bateria[selectedHeat].tempo_total_2),
                        checkpoints_2: response.bateria[selectedHeat].tempo_checkpoints_2.map(formatTime),
                    });
                    break;
            }
        } catch (e) {
            return e.error;
        }
    };

    useEffect( () => {
        setData({
            score: [fetchedData.apresentacao, fetchedData.criatividade, fetchedData.robustez],
            tempo_total_1: formatTime(fetchedData.bateria[selectedHeat].tempo_total_1),
            checkpoints_1: fetchedData.bateria[selectedHeat].tempo_checkpoints_1.map(formatTime),
            tempo_total_2: formatTime(fetchedData.bateria[selectedHeat].tempo_total_2),
            checkpoints_2: fetchedData.bateria[selectedHeat].tempo_checkpoints_2.map(formatTime),
        });
    }, [selectedHeat]);

    const afterOpen = () => {
        fetchData(0);
    };

    const scores = (
        <Flex gap="small">
            <Text>Apresentação: {data.score[0]}</Text>
            <Text>Criatividade: {data.score[1]}</Text>
            <Text>Robustez: {data.score[2]}</Text>
        </Flex>
    );

    //Dinamicamente preencher os checkpoints
    const checkpoints1 = Array.from({ length: 7 }, (_, index) => {
        // Tenta obter o valor do checkpoint do array original
        const checkpoint = data.checkpoints_1[index];
        // Se o valor não existir, retorna a string '--:--:---'
        return checkpoint !== undefined ? checkpoint : '--:--:---';
    });
    const checkpoints2 = Array.from({ length: 7 }, (_, index) => {
        // Tenta obter o valor do checkpoint do array original
        const checkpoint = data.checkpoints_2[index];
        // Se o valor não existir, retorna a string '--:--:---'
        return checkpoint !== undefined ? checkpoint : '--:--:---';
    });

    let teamCategoria = teamCategoriaHandler();

    function teamCategoriaHandler () {
        switch (teamData.categoria) {
            case 1:
                return "Avançada";
            case 2:
                return "Mirim";
            case 3:
                return "Sumô";
        }
    }

    const seguidorContent =
            <>
                <Flex gap="middle">
                    <Select 
                        defaultValue={0}
                        onChange={e => {setSelectedRound(e);fetchData(e);}}
                    >
                        <Select.Option value={0}>Classificatória</Select.Option>
                        <Select.Option value={1} disabled={disableRepescagem}>Repescagem</Select.Option>
                        <Select.Option value={2}>Final</Select.Option>
                    </Select>
                    <Select
                        defaultValue={0}
                        disabled={disableHeats}
                        onChange={e => setSelectedHeat(e)}
                    >
                        <Select.Option value={0}>Bateria 1</Select.Option>
                        <Select.Option value={1}>Bateria 2</Select.Option>
                        <Select.Option value={2}>Bateria 3</Select.Option>
                    </Select>
                </Flex>
                {/* Display tries */}
                <Flex vertical={true} gap="small">
                    {displayScores && scores}
                    <Flex gap="large">
                        <Flex vertical={true} gap="small" align="center">
                            <Title level={5}>Tentativa 1</Title>
                            <Flex vertical={true} gap="small">
                                <Text strong>Tempo total: {data.tempo_total_1}</Text>
                                <Flex wrap gap="small">
                                    {checkpoints1.map((checkpoint, index) => (<Text key={index}>Checkpoint {index + 1}: {checkpoint}</Text>))}
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex vertical={true} gap="small" align="center">
                            <Title level={5}>Tentativa 2</Title>
                            <Flex vertical={true} gap="small">
                                <Text strong>Tempo total: {data.tempo_total_2}</Text>
                                <Flex wrap gap="small">
                                    {checkpoints2.map((checkpoint, index) => (<Text key={index}>Checkpoint {index + 1}: {checkpoint}</Text>))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </>;

    const sumoContent = 
            <>
                {/* Display tries */}
                <Flex vertical={true} gap="small">
                    <Flex>
                        <Flex vertical={true} gap="small" align="center">
                            <Title level={5}>Tentativa 1</Title>
                            <Flex vertical={true} gap="small">
                                <Text strong>Tempo total: {data.tempo_total_2}</Text>
                                <Flex wrap gap="small">
                                    {checkpoints2.map((checkpoint, index) => (<Text key={index}>Checkpoint {index + 1}: {checkpoint}</Text>))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </>;

    return (
        <ConfigProvider>
            <Modal
                afterOpenChange={afterOpen}
                title={"Visualizando: " + teamData.nome}
                open={open}
                onCancel={close}
                footer={null}
                destroyOnClose
            >
                <Flex
                    vertical={true}
                    align="flex-start"
                    justify="flex-start"
                    gap="middle"
                >
                    <Flex gap="middle">
                        <Text>Capitão: <Text type="secondary">{teamData.capitao}</Text></Text>
                        <Text>Categoria: <Text type="secondary">{teamCategoria}</Text></Text>
                    </Flex>
                    {/* Define round and heat Selects */}
                    {teamData.categoria == 3 ? sumoContent : seguidorContent}
                </Flex>
            </Modal>
        </ConfigProvider>
    );
}

export default ViewModal   