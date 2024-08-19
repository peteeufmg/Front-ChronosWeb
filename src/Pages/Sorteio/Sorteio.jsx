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
  const [selectedStep, setSelectedStep] = useState(null);
  const [step, setStep] = useState([]);
  const [batteries, setBatteries] = useState([]);

  useEffect(() => {
    if (selectedValue !== null) {
      if (selectedValue=='Avancada'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:1}});
            setDataSource(response.data); 
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); 
          }
        };
        fetchData();
      }else if (selectedValue=='Mirim'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:2}});
            setDataSource(response.data); 
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); 
          }
        };
        fetchData();
      }
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selectedValue=='Avancada'){
      setStep([{ value:'Classificatória' },
        { value:'Repescagem' },
        { value:'Final' }])
      if (selectedStep=='Classificatória'){
        setBatteries([{value:'Bateria 1' },
          { value:'Bateria 2' },
          { value:'Bateria 3'}
        ])
      }if (selectedStep=='Repescagem'){
        setBatteries([])
      }if (selectedStep=='Final'){
        setBatteries([])
      }
    }else if (selectedValue=='Mirim'){
      setStep([{ value:'Classificatória' },
        { value:'Final' }])
      if (selectedStep=='Classificatória'){
        setBatteries([{value:'Bateria 1' },
          { value:'Bateria 2' }
        ])
      }else if (selectedStep=='Final'){
        setBatteries([])
      }
    }
  }, [selectedStep, selectedValue])

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
              <Text>Etapa:</Text> 
              <Selection
                placeholder="Selecionar"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                onChange={value => setSelectedStep(value)}
              >
                {step.map(step => (
                  <Option key={step.value} value={step.value}>
                      {step.values}
                </Option>
                ))}
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