import { Div, Button, Img} from './Style';
import Seta from '../../../assets/icons/Seta.svg';
export default function RestartButton(){
    return(
            <Button> 
                 <Div>
                    <Img src={Seta} alt="Botão de Reiniciar" />
                </Div>
                 <Div>
                    Reiniciar
                 </Div>
            </Button>
    )
}
