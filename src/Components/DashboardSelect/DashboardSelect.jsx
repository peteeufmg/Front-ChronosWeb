import {DivRow2, DivRow3, DivRow6} from './Style';
import  Selecionar  from '../Select/Select';

export default function DashboardSelect(){
    
    return(
        <DivRow6>
                <DivRow2>
                    <DivRow3>
                        <div><label htmlFor="">Categoria:</label></div>
                        <Selecionar />
                    </DivRow3>
                    <DivRow3>
                    <div><label htmlFor="">Etapa:</label></div>
                        <Selecionar/>
                    </DivRow3> 
                    <DivRow3>
                        <div><label htmlFor="">Equipe:</label></div>
                        <Selecionar/>
                    </DivRow3>
                    <DivRow3>
                        <div><label htmlFor="">Beteria:</label></div>
                        <Selecionar/>
                    </DivRow3>
                </DivRow2>
                <output>tentativas restantes: 2</output>
        </DivRow6>
    )
}