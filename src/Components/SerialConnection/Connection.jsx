import Button from '../Button/Button'
import { useState } from 'react';

const Connection = ({onStart, onStop}) => {
    const [isConnected, setIsConnected] = useState(false);

    // filtro de seleção para portas USB
    const filters = [
    { usbVendorId: 0x2341, usbProductId: 0x0043 },
    { usbVendorId: 0x2341, usbProductId: 0x0001 },  
    ];

    //Retorna uma lista de portas conectadas atual ou anteriormente;
    const ports = navigator.serial.getPorts();

    async function connect(){
        //abre o prompt para seleção de uma porta serial
      const port = await navigator.serial.requestPort();
    
      // Abrir a porta com uma configuração padrão
      await port.open({ baudRate: 9600 });
      
      setIsConnected(true);

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

        if (value) {
          console.log("Received data: ", value);
          // Update the serialData state with the new value
          setSerialData(prevData => prevData + value); // Append new data
        }
        
      }
      // Fechar a porta após a obtenção das informações
      await port.close();
    };

    return (
        <>
          <Button onClick={connect} type={isConnected ? "" : "Connect"} text={isConnected ? "Conectado" : "Conectar"}/>
        </>
    )
}

export default Connection;