import NavBar from '../../Components/NavBar/NavBar';
import {DivContainer, DivHeader,DivButton, Dashboard,Ol,Li, Nav, Title, Link, Link1, DivRow, DivRow1, DivRow2, DivRow3,DivRow5,DivRow4, DivRow6, DivColumn, Display, Checkpoint, Classification, Tentativa} from './style';
import React from "react";
import { ClassificationTable } from '../../Components/Tables';
import {default as CustomButton} from '../../Components/Button/Button';
import { Button } from 'antd';
function Cronometro() {
    return (
        <>
            <NavBar />
            <DivContainer>
               <DivHeader>
                    <DivRow6>
                        <DivRow2>
                            <DivRow3>
                                <div><label htmlFor="">Categoria:</label></div>
                                <Button type='' htmlType='' size='small'>selecionar</Button>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Equipe:</label></div>
                                <Button type='' htmlType='' size='small'>selecionar</Button>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Etapa:</label></div>
                                <Button type='' htmlType='' size='small'>selecionar</Button>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Beteria:</label></div>
                                <Button type='' htmlType='' size='small'>selecionar</Button>
                            </DivRow3>
                        </DivRow2>
                        <output>tentativas restantes: 2</output>
                    </DivRow6>
               </DivHeader>
               <Dashboard>
                    <DivColumn>
                        <Display>
                            <DivRow>
                                <Tentativa>Tentativa: 2</Tentativa>
                                <CustomButton type="Connect" text="Conectar Sensores"/>
                            </DivRow>
                            <DivRow>
                                <h2>Cronômetro: --:--:--</h2>
                            </DivRow>
                            <DivButton>
                                <CustomButton type="Play" text="Iniciar"/>
                                <CustomButton type="Restart" text="Reiniciar"/>
                            </DivButton>
                        </Display>

                        <Checkpoint>
                            <DivRow>
                                <h2>Checkpoints:</h2>
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
                                <CustomButton type="Edit" text="Editar"/>
                                <CustomButton type="Salvar" text="Salvar"/>
                            </DivButton>
                        </Checkpoint>
                    </DivColumn>
                    <Classification>
                        <h2>Classificação</h2>
                        <ClassificationTable/>
                    </Classification>
               </Dashboard>
            </DivContainer>
        </>
    )
}
export default Cronometro;