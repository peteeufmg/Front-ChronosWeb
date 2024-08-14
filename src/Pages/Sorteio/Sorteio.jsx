import { Container, Frame, Info, Title, Text, StyledList, Description, ShuffleContainer, SelectContainer} from './style';
import Selecionar from '../../Components/Select';
import NavBar from '../../Components/NavBar';
import {default as CustomButton} from "../../Components/Button";
import { Button, List, Table, Flex } from 'antd';
import React from "react";

function Sorteio() {
  const dataSource = [
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
  ];
  const columns = [
    {
      title: 'Ordem',
      key: 'order',
      render: (_, __, index) => index + 1,
      width: 20,
      align: 'center',
    },
    {
      title: 'Equipe',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
  ];
    return (
      <>
        <Container>
          <NavBar/>
          <Frame>
            <Title>
              <SelectContainer>
              <Text>Categoria:</Text> 
              <Selecionar/>
              </SelectContainer>         
              
              <SelectContainer>
              <Text>Bateria:</Text> 
              <Selecionar/> 
              </SelectContainer>
                
              <CustomButton text={"Sortear"}/>
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