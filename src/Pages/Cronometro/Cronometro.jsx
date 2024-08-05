import NavBar from '../../Components/NavBar/NavBar';
import {DivContainer, DivHeader,DivButton, Dashboard,Ol,Li, Nav, Title, Link, Link1, DivRow, DivRow1, DivRow2, DivRow3,DivRow5,DivRow4, DivRow6, DivColumn, Display, Checkpoint, Classification, Tentativa} from './style';
import React from "react";
import { SelectButton, EditButton, RestartButton, StartButton, ConnectButton, SaveButton } from '../../Components/Buttons';

function Cronometro() {
    return (
        <>
            <NavBar />
            <DivContainer>
               <DivHeader>
                    <DivRow6>
                        <DivRow2>
                            <DivRow3>
                                <label htmlFor="">Categoria:</label>
                                <SelectButton>selecionar</SelectButton>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Equipe:</label>
                                <SelectButton>selecionar</SelectButton>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Etapa:</label>
                                <SelectButton>selecionar</SelectButton>
                            </DivRow3>
                            <DivRow3>
                                <label htmlFor="">Beteria:</label>
                                <SelectButton>selecionar</SelectButton>
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
                                <ConnectButton>Conectar sensores</ConnectButton>
                            </DivRow>
                            <DivRow>
                                <h2>Cronômetro: --:--:--</h2>
                            </DivRow>
                            <DivButton>
                                <StartButton>Iniciar</StartButton>
                                <RestartButton>Reiniciar</RestartButton>
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
                                <EditButton>Editar</EditButton>
                                <SaveButton>Salvar</SaveButton>
                            </DivButton>
                        </Checkpoint>
                    </DivColumn>
                    <Classification>
                        <h2>Classificação</h2>
                        <div>
                                    <ol>
                                        <li>Checkpoint 1: --:--:---// --:-</li>
                                        <li>Checkpoint 1: --:--:---// --:-</li>
                                        <li>Checkpoint 1: --:--:---// --:-</li>
                                        <li>Checkpoint 1: --:--:---// --:-</li>
                                        <li>Checkpoint 1: --:--:---// --:-</li>
                                    </ol>
                        </div>
                    </Classification>
               </Dashboard>
            </DivContainer>
        </>
    )
}
export default Cronometro;