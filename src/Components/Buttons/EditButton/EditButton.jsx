import { Div, Button, Img} from './Style';
import Edit from '../../../assets/icons/Edit.svg';
export default function EditButton(){
    return(
            <Button> 
                 <Div>
                    <Img src={Edit} alt="Botão de Editar" />
                 </Div>
                 <Div>
                    Editar
                 </Div>
            </Button>
    )
}
