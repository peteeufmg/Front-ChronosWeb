import React from "react";
import  Selecionar  from '../../Components/Select';
import NavBar from '../../Components/NavBar/NavBar';
import { ClassificationTable } from '../../Components/Tables';
import {DivContainer, DivHeader,DivButton, Dashboard,Ol,Li,DivRow, DivRow2, DivRow3,DivRow5,DivRow4, DivRow6, DivColumn, Display, DivCheckpoint, Classification, Tentativa} from './style';
import Timer from '../../Components/Timer/Timer';
import Connection from "../../Components/Connection";
import Checkpoint from "../../Components/Checkpoint/Checkpoint";

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
                                <Selecionar/>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Equipe:</label></div>
                                <Selecionar/>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Etapa:</label></div>
                                <Selecionar/>
                            </DivRow3>
                            <DivRow3>
                                <div><label htmlFor="">Beteria:</label></div>
                                <Selecionar/>
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
                                <Connection/>
                            </DivRow>
                            <DivRow>
                                <Timer />
                            </DivRow>
                        </Display>
                        
                        <DivCheckpoint>
                            <DivRow>
                                <h2>Checkpoints:</h2>
                            </DivRow>
                            <DivRow4>
                                <Checkpoint/>
                            </DivRow4>
                        </DivCheckpoint>
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