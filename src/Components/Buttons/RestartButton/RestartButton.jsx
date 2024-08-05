import { Div, Button, Img} from './Style';
import Seta from '../../../assets/icons/Seta.svg';
export default function RestartButton(){
    return(
        <Div>
            <Button> 
                 <div><Img src={Seta} alt="Botão de Reiniciar" /></div>
                 Reiniciar
            </Button>
        </Div>
    )
}
