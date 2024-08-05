import {Div, Button, Img} from './style';
import Play from '../../../assets/icons/Play.svg'

export default function StartButton(){
    return(
            <Button> 
                <Div> 
                    <Img src={Play} alt="Cadeado de Iniciar" /> 
                </Div>
                <Div>
                    Iniciar
                </Div>                 
            </Button>
    )
}

