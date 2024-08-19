import {DivRow, DivRow1,DivRow2,DivButton, Ol, Li, DivC} from './Style';
import {default as CustomButton} from '../../Components/Button/Button';
import { useTimer } from '../TimerProvider/TimerProvider';
import Edit from '../Edit/Edit'


export default function Checkpoint(){

    const { Iniciar, Pausar, Reiniciar, minute, second, millisecond, disabled,  returnMinute, returnSecond, returnMillisecond} = useTimer();

    const check = (e) =>{
        if(e.target.id != 9) {
            document.getElementById(`C${e.target.id}`).textContent = `${returnMinute(minute)}:${returnSecond(second)}:${returnMillisecond(millisecond)}`;
            Iniciar();
        }
        else{
            document.getElementById(`C${e.target.id}`).textContent = `${returnMinute(minute)}:${returnSecond(second)}:${returnMillisecond(millisecond)}`;
            Pausar();
        }
    }

    const Editar = () =>{
        
    }

    return (
        <DivC>
        <DivRow>
            <DivRow1>
                <Ol>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox"  onClick={check} name="" id="0" />
                        <Li>Checkpoint 0:<span id="C0">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="1" />
                        <Li>Checkpoint 1:<span id="C1">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="2" />
                        <Li>Checkpoint 2:<span id="C2">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="3" />
                        <Li>Checkpoint 3:<span id="C3">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="4" />
                        <Li>Checkpoint 4:<span id="C4">--:--:---</span></Li>
                    </DivRow2>
                </Ol>
            </DivRow1>
            <DivRow1>
                <Ol>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="5" />
                        <Li>Checkpoint 5:<span id="C5">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="6" />
                        <Li>Checkpoint 6:<span id="C6">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="7" />
                        <Li>Checkpoint 7:<span id="C7">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="8" />
                        <Li>Checkpoint 8:<span id="C8">--:--:---</span></Li>
                    </DivRow2>
                    <DivRow2>
                        <input disabled = {disabled} type="checkbox" onClick={check} name="" id="9" />
                        <Li>Checkpoint 9:<span id="C9">--:--:---</span></Li>
                    </DivRow2>
                </Ol>
            </DivRow1>
        </DivRow>
        <DivButton>
            <Edit/>
        </DivButton>
        </DivC>
    )
}