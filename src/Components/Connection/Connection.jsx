import {} from './Style'
import Button from '../Button/Button'
import { useTimer } from '../TimerProvider/TimerProvider';
import { useEffect } from 'react';
export default function Connection(){

    const { Iniciar, Pausar, Reiniciar, returnMinute, returnSecond, returnMillisecond, minuteRef, secondRef, millisecondRef,disabledRef, refIndex} = useTimer();
    // filtro de seleção para portas USB
    const filters = [
    { usbVendorId: 0x2341, usbProductId: 0x0043 },
    { usbVendorId: 0x2341, usbProductId: 0x0001 },  
    ];

    //Retorna uma lista de portas conectadas atual ou anteriormente;
    const ports =  navigator.serial.getPorts();

    async function connect(){
        //abre o prompt para seleção de uma porta serial
      const port = await navigator.serial.requestPort();
    
      // Abrir a porta com uma configuração padrão
      await port.open({ baudRate: 9600 });
      

      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
    
      // Listen to data coming from the serial device.
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // Allow the serial port to be closed later.
          reader.releaseLock();
          break;
        }
        // value is a string.
       
        const NumberValue = parseInt(value.replace("S",""));
        console.log(NumberValue);
        if(disabledRef.current === false){ // Executa o chechpoint apenas se o timer estiver liberado
          switch(NumberValue){
            case 0:
              checkpoint(NumberValue);
              Iniciar();
              console.log("check0");
              break;
            case 1:
              checkpoint(NumberValue);
              break;
            case 2:
              checkpoint(NumberValue);
              break;
            case 3:
              checkpoint(NumberValue);
              break;
            case 4:
              checkpoint(NumberValue);
              break;
            case 5:
              checkpoint(NumberValue);
              break;
            case 6:
              checkpoint(NumberValue);
              break;
            case 7:
              checkpoint(NumberValue);
              break;
            case 8:
              checkpoint(NumberValue);
              break;
            case 9:
               checkpoint(NumberValue);
               Pausar();
              break;
            default:
              console.log('Este evento não foi definido');
              break;
          }
        }
        else{} 
      }
      // Fechar a porta após a obtenção das informações
      await port.close();
    };

   async function checkpoint(valorAtual){
        const UnrepetedNumber = noRepete(valorAtual);
        if(UnrepetedNumber != null){
          check(UnrepetedNumber);
        }
        else{
          console.log("Unrepeted");
          return false;
        }
    }
    

    const noRepete = (valorAtual) =>{
      if(refIndex.current.includes(valorAtual)){
        console.log('já existe');
        return null;
      }
      else{
        if(refIndex.current.length !== valorAtual){
          console.log('não está em ordem');
          return null;
        }
        else{
          refIndex.current.push(valorAtual);
          console.log('adicionado');
          return valorAtual;
        }
        
      } 
    }
    

    const check = (e) =>{
      const CountId = parseInt(e);
      if(CountId !== 9){
          document.getElementById(CountId+1).disabled = false;
      };
     
      document.getElementById(`C${CountId}`).textContent = `${returnMinute(minuteRef.current)}:${returnSecond(secondRef.current)}:${returnMillisecond(millisecondRef.current)}`;   
      document.getElementById(`${CountId}`).checked = true;   
      document.getElementById(`${CountId}`).disabled = true;  
      console.log(document.getElementById("Restart"))
      if (CountId!=0){
        const strCheckpoints = localStorage.getItem('checkpoints');
        const checkpoints = strCheckpoints ? JSON.parse(strCheckpoints) : [];
        checkpoints.push(document.getElementById(`C${CountId}`).textContent)
        localStorage.setItem('checkpoints', JSON.stringify(checkpoints));
      }
      
  }
    return (
        <>
          <Button onClick={connect} type="Connect" text="Conectar Sensores"/>
        </>
    )
}