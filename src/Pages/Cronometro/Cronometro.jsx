import React from "react";
import NavBar from '../../Components/NavBar/NavBar';
import { ClassificationTable } from '../../Components/Tables';
import {DivContainer, DivHeader, Dashboard,DivRow,DivRow4, DivColumn, Display, DivCheckpoint, Classification, Tentativa} from './style';
import Timer from '../../Components/Timer/Timer';
import Connection from "../../Components/Connection";
import Checkpoint from "../../Components/Checkpoint/Checkpoint";
import DashboardSelect from "../../Components/DashboardSelect/DashboardSelect";

function Cronometro() {
    return (
        <>
            <NavBar />
            <DivContainer>
               <DivHeader>
                    <DashboardSelect/>     
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
                        <ClassificationTable/>
                    </Classification>
               </Dashboard>
            </DivContainer>
        </>
    )
}
export default Cronometro;