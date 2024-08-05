import {Div, Button, Img} from './style';
import Connect from '../../../assets/icons/Connect.svg'

export default function ConnectButton(){
    return(
            <Button> 
                <Div> 
                    <Img src={Connect} alt="Cadeado de conexão" /> 
                </Div>
                <Div>
                    Conectar Sensores
                </Div>
                 
            </Button>
    )
}

