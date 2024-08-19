import {} from './Style'
import Button from '../Button/Button'
import { useTimer } from '../TimerProvider/TimerProvider';
export default function Connection(){

    const { Iniciar, Pausar, Reiniciar, hour, minute, second, millisecond, key } = useTimer();

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
        const NumberValue = parseInt(value);
        switch(NumberValue){
          case 0:
            checkpoint(NumberValue);
            Iniciar();
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
             Pausar();
            break;
          default:
            console.log('Este evento não foi definido');
            break;
        }
      }
      // Fechar a porta após a obtenção das informações
      await port.close();
    };

   async function checkpoint(numeroDaPlaca){
        const UnrepetedNumber = noRepete(numeroDaPlaca);
        if(UnrepetedNumber != null){
          document.getElementById(`C${UnrepetedNumber}`).textContent = document.getElementById('completeTime').textContent;
        }
        else{
          return false;
        }
    }
    const array = [];
    const noRepete = (numeroDaPlaca) =>{
      if(array.includes(numeroDaPlaca)){
        console.log('já existe');
        return null;
      }
      else{
        array.push(numeroDaPlaca);
        console.log('adicionado');
        return numeroDaPlaca;
      } 
    }


    return (
        <>
        <Button onClick={connect} type="Connect" text="Conectar Sensores"/>
        </>
    )
}