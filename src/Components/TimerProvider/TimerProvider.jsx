import React, { createContext, useContext, useState, useRef } from 'react';

const TimerContext = createContext();

export function TimerProvider({ children }) {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [millisecond, setMillisec] = useState(0);
    const [disabled, setdisabled] = useState(true);
    const stopWatchInterval = useRef(null);

    const returnMinute = (input) => (input >= 10 ? input : `0${input}`);
    const returnSecond = (input) => (input >= 10 ? input : `0${input}`);
    const returnMillisecond = (input) => {
        if (input < 10){
            return `00${input}`;
        }
        else if(input >= 10 && input <=100){
            return `0${input}`;
        }
        else{
            return input;
        }
    }

    const Iniciar = () =>{
        if(document.getElementById('activTimer').checked){
            if(document.getElementById('C0').textContent === "--:--:---")
          document.getElementById('C0').textContent = `${returnMinute(minute)}:${returnSecond(second)}:${returnMillisecond(millisecond)}`;
          document.getElementById('0').checked = true;
          Pausar();
          timer();
        }
          
    }

    const Pausar = () => {
        if (stopWatchInterval.current) {
            clearInterval(stopWatchInterval.current);
        }
    }

    const Reiniciar = () => {
        Pausar();
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMillisec(0);
    }

    const timer = (startTime = new Date().getTime()) => {
        stopWatchInterval.current = setInterval(() => {
            const currentTime = new Date().getTime();
            const elapsed = currentTime - startTime;
            setMillisec(elapsed);

            if (elapsed >= 1000) {
                startTime = new Date().getTime();
                setMillisec(0);
                setSecond(prev => prev + 1);
            }

            if (second === 60) {
                setSecond(0);
                setMinute(prev => prev + 1);
            }

            if (minute === 60) {
                setMinute(0);
                setHour(prev => prev + 1);
            }
        }, 1);
    }    
    const value = {
        Iniciar,
        Pausar,
        Reiniciar,
        setdisabled,
        returnMinute,
        returnSecond,
        returnMillisecond,
        disabled,
        hour,
        minute,
        second,
        millisecond
        };

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    );
}

export function useTimer() {
    return useContext(TimerContext);
}
