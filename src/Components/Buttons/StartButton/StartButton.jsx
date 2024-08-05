import {Div, Button, Img} from './style';
import Play from '../../../assets/icons/Play.svg'

export default function StartButton(){
    return(
        <Div>
            <Button> 
                <div> 
                    <Img src={Play} alt="Cadeado de Iniciar" /> 
                </div>
                 Iniciar
            </Button>
        </Div>
    )
}

