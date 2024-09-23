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
  const [dataView, setDataView] = useState([]);
  const [dataToDraw, setDataToDraw] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRound, setSelectedRound] = useState(null);
  const [selectedHeat, setSelectedHeat] = useState(null);
  const [round, setRound] = useState([]);
  const [heats, setHeats] = useState([]);
  const [sentToBack, setSentToBack] = useState(false);

  useEffect(() => {
    if (selectedCategory !== null) {
      if (selectedCategory=='Avancada'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:1}});
            setDataToDraw(response.data); 
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); 
          }
        };
        fetchData();
      }else if (selectedCategory=='Mirim'){
        const fetchData = async () => {
          try {
            const response = await api.get('/equipes', {params: {categoria:2}});
            setDataToDraw(response.data); 
          } catch (error) {
            console.error("Erro ao buscar os dados:", error); 
          }
        };
        fetchData();
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory=='Avancada'){
      setRound([{ value:'Classificatória' },
        { value:'Repescagem' },
        { value:'Final' }])
      if (selectedRound=='Classificatória'){
        setHeats([{value:'Bateria 1' },
          { value:'Bateria 2' },
          { value:'Bateria 3'}
        ])
      }if (selectedRound=='Repescagem'){
        setHeats([])
        setSelectedHeat([]);
      }if (selectedRound=='Final'){
        setHeats([])
        setSelectedHeat([]);
      }
    }else if (selectedCategory=='Mirim'){
      setRound([{ value:'Classificatória' },
        { value:'Final' }])
      if (selectedRound=='Classificatória'){
        setHeats([{value:'Bateria 1' },
          { value:'Bateria 2' }
        ])
      }else if (selectedRound=='Final'){
        setHeats([]);
        setSelectedHeat([]);
      }
    }
    setSentToBack(false);
  }, [selectedRound, selectedCategory, selectedHeat])

  const columns = [
    {
      title: 'Ordem',
      key: 'order',
      render: (_, __, index) => {
        const pageIndex = dataView.findIndex(page => page.includes(__));
        const previousItemsCount = pageIndex * 10; 
        return previousItemsCount + index + 1;
      },
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

  const paginate = (data, pageSize) => {
    const pages = [];
    for (let i = 0; i < data.length; i += pageSize) {
      pages.push(data.slice(i, i + pageSize));
    }
    return pages;
  };

  const randomizeData = () => {
    const shuffledData = shuffleArray([...dataToDraw]);
    setDataSource(shuffledData);
    setDataView(paginate(shuffledData, 10));
    if (!sentToBack) {
      const equipesIDs = dataSource.map(e => ({id: e._id}));
      const categoria = selectedCategory == "Avancada" ? 1 : 2;
      const etapa = () => { 
        switch (selectedRound) {
          case "Classificatória": return 1;
          case "Repescagem": return 2;
          case "Final": return 3;
        }
      };
      const bateria = () => { 
        switch (selectedHeat) {
          case "Bateria 1": return 1;
          case "Bateria 2": return 2;
          case "Bateria 3": return 3;
        }
      };
      const body = {
        categoria: categoria,
        etapa: etapa(),
        bateria: bateria(),
        ordem: equipesIDs
      };

      //Arrumando essa função, tem q so permitir adicionar um sorteio.\
      const postData = async () => {
        try {
          const request = await api.post("/sorteios", body);
        } catch (error) {
          let message = error;
          switch (error.response.status) {
            case 409: message = "O sorteio requisitado já foi realizado";
            break;
            case 500: message = error.response.data.message;
            break;
          }
          alert(message);
        }
      }

      postData();
      setSentToBack(true);
    }
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
              onChange={value => setSelectedCategory(value)}
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
              onChange={value => setSelectedRound(value)}
            >
              {round.map(round => (
                <Option key={round.value} value={round.value}>
                    {round.values}
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
              onChange={value => setSelectedHeat(value)}
              value={selectedHeat}
            >
              {heats.map(heat => (
                <Option key={heat.value} value={heat.value}>
                    {heat.values}
              </Option>
              ))}
            </Selection>
            </SelectContainer>
              
            <CustomButton onClick={randomizeData} text={"Sortear"}/>
          </Title>
          <ShuffleContainer>
            {dataView.map((pageData, index)=>(
              <ShuffleTable dataSource={pageData} columns={columns} pagination={false} size='small'/>
            ))}   
          </ShuffleContainer> 
        </Frame>
      </Container>
    </>
  )
}

export default Sorteio;