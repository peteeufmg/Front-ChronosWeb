import React, { createContext, useContext, useState, useRef, useEffect} from 'react';

const TimerContext = createContext();

export function TimerProvider({ children }) {

    const [equipeAtual, setEquipeAtual] = useState();
    const [etapaAtual, setEtapaAtual] = useState();
    const [categoriaAtual, setCategoriaAtual] = useState();
    const [bateriaAtual, setBateriaAtual] = useState();

    const [tentativasFeitas, setTentativasFeitas] = useState(0);

    const [listaDeEquipes, setListaDeEquipes] = useState([]);
    const refListaDeEquipes = useRef();
    useEffect(()=>{
        refListaDeEquipes.current = listaDeEquipes
    }, [listaDeEquipes])

    const [index, setIndex] = useState(1);

    const[classificacoes, setClassificacoes] = useState()

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [millisecond, setMillisec] = useState(0);
    const [disabled, setdisabled] = useState(true);
    const stopWatchInterval = useRef(null);

    const [save, setSave] = useState(null);
    const saveRef = useRef(save);
    useEffect(()=>{
        saveRef.current = save;
    }, [save])

    const minuteRef = useRef(minute);
    const secondRef = useRef(second);
    const millisecondRef = useRef(millisecond);
    const disabledRef = useRef(disabled);

    const refIndex = useRef([]);


    useEffect(() => {
        minuteRef.current = minute;
        secondRef.current = second;
        millisecondRef.current = millisecond;

    }, [minute, second, millisecond, disabled]);

    useEffect(()=>{
        disabledRef.current = disabled;
    }, [disabled])

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
        if(disabledRef.current === false){//case o timer esteja desbloqueado
            localStorage.setItem('checkpoints', '');
            if(document.getElementById('C0').textContent === "--:--:---"){
                document.getElementById('C0').textContent = `${returnMinute(minute)}:${returnSecond(second)}:${returnMillisecond(millisecond)}`;
                document.getElementById('0').checked = true;
                document.getElementById('0').disabled = true;
                document.getElementById('1').disabled = false;
            }
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
        const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        index.forEach((check)=>{
            document.getElementById(`C${check}`).textContent = "--:--:---";
            document.getElementById(check).checked = false;
            document.getElementById(check).disabled = true;
        })
        document.getElementById(0).disabled = false;
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMillisec(0);
        refIndex.current = [];
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

            if (secondRef.current === 60) {
                setSecond(0);
                setMinute(prev => prev + 1);
            }
            if (minuteRef.current === 60) {
                setMinute(0);
                setHour(prev => prev + 1);
            }
        }, 1);
    }    

    const check = (e) => {
        refIndex.current.push(parseInt(e.target.id));
        console.log(refIndex.current);
        document.getElementById(`C${e.target.id}`).textContent = `${returnMinute(minute)}:${returnSecond(second)}:${returnMillisecond(millisecond)}`;
        const CountId = parseInt(e.target.id);
        document.getElementById(CountId).disabled = true;

        if(e.target.id == 0) {
            localStorage.setItem('checkpoints', '');
            document.getElementById(CountId+1).disabled = false;
            Iniciar();
        }
        else if (e.target.id != 9){
            const strCheckpoints = localStorage.getItem('checkpoints');
            const checkpoints = strCheckpoints ? JSON.parse(strCheckpoints) : [];
            checkpoints.push(document.getElementById(`C${e.target.id}`).textContent)
            localStorage.setItem('checkpoints', JSON.stringify(checkpoints));
            document.getElementById(CountId+1).disabled = false;
        }
        else{
            const strCheckpoints = localStorage.getItem('checkpoints');
            const checkpoints = strCheckpoints ? JSON.parse(strCheckpoints) : [];
            checkpoints.push(document.getElementById(`C${e.target.id}`).textContent)
            localStorage.setItem('checkpoints', JSON.stringify(checkpoints));
            Pausar();
        }
    }
    const value = {
        Iniciar, Pausar, Reiniciar, setdisabled, returnMinute, returnSecond, returnMillisecond,
        setListaDeEquipes, setIndex,
        setClassificacoes,
        setEtapaAtual, setEquipeAtual, setCategoriaAtual, setBateriaAtual,
        setSave,
        check, setTentativasFeitas,
        refListaDeEquipes,
        tentativasFeitas,
        etapaAtual, equipeAtual, categoriaAtual, bateriaAtual,
        refIndex,
        save,saveRef,
        minuteRef, secondRef, millisecondRef,
        classificacoes, 
        listaDeEquipes, index,
        disabled,
        disabledRef,
        hour, minute, second, millisecond
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
