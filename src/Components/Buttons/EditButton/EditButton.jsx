import { Div, Button} from './Style';
import Edit from '../../../assets/icons/Edit.svg';
export default function EditButton(){
    return(
        <Div>
            <Button> 
                 <div><img src={Edit} alt="Botão de Editar" /></div>
                 Editar
            </Button>
        </Div>
    )
}
