import { Container, Frame, Title, Text, ShuffleContainer, ShuffleTable, SelectContainer, Selection} from './style';
import NavBar from '../../Components/NavBar';
import {default as CustomButton} from "../../Components/Button";
import { Table, Select } from 'antd';
import React from "react";
import { useState, useEffect } from 'react';
import api from '../../Services/api';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Sorteio() {
  const [dataSource, setDataSource] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (selectedValue !== null) {
      if (selectedValue=='Avancada'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:1}});
            setDataSource(response.data); // Atualiza o estado com os dados da resposta
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); // Trate o erro
          }
        };
        fetchData();
      }else if (selectedValue=='Mirim'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:2}});
            setDataSource(response.data); // Atualiza o estado com os dados da resposta
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); // Trate o erro
          }
        };
        fetchData();
      }
    }
  }, [selectedValue]);

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
      dataIndex: 'nome',
      key: 'nome',
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
              <Selection
                placeholder="Selecionar"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                onChange={value => setSelectedValue(value)}
              >
                <Option value="Avancada">Avançada</Option>
                <Option value="Mirim">Mirim</Option>
              </Selection>
                
              </SelectContainer>         
              
              <SelectContainer>
              <Text>Bateria:</Text> 
              <Selection
                placeholder="Selecionar"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
              >
                {batteries.map(battery => (
                  <Option key={battery.value} value={battery.value}>
                      {battery.values}
                </Option>
                ))}
              </Selection>
              </SelectContainer>
                
              <CustomButton onClick={randomizeData} text={"Sortear"}/>
            </Title>
            <ShuffleContainer>
              <ShuffleTable dataSource={dataSource} columns={columns} pagination={false} />
            </ShuffleContainer> 
          </Frame>
        </Container>
      </>
    )
}

export default Sorteio;