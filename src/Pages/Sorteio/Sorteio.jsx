import { Container, Frame, Title, Text, ShuffleContainer, SelectContainer} from './style';
import Selecionar from '../../Components/Select';
import NavBar from '../../Components/NavBar';
import {default as CustomButton} from "../../Components/Button";
import { Button, List, Table, Flex, Select } from 'antd';
import React, {useState} from "react";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Sorteio() {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'Team A',
    },
    {
      key: '2',
      name: 'Team B',
    },
    {
      key: '3',
      name: 'Team C',
    },
  ]);
  const columns = [
    {
      title: 'Ordem',
      key: 'order',
      render: (_, __, index) => index + 1,
      width: '25%',
      align: 'center',
    },
    {
      title: 'Equipe',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
  ];
  const randomizeData = () => {
    const shuffledData = shuffleArray([...dataSource]);
    setDataSource(shuffledData);
  };
  const batteries = [
    { value: 'Bateria 1'},
    { value: 'Bateria 2'},
    { value: 'Bateria 3'},
  ];
    return (
      <>
        <Container>
          <NavBar/>
          <Frame>
            <Title>
              <SelectContainer>
              <Text>Categoria:</Text> 
              <Select
                showSearch
                style={{ width: 150 }}
                placeholder="Selecionar"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
              >
                <Option value="option1">Avançada</Option>
                <Option value="option2">Mirim</Option>
              </Select>
                
              </SelectContainer>         
              
              <SelectContainer>
              <Text>Bateria:</Text> 
              <Select
                showSearch
                style={{ width: 150 }}
                placeholder="Selecionar"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
              >
                {batteries.map(battery => (
                  <Option key={battery.value} value={battery.value}>
                      {battery.values}
                </Option>
                ))}
              </Select>
              </SelectContainer>
                
              <CustomButton onClick={randomizeData} text={"Sortear"}/>
            </Title>
            <ShuffleContainer>
              <Table dataSource={dataSource} columns={columns} pagination={false} style={{ width: '80%' }} />
            </ShuffleContainer> 
          </Frame>
        </Container>
      </>
    )
}

export default Sorteio;