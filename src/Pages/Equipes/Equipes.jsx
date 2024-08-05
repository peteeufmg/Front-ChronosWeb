import { Container, Frame, Title, List, Item, Team, School, Description, Text, Button, Actions  } from './style';
import NavBar from '../../Components/NavBar';
import React from "react";

function Equipes() {
    return (
      <>
        <Container>
          <NavBar/>
          <Frame>
            <Title>
              <Text>Equipes</Text>
              <Button>Adicionar</Button>
            </Title>
            <List>
              <Item>
                <Description>
                  <Team>
                    Equipe 1
                  </Team>
                  <p> - </p>
                  <School>
                    Escola X
                  </School>
                </Description>
                <Actions>
                  
                </Actions>
              </Item>
              <Item>
                <Description>
                  <Team>
                    Equipe 2
                  </Team>
                  <p> - </p>
                  <School>
                    Escola Y
                  </School>
                </Description>
                <Actions>
                  
                </Actions>
              </Item>
              <Item>
                <Description>
                  <Team>
                    Equipe 3
                  </Team>
                  <p> - </p>
                  <School>
                    Escola Z
                  </School>
                </Description>
                <Actions>
                  
                </Actions>
              </Item>
            </List>
          </Frame>
        </Container>
      </>
    )
}

export default Equipes;