import { Div, Button, Img} from './Style';
import Save from '../../../assets/icons/Save.svg';
export default function SaveButton(){
    return(
        <Div>
            <Button> 
                 <div><Img src={Save} alt="Botão de Salvar" /></div>
                 Salvar
            </Button>
        </Div>
    )
}
