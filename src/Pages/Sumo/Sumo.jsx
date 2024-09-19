import { ConfigProvider, Divider, Flex, Input, Select, Space, Typography } from "antd";
import useTimer from "easytimer-react-hook";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import { Container, Frame } from "./style";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

function Sumo() {
    const [timer, isTargetAchieved] = useTimer({precision: "secondTenths", startValues: {secondTenths: 0, seconds: 0}});
    const [fetchedTeams, setFetchedTeams] = useState([]);
    const [round1, setRound1] = useState([0,0,0]);
    const [round2, setRound2] = useState([0,0,0]);
    const [round3, setRound3] = useState([0,0,0]);
    
    const secondTenths = timer.getTimeValues().secondTenths;
    const seconds = timer.getTimeValues().seconds;
    const minutes = timer.getTimeValues().minutes;

    const startTimer = () => timer.start();
    const pauseTimer = () => timer.pause();
    const restartTimer = () => timer.stop();

    const fetchData = async () => {
        try {
          const response = await api.get('/equipes/sumo');
          setFetchedTeams(response.data);
          setTeamsToDisplay(response.data);
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
    };

    useEffect(() => {
        
    }, []);

    const salvarPartida = () => {
        const tempo1 = round1[1]*60000 + round1[2]*1000 + round1[3]*100;
        const tempo2 = round2[1]*60000 + round2[2]*1000 + round2[3]*100;
        const tempo3 = round3[1]*60000 + round3[2]*1000 + round3[3]*100;

        const req = [tempo1, tempo2, tempo3];

        const sendData = async () => {
            try {
              const response = await api.post('/sumo', req);
            } catch (error) {
              console.error("Erro ao buscar os dados:", error);
            }
        };

    };
    
    return(
        <ConfigProvider 
        theme={{
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0
                    },
                }
        }}>
            <Container>
                <NavBar />
                <Frame>
                    <Flex vertical gap="large">
                        {/* Conteúdo cronometro */}
                        <Flex gap="large" justify="center">
                            <Flex gap="middle" align="center">
                                <Title level={2}>Etapa:</Title>
                                <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]}></Select>
                            </Flex>
                            <Title> | </Title>
                            <Flex gap="middle" align="center">
                                <Title level={2}>Equipes:</Title>
                                <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]}></Select>
                                <Title level={2}>VS</Title>
                                <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]}></Select>
                            </Flex>
                        </Flex>
                        {/* Ordem das equipes */}
                        <Flex gap={50} align="center" vertical>
                            {/* Cronometro */}
                            <Flex gap="middle" align="center" vertical>
                                <Title>Cronomêtro: {minutes}:{seconds}:{secondTenths}</Title>
                                <Space>
                                    <Button type="Play" text="Iniciar" onClick={startTimer} />
                                    <Button type="Pause" text="Pause" onClick={pauseTimer} />
                                    <Button type="Stop" text="Parar" onClick={restartTimer} />
                                </Space>
                            </Flex>
                            {/* Inputs ganhador */}
                            <Flex gap="large" align="center">
                                <Flex gap="small" vertical>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}> Round 1:</Title>
                                        <Flex align="center" gap="small">
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round1; i[1] = e; setRound1[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round1; i[2] = e; setRound1[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={1} defaultValue="0" onChange={(e) => {const i = round1; i[3] = e; setRound1[i]}}></Input.OTP>
                                        </Flex>
                                    </Flex>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}>Vencedor:</Title>
                                        <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]} />
                                    </Flex>
                                </Flex>
                                <Flex gap="small" vertical>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}> Round 2:</Title>
                                        <Flex align="center" gap="small">
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round2; i[1] = e; setRound2[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round2; i[2] = e; setRound2[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={1} defaultValue="0" onChange={(e) => {const i = round2; i[3] = e; setRound2[i]}}></Input.OTP>
                                        </Flex>
                                    </Flex>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}>Vencedor:</Title>
                                        <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]} />
                                    </Flex>
                                </Flex>
                                <Flex gap="small" vertical>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}> Round 3:</Title>
                                        <Flex align="center" gap="small">
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round3; i[1] = e; setRound2[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={2} defaultValue="00" onChange={(e) => {const i = round3; i[2] = e; setRound2[i]}}></Input.OTP>
                                            <Title level={2}>:</Title>
                                            <Input.OTP length={1} defaultValue="0" onChange={(e) => {const i = round3; i[3] = e; setRound2[i]}}></Input.OTP>
                                        </Flex>
                                    </Flex>
                                    <Flex align="center" gap="middle">
                                        <Title level={3}>Vencedor:</Title>
                                        <Select defaultValue={"grupos"} options={[{ value: 'grupos', label: 'Fase de grupos' }, { value: 'final', label: 'Final' }]} />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Button type="Salvar" text="Salvar" onClick={salvarPartida} />
                        </Flex>
                    </Flex>
                </Frame>
            </Container>
        </ConfigProvider>
    );
}

export default Sumo;