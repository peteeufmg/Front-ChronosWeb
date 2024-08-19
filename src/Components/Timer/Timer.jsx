import { Div, DivColumn } from './Style';
import { useState, useRef } from 'react';
import { useTimer } from '../TimerProvider/TimerProvider';
import { default as TimeButton } from '../../Components/Button/Button';

export default function Timer() {
    
    const { Iniciar, Pausar, Reiniciar, minute, second, millisecond, disabled, setdisabled} = useTimer();
    const returnData = (input) => (input >= 10 ? input : `0${input}`);
    
    return (
        <DivColumn>
            <div>
                <label htmlFor="activTimer">Validar</label>
                <input type="checkbox" onClick={() => setdisabled(!document.getElementById('activTimer').checked)} name="activTimer" id="activTimer"/>
            </div>

            <form name="form_main">
                <div>
                    <h1>Cronômetro:
                        <span id='completeTime'>
                            {/*<span id="hour"> {returnData(hour)} </span>:*/}
                            <span id="minute"> {returnData(minute)} </span>:
                            <span id="second"> {returnData(second)} </span>:
                            <span id="millisecond"> {returnData(millisecond)} </span>
                        </span>
                    </h1>
                </div>
            </form>
            <Div>
                <TimeButton disabled ={disabled} onClick={Iniciar} type="Play" text="Iniciar" id="Play"/>
                <TimeButton disabled ={disabled} onClick={Pausar} type="Stop" text="Pausar" id="Stop"/>
                <TimeButton disabled ={disabled} onClick={Reiniciar} type="Restart" text="Reiniciar" id="Restart"/>
            </Div>
        </DivColumn>
    )
}
