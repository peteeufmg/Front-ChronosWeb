import {Div, Button, Img} from './style';
import Connect from '../../../assets/icons/Connect.svg'

export default function ConnectButton(){
    return(
        <Div>
            <Button> 
                <div> 
                    <Img src={Connect} alt="Cadeado de conexão" /> 
                </div>
                 Conectar Sensores
            </Button>
        </Div>
    )
}

