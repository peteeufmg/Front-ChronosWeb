import { Div, Button, Img} from './Style';
import Save from '../../../assets/icons/Save.svg';
export default function SaveButton(){
    return(
            <Button> 
                 <Div>
                    <Img src={Save} alt="Botão de Salvar" />
                 </Div>
                 <Div>
                    Salvar
                 </Div>
            </Button>
    )
}
