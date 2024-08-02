import {DivContainer, DivHeader,DivButton, Dashboard,Ol,Li, Nav,Nav1, Title, Link, Link1, DivRow, DivRow1, DivRow2, DivRow3,DivRow5,DivRow4, DivColumn, Display, Checkpoint, Classification} from './style';
import React from "react";

function Cronometro() {
    return (
        <>
            <DivContainer>
               <DivHeader>
                    <DivRow1>
                        <Title>chronos web</Title>
                        <Nav>
                            <Link1>Cronômetro</Link1>
                            <Link1>Equipes</Link1>
                        </Nav>
                    </DivRow1>
                    <Nav1>
                        <DivRow2>
                            <DivRow3>
                                <label htmlFor="">Categoria:</label>
                                <button>selecionar</button>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Equipe:</label>
                                <button>selecionar</button>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Etapa:</label>
                                <button>selecionar</button>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Beteria:</label>
                                <button>selecionar</button>
                            </DivRow3>
                        </DivRow2>
                        <output>tentativas restantes: 2</output>
                    </Nav1>
               </DivHeader>
            
               <Dashboard>
                    <DivColumn>
                        <Display>
                            <DivRow>
                                <h3>Tentativa</h3>
                                <button>Conectar sensores</button>
                            </DivRow>
                            <DivRow>
                                <h2>Cronômetro: --:--:--</h2>
                            </DivRow>
                            <DivButton>
                                <button>Iniciar</button>
                                <button>Reiniciar</button>
                            </DivButton>
                        </Display>

                        <Checkpoint>
                            <DivRow>
                                <h2>Checkpoint</h2>
                            </DivRow>
                            <DivRow4>
                                <DivRow5>
                                    <Ol>
                                        <Li>Checkpoint 1: --:--:---</Li>
                                        <Li>Checkpoint 2: --:--:---</Li>
                                        <Li>Checkpoint 3: --:--:---</Li>
                                        <Li>Checkpoint 4: --:--:---</Li>
                                        <Li>Checkpoint 5: --:--:---</Li>
                                    </Ol>
                                </DivRow5>
                                <DivRow5>
                                    <Ol>
                                        <Li>Checkpoint 6:  --:--:---</Li>
                                        <Li>Checkpoint 7:  --:--:---</Li>
                                        <Li>Checkpoint 8:  --:--:---</Li>
                                        <Li>Checkpoint 9:  --:--:---</Li>
                                        <Li>Checkpoint 10: --:--:---</Li>
                                    </Ol>
                                </DivRow5>
                            </DivRow4>
                            <DivButton>
                                <button>Editar</button>
                                <button>Salvar</button>
                            </DivButton>
                        </Checkpoint>
                    </DivColumn>
                    <Classification>
                        <h2>Classificação</h2>
                    </Classification>
               </Dashboard>
            </DivContainer>
        </>
    )
}
export default Cronometro;