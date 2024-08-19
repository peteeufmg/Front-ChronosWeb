import React, { createContext, useContext, useState, useRef } from 'react';

const TimerContext = createContext();

export function TimerProvider({ children }) {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [millisecond, setMillisec] = useState(0);
    const [disabled, setdisabled] = useState(true);
    const stopWatchInterval = useRef(null);

    const Iniciar = () =>{
        if(document.getElementById('activTimer').checked){
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
