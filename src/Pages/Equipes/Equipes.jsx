import { Container, Frame, Info, Title, Text, StyledList, Description} from './style';
import NavBar from '../../Components/NavBar';
import {default as CustomButton} from "../../Components/Button";
import { Button, List, Flex } from 'antd';
import React from "react";

function Equipes() {
  const data = [
    {
      team: 'Equipe 1',
      school: 'Escola X',
    },
    {
      team: 'Equipe 2',
      school: 'Escola Y',
    },
    {
      team: 'Equipe 3',
      school: 'Escola Z',
    },
    {
      team: 'Equipe 4',
      school: 'Escola W',
    },
  ];

  
    return (
      <>
        <Container>
          <NavBar/>
          <Frame>
            <Title>
              <Text>Equipes</Text>  
              <CustomButton type={"Add"} text={"Adicionar"}/>
            </Title>
      
              <StyledList
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item actions={[
                    <Flex wrap gap='large'>
                      <Button type='link' icon={
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.66 22.1141L19.7915 17.2464C19.5717 17.0267 19.2739 16.9046 18.9613 16.9046H18.1654C19.5131 15.1812 20.314 13.0134 20.314 10.6553C20.314 5.04545 15.7678 0.5 10.157 0.5C4.54623 0.5 0 5.04545 0 10.6553C0 16.2651 4.54623 20.8105 10.157 20.8105C12.5156 20.8105 14.6837 20.0098 16.4074 18.6623V19.4581C16.4074 19.7706 16.5295 20.0684 16.7493 20.2881L21.6178 25.1558C22.0768 25.6147 22.8191 25.6147 23.2732 25.1558L24.6551 23.7741C25.1141 23.3152 25.1141 22.573 24.66 22.1141ZM10.157 16.9046C6.70459 16.9046 3.90654 14.112 3.90654 10.6553C3.90654 7.20345 6.69971 4.40587 10.157 4.40587C13.6094 4.40587 16.4074 7.19856 16.4074 10.6553C16.4074 14.1071 13.6143 16.9046 10.157 16.9046Z" fill="#EDA500"/></svg>
                      }>
                      </Button>
                      <Button type='link' icon={             
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.474 4.5069L21.3889 8.4171C21.5538 8.58183 21.5538 8.8506 21.3889 9.01533L11.9097 18.483L7.88194 18.9295C7.34375 18.9902 6.88802 18.5351 6.94878 17.9975L7.39583 13.9746L16.875 4.5069C17.0399 4.34217 17.309 4.34217 17.474 4.5069ZM24.5052 3.51418L22.3872 1.39869C21.7274 0.739764 20.6554 0.739764 19.9913 1.39869L18.4549 2.93329C18.2899 3.09802 18.2899 3.36679 18.4549 3.53152L22.3698 7.44172C22.5347 7.60645 22.8038 7.60645 22.9688 7.44172L24.5052 5.90712C25.1649 5.24386 25.1649 4.17311 24.5052 3.51418ZM16.6667 15.908V20.3211H2.77778V6.449H12.7517C12.8906 6.449 13.0208 6.39264 13.1207 6.29727L14.8568 4.56326C15.1866 4.2338 14.9523 3.67458 14.4878 3.67458H2.08333C0.93316 3.67458 0 4.60661 0 5.75539V21.0147C0 22.1635 0.93316 23.0955 2.08333 23.0955H17.3611C18.5113 23.0955 19.4444 22.1635 19.4444 21.0147V14.174C19.4444 13.7102 18.8845 13.4804 18.5547 13.8055L16.8186 15.5396C16.7231 15.6393 16.6667 15.7693 16.6667 15.908Z" fill="#EDA500"/></svg>
                      }>
                      </Button>
                    </Flex>
                    
                  ]} style = {{  
                    padding: 0,
                    marginTop: 0, 
                    borderBottom: index !== data.length - 1 ? '1px solid #eda500' : 'none'  
                  }} >
                    < Description
                    title={<Info>{item.team} - {item.school} </Info>} 
                    />
                  </List.Item >
                )}
              />
          </Frame>
        </Container>
      </>
    )
}

export default Equipes;