import { Checkbox, ConfigProvider, Drawer, Flex, Input, Select, Typography, message } from "antd";
import NavBar from "../../Components/NavBar";
import { useEffect, useReducer, useRef, useState } from "react";
import Button from "../../Components/Button";
import api from "../../Services/api"
import Connection from "../../Components/SerialConnection/Connection";
import SorteioDrawer from "../../Components/SorteioDrawer";
import RankingDrawer from "../../Components/RankingDrawer";

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

function Cronometro() {
    const [disableRepescagem, setDisableRepescagem] = useState(false);
    const [disableRound, setDisableRound] = useState(false);
    const [disableHeats, setDisableHeats] = useState(false);
    const [disableHeat3, setDisableHeat3] = useState(false);
    const [categoria, setCategoria] = useState([]);
    const [round, setRound] = useState([]);
    const [heat, setHeat] = useState([]);
    const [equipe, setEquipe] = useState([]);
    const [fetchedTeams, setFetchedTeams] = useState([]);
    const [fetchedTentativa, setFetchedTentativa] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);
    const [time, setTime] = useState(0); // Armazena o tempo em milissegundos
    const [isRunning, setIsRunning] = useState(false); // Controla se o cronômetro está rodando
    const [checkpoints, setCheckpoints] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [disableSensors, setDisableSensors] = useState(true);
    const [selectedCheckpoint, setSelectedCheckpoint] = useState([]);
    const [tentativa, setTentativa] = useState("-");

    const startTimeRef = useRef(0); // Remove a tipagem explícita

    const [messageApi, contextHolder] = message.useMessage();

    // Faz o fetch das equipes no back
    const fetchTeams = async () => {
        try{
            const response = await api.get("/equipes");
            setFetchedTeams(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Popula o select das equipes
    useEffect(() => {
        fetchTeams();
    }, []);

    // Logica para disabilitar selects
    useEffect(() => {
        switch (categoria) {
            case 1:
                filterTeams(1);
                setDisableRepescagem(false);
                setDisableHeat3(false);
                setDisableRound(false);
                setDisableHeats(false);
                setEquipe([]);
                setRound(null);
                break;
            case 2:
                filterTeams(2);
                setDisableRepescagem(false);
                setDisableHeat3(true);
                setDisableRound(false);
                setDisableHeats(false);
                setEquipe([]);
                setRound(null);
                break;
        }
    }, [categoria]);
    useEffect(() => {
        switch (round) {
            case 0:
                setDisableHeats(false);
                break;
            case 1:
                setDisableHeats(true);
                setHeat(null);
                break;
            case 2:
                setDisableHeats(true);
                setHeat(null);
                break;
            case 3:
                setDisableHeats(true);
                setHeat(null);
                break;
        }
    }, [round]);
    useEffect(() => {
       setHeat(null);
    }, [equipe]);

    // Função para filtrar times do select
    const filterTeams = (i) => {
        let filteredTeams = fetchedTeams; // Inicializa com todos os times

        if (fetchedTeams.length > 0) {
            if (i) {
                // Filtra os times que possuem a categoria igual a i
                filteredTeams = fetchedTeams.filter((team) => team.categoria === i);
            }
            
            // Mapeia os times filtrados para o formato esperado
            const options = filteredTeams.map((team) => ({
                value: team._id,
                label: team.nome
            }));
            
            setSelectOptions(options);  // Atualiza selectOptions após filtragem
        }
    };
   
    // Fetch da etapa correspondente a equipe
    const fetchRound = async () => {

        const fetchArrancada = async () => {
            try {
                const response = await api.get(`/arrancada/team/${equipe}`);
                setFetchedTentativa(e => response.data);

            } catch (error) {
                console.log(error);
            }
        }
        const fetchClassificatoria = async () => {
            try {
                const response = await api.get(`/classificatorias/team/${equipe}`);
                setFetchedTentativa(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        const fetchRepescagem = async () => {
            try {
                const response = await api.get(`/repescagem/team/${equipe}`);
                setFetchedTentativa(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        const fetchFinal = async () => {
            try {
                const response = await api.get(`/finais/team/${equipe}`);
                setFetchedTentativa(response.data);

            } catch (error) {
                console.log(error);
            }
        }

        // Escolhe qual fetch realizar dependendo do selecionado
        if (equipe.length != 0) {
            switch (round) {
                case 0:
                    await fetchClassificatoria();
                    break;
                case 1:
                    await fetchRepescagem();
                    break;
                case 2:
                    await fetchFinal();
                    break;
                case 3:
                    await fetchArrancada();
                    break;
            }
        }
    }

    // Toda vez que mudar a tentativa, chamar updateTentativa()
    useEffect(() => {
        updateTentativa();
    }, [fetchedTentativa]);

    // Atualiza o texto de tentativa e qual tentativa esta sendo realizada
    const updateTentativa = () => {
        if (fetchedTentativa != null && fetchedTentativa != 0) {
            let tentativa;
            let bateria;
            console.log(fetchedTentativa);
            if (heat === null || heat === 0) {
                bateria = fetchedTentativa.bateria[0];
                if (bateria.tempo_total_1 === 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "1° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "2° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 != 0) {
                    tentativa = "Tentativas realizadas";
                }
            } else if (heat === 1) {
                bateria = fetchedTentativa.bateria[1];
                if (bateria.tempo_total_1 === 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "1° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "2° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 != 0) {
                    tentativa = "Tentativas realizadas";
                }
            } else if (heat === 2) {
                bateria = fetchedTentativa.bateria[2];
                if (bateria.tempo_total_1 === 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "1° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 === 0) {
                    tentativa = "2° tentativa";
                } else if (bateria.tempo_total_1 != 0 && bateria.tempo_total_2 != 0) {
                    tentativa = "Tentativas realizadas";
                }
            }
            setTentativa(tentativa);
        } else {
            setTentativa("1° tentativa");
        }
    }

    // Atualizar o valor da tentativa
    useEffect(() => {
        setFetchedTentativa([]);
        fetchRound();
    }, [categoria, round, heat, equipe]);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          intervalId = setInterval(() => setTime(Date.now() - startTimeRef.current), 1);
        }
        return () => clearInterval(intervalId);
      }, [isRunning]);
      
    // Funções para definir o comportamento do cronomêtro
    const onStart = () => {
        if (isRunning) return;
        startTimeRef.current = Date.now();
        setIsRunning(true);
    }

    const onStop = () => {
        setIsRunning(false);
    }

    const onReset = () => {
        onStop();
        setTime(0);
        setCheckpoints([0,0,0,0,0,0,0,0,0,0]);
    }

    // Função para formatar o tempo como MM:SS:MIL
    const mlsToString = (time) => {
        const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
        const milliseconds = String((time % 1000)).padStart(3, "0");
        return `${minutes}:${seconds}:${milliseconds}`;
    };
    
    // Função inversa da superior
    const stringToMls = (timeString) => {
        const [minutes, seconds, milliseconds] = timeString.split(":").map(Number);
        const totalMilliseconds = (minutes * 60000) + (seconds * 1000) + milliseconds;
        return totalMilliseconds;
    };

    // Função para formatar o horário de cada checkpoint
    const formatCheckpoint = (index) => {
        const checkpoint = checkpoints[index];
        const formatedTime = "--:--:---";

        if (checkpoint === 0) {
            return formatedTime;
        } else {
            return mlsToString(checkpoint);
        }
    }

    // Registra o valor que do tempo a partir do sensor
    const handleSensors = (index) => {
        let updatedCheckpoints = [...checkpoints]; // Cria uma cópia do array
        if (updatedCheckpoints[index - 1] === 0) updatedCheckpoints[index - 1] = time; // Atualiza o valor
        setCheckpoints(updatedCheckpoints); // Define o novo array como o estado
    }

    //Captura tempo do cronometro manualmente
    const saveTime = () => {
        let e = false;
        for(let i = 0; i < 10; i++) {
            if (checkpoints[i] == 0 && e === false) {
                let updatedCheckpoints = [...checkpoints]; // Cria uma cópia do array
                updatedCheckpoints[i] = time; // Atualiza o valor
                setCheckpoints(updatedCheckpoints); // Define o novo array como o estado
                e = true;
                if (i == 6) onStop();
            }
        }
    }
    
    // Seleciona qual checkpoint irá ser alterado manualmente
    const checkpointSelector = (
        <Select 
            style={{width: 130}} 
            placeholder="Checkpoint"
            onChange={e => setSelectedCheckpoint(e)}         
        >
          <Option value={1}>Checkpoint 1</Option>
          <Option value={2}>Checkpoint 2</Option>
          <Option value={3}>Checkpoint 3</Option>
          <Option value={4}>Checkpoint 4</Option>
          <Option value={5}>Checkpoint 5</Option>
          <Option value={6}>Checkpoint 6</Option>
          <Option value={7}>Checkpoint 7</Option>
          <Option value={8}>Checkpoint 8</Option>
          <Option value={9}>Checkpoint 9</Option>
          <Option value={10}>Checkpoint 10</Option>
        </Select>
    );

    // Função para atualizar o valor do checkpoint selecionado manualmente
    const updatedCheckpoint = (e) => {
        let value = e;
        if (e === "0") value = "00:00:000"
        let updatedCheckpoints = [...checkpoints]; // Cria uma cópia do array
        updatedCheckpoints[selectedCheckpoint-1] = stringToMls(value); // Atualiza o valor
        setCheckpoints(updatedCheckpoints); // Define o novo array como o estado
    };

    //Função para achamar alertas
    const displayMessage = (type, content) => {
        messageApi.open({
          type: type,
          content: content,
        });
    };

    // Enviar checkpoints para o back
    const sendData = async () => {
        // Função para remover os valores 0 após o último valor preenchido
        function removeTrailingZeros(array) {
            let lastNonZeroIndex = -1;
            
            // Encontrar o índice do último valor diferente de 0
            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i] !== 0) {
                    lastNonZeroIndex = i;
                    break;
                }
            }
            
            // Retornar o array até o último índice não zero
            return array.slice(0, lastNonZeroIndex + 1);
        }

        function formatBateria(bateria) {
            const e = removeTrailingZeros(checkpoints);
            const l = e.length;
            switch (tentativa) {
                case "1° tentativa":
                    bateria.tempo_total_1 = e[l-1];
                    bateria.tempo_checkpoints_1 = e;
                    break;
                case "2° tentativa":
                    bateria.tempo_total_2 = e[l-1];
                    bateria.tempo_checkpoints_2 = e;
                    break;
                default:
                    return bateria;
            }
            return bateria;
        }

        let bateria;

        if (tentativa === "Tentativas realizadas") {
            displayMessage("warning", "Todas as tentativas já foram realizadas");
            return;
        }

        if (round === 0) {
            bateria = fetchedTentativa;
            bateria.bateria[heat] = formatBateria(bateria.bateria[heat]);
            try {
                const response = await api.post(`/classificatorias/${equipe}`, bateria);
                setFetchedTentativa(response.data);
            } catch (error) {
                console.log(error);
                displayMessage("error", "Erro no envio da tentativa");
            }
        } else if (round === 1) {
            bateria = fetchedTentativa;
            bateria.bateria[0] = formatBateria(bateria.bateria[0]);
            try {
                const response = await api.post(`/repescagem/${equipe}`, bateria);
                setFetchedTentativa(response.data);
            } catch (error) {
                console.log(error);
                displayMessage("error", "Erro no envio da tentativa");
            }
        } else if (round === 2) {
            bateria = fetchedTentativa;
            bateria.bateria[0] = formatBateria(bateria.bateria[0]);
            try {
                const response = await api.post(`/finais/${equipe}`, bateria);
                setFetchedTentativa(response.data);
            } catch (error) {
                console.log(error);
                displayMessage("error", "Erro no envio da tentativa");
            }
        } else if (round === 3) {
            bateria = fetchedTentativa;
            bateria.bateria[0] = formatBateria(bateria.bateria[0]);
            try {
                const response = await api.post(`/arrancada/${equipe}`, bateria);
                setFetchedTentativa(response.data);
            } catch (error) {
                console.log(error);
                displayMessage("error", "Erro no envio da tentativa");
            }
        }
        if (categoria != null && equipe != null && round != null && heat != null) displayMessage("success", "Tentativa enviada");
    };

    // Sensores
    const [serialData, setSerialData] = useState(null); // Store the serial data
    const [connected, setConnected] = useState(false); // Track if the serial port is connected

    useEffect(() => {
        console.log(serialData);
        if (disableSensors || serialData === null) {
            setSerialData(null);
            return;
        }
        const numberValue = parseInt(serialData.replace("S",""));
        switch(numberValue){
            case 0:
                onStart();
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                handleSensors(numberValue);
                break;
            case 7:
                handleSensors(numberValue);
                onStop();
                break;
            default:
                console.log('Este evento não foi definido');
                break;
        }
        setSerialData(null);
    }, [serialData]);

    const connectSerialPort = () => {
    navigator.serial.requestPort()
        .then(port => {
        // Open the serial port
        return port.open({ baudRate: 9600 }).then(() => {
            const decoder = new TextDecoderStream();
            port.readable.pipeTo(decoder.writable);
            const inputStream = decoder.readable.getReader();

            setConnected(true); // Update connection status

            // Read loop
            function readLoop() {
            inputStream.read()
                .then(({ value, done }) => {
                if (done) {
                    console.log("Stream closed");
                    return;
                }
                if (value) {
                    console.log("Received data: ", value);
                    // Update the serialData state with the new value
                    setSerialData(e => value); // Append new data
                    // test(value);

                }
                // Continue reading
                readLoop();
                })
                .catch(error => console.error("Read error:", error));
            }

            readLoop(); // Start reading
        });
        })
        .catch(error => {
            setConnected(false);
            console.error("Error in serial communication:", error);
        });
    };

    // Parte do Sorteio da página
    const [abrirSorteio, setAbrirSorteio] = useState(false);
    const handleSorteio = () => {
        setAbrirSorteio(!abrirSorteio);
    };

    const [abrirRanking, setAbrirRanking] = useState(false);
    const handleRanking = () => {
        setAbrirRanking(!abrirRanking);
    }
        
    return(
        <>
            {contextHolder}
            <NavBar />
            <Flex justify="center">
                <Flex style={{maxWidth: "1440px"}} align="center" gap="large" vertical>
                    <div style={{padding: 20}} />
                    {/* Seletores */}
                    <Flex gap="large">
                        <Select 
                            style={{ width: 200 }}
                            onChange={e => setCategoria(e)}
                            placeholder="Categoria"
                            size="large"
                        >
                            <Select.Option value={1}>Seguidor Avançado</Select.Option>
                            <Select.Option value={2}>Seguidor Mirim</Select.Option>
                        </Select>
                        <Select
                            style={{ width: 200 }}
                            value={equipe}
                            onSelect={e => setEquipe(e)}
                            placeholder="Equipe"
                            options={selectOptions}
                            size="large"
                        >
                        </Select>
                        <Select 
                            style={{ width: 150 }}
                            value={round}
                            onSelect={e => setRound(e)}
                            disabled={disableRound}
                            placeholder="Etapa"
                            size="large"
                        >
                            <Select.Option value={0}>Classificatória</Select.Option>
                            <Select.Option value={1} disabled={disableRepescagem}>Repescagem</Select.Option>
                            <Select.Option value={2}>Final</Select.Option>
                            <Select.Option value={3}>Arrancada</Select.Option>
                        </Select>
                        <Select
                            style={{ width: 120 }}
                            value={heat}
                            disabled={disableHeats}
                            onSelect={e => setHeat(e)}
                            placeholder="Bateria"
                            size="large"
                        >
                            <Select.Option value={0}>Bateria 1</Select.Option>
                            <Select.Option value={1}>Bateria 2</Select.Option>
                            <Select.Option disabled={disableHeat3} value={2}>Bateria 3</Select.Option>
                        </Select>
                        <Title level={3} style={{ color: '#EDA500', marginBottom: 0, width: 260 }}>{tentativa}</Title>
                    </Flex>
                    <div style={{padding: 10}} />
                    {/* Cronometro */}
                    <Flex style={{width: "100%"}} gap="50px" vertical>
                        {/* Cronometro e controles */}
                        <Flex justify="space-between" align="center">
                            {/* Coluna 1 */}
                            <Flex vertical>
                                <Flex gap="middle">
                                    <Title>Cronômetro:</Title>
                                    <Title style={{width: 200,  marginTop: 0 }}>{mlsToString(time)}</Title>
                                </Flex>
                                <Flex style={{paddingBottom: "10px"}} gap="middle">
                                    <Button type="Play" text="Play" onClick={onStart} />
                                    <Button type="Pause" text="Pause" onClick={onStop} />
                                    <Button type="Restart" text="Reset" onClick={onReset} />
                                </Flex>
                            </Flex>
                            {/* Coluna 2 */}
                            <Flex style={{height: "60%"}} justify="space-around" vertical>
                                <Button onClick={connectSerialPort} type={connected ? "" : "Connect"} text={connected ? "Conectado" : "Conectar"} />
                                <Checkbox
                                    onChange={e => setDisableSensors(!e.target.checked)}
                                >Ativar Sensores</Checkbox>
                            </Flex>
                        </Flex>
                        {/* Checkpoints */}
                        <ConfigProvider
                            theme={{
                                components: {
                                    Typography: {
                                        titleMarginBottom: 0,
                                        titleMarginTop: 0.
                                    }
                                }
                            }}
                        >
                            <Flex justify="space-around" >
                                <Flex gap="small">
                                    <Flex vertical>
                                        <Title level={2}>Checkpoint</Title>
                                        <Title level={2}>Checkpoint</Title>
                                        <Title level={2}>Checkpoint</Title>
                                        <Title level={2}>Checkpoint</Title>
                                    </Flex>
                                    <Flex align="center" vertical>
                                        <Title level={2}>1</Title>
                                        <Title level={2}>2</Title>
                                        <Title level={2}>3</Title>
                                        <Title level={2}>4</Title>
                                    </Flex>
                                    <Flex vertical>
                                        <Title level={2}>:</Title>
                                        <Title level={2}>:</Title>
                                        <Title level={2}>:</Title>
                                        <Title level={2}>:</Title>
                                    </Flex>
                                    <Flex style={{width: 160}} align="center" vertical>
                                        <Title level={2}>{formatCheckpoint(0)}</Title>
                                        <Title level={2}>{formatCheckpoint(1)}</Title>
                                        <Title level={2}>{formatCheckpoint(2)}</Title>
                                        <Title level={2}>{formatCheckpoint(3)}</Title>
                                    </Flex>
                                </Flex>
                                
                                <Flex gap="small">
                                    <Flex align="center" vertical>
                                        <Title level={2}>Checkpoint</Title>
                                        <Title level={2}>Checkpoint</Title>
                                        <Title level={2}>Chegada</Title>
                                    </Flex>
                                    <Flex align="center" vertical>
                                        <Title level={2}>5</Title>
                                        <Title level={2}>6</Title>
                                        <Title level={2}>:</Title>
                                    </Flex>
                                    <Flex vertical>
                                        <Title level={2}>:</Title>
                                        <Title level={2}>:</Title>
                                        <Title level={2}></Title>
                                    </Flex>
                                    <Flex style={{width: 160}} align="center" vertical>
                                        <Title level={2}>{formatCheckpoint(4)}</Title>
                                        <Title level={2}>{formatCheckpoint(5)}</Title>
                                        <Title level={2}>{formatCheckpoint(6)}</Title>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </ConfigProvider>
                        {/* Editar/SAlvar checkpoints */}
                        <Flex gap="large" justify="space-between">
                            <Flex gap="large">
                                <Search
                                    addonBefore={checkpointSelector}
                                    placeholder="Novo valor"
                                    size="large"
                                    enterButton="Atualizar"
                                    onSearch={e => updatedCheckpoint(e)}
                                    style={{width: 450}}
                                />
                                <Button type="Salvar" text="Salvar" onClick={sendData} />
                            </Flex>
                            <Button type="Add" text="Adicionar tempo" onClick={saveTime} />
                        </Flex>
                    </Flex>
                <Flex style={{width: "100%"}} justify="right" gap={"middle"}>
                    <Button text={"Sorteio"} onClick={handleSorteio}/>
                    <Button text={"Ranking"} onClick={handleRanking}/>
                </Flex>
                </Flex>
            </Flex>
            <Drawer
                title="Sorteio"
                placement={"right"}
                onClose={handleSorteio}
                open={abrirSorteio}
                size="large"
            >
                <SorteioDrawer />
            </Drawer>
            <Drawer
                title="Ranking"
                placement={"right"}
                onClose={handleRanking}
                open={abrirRanking}
                size="large"
            >
                <RankingDrawer />
            </Drawer>

        </>
    );
}

export default Cronometro;