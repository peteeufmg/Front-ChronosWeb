import { Alert, Button, Flex, Form, Input, Modal, Select, Typography } from "antd";
import ConfigProvider from "antd/es/config-provider";
import { useState } from "react";
import api from "../../Services/api";
const { Title, Text } = Typography;

const AddModal = ({open, close, message}) => {
    const [nome, setNome] = useState([]);
    const [capitao, setCapitao] = useState([]);
    const [categoria, setCategoria] = useState(1);
    
    const handleOk = async () => {
        try {
            // Enviar os dados para o backend usando Axios
            await api.post('/equipes', {
                nome: nome,
                capitao: capitao,
                categoria: categoria
            });
            // Fechar o modal após o envio bem-sucedido
            close();
            message("success", "Equipe adicionada");
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            message("error", "Erro ao enviar dados");
        }
    }

    return(
        <ConfigProvider>
            <Modal
                open={open}
                onCancel={close}
                onOk={handleOk}
                title={"Adicionar Equipe"}
                okText="Salvar"
                cancelText="Cancelar"
                destroyOnClose
            >
                <Flex vertical={true} gap={"middle"}>
                    <Input
                        addonBefore={<Text>Nome: </Text>} 
                        onChange={e => setNome(e.target.value)}
                    />
                    <Input
                        addonBefore={<Text>Capitão (ã): </Text>}
                        onChange={e => setCapitao(e.target.value)}
                    />
                    <Select
                        defaultValue={1}
                        onChange={e => setCategoria(e)}
                    >
                        <Select.Option value={1}>Categoria Avançada</Select.Option>
                        <Select.Option value={2}>Categoria Mirim</Select.Option>
                        <Select.Option value={3}>Sumô</Select.Option>
                    </Select>
                </Flex>
            </Modal>
        </ConfigProvider>
    );
}

export default AddModal;