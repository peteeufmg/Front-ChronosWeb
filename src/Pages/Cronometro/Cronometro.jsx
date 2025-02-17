import React, { useEffect } from "react";
import NavBar from '../../Components/NavBar/NavBar';
import { ClassificationTable } from '../../Components/Tables';
import {DivContainer, DivHeader, Dashboard,DivRow,DivRow4, DivColumn, Display, DivCheckpoint, Classification, Tentativa} from './style';
import Timer from '../../Components/Timer/Timer';
import Connection from "../../Components/Connection";
import Checkpoint from "../../Components/Checkpoint/Checkpoint";
import DashboardSelect from "../../Components/DashboardSelect/DashboardSelect";
import updateClassificatorias from "../../Components/updateClassificatorias/updateClassificatorias";
import { useTimer } from "../../Components/TimerProvider/TimerProvider";

function Cronometro() {
    const {tentativasFeitas, etapaAtual} = useTimer();

    useEffect(() => {
        localStorage.setItem('tentativasFeitas', tentativasFeitas);
    }, [tentativasFeitas])

    updateClassificatorias();
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
                                <Tentativa>Tentativa: {tentativasFeitas}</Tentativa>
                                <Connection/>
                            </DivRow>
                            <DivRow>
                                <Timer />
                            </DivRow>
                        </Display>
                        <DivCheckpoint name="containerBase">
                            <DivRow4 name="containerfilho">
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