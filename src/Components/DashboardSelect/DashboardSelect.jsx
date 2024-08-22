import {DivRow2, DivRow3, DivRow6} from './Style';
import  Selecionar  from '../Select/Select';
import { useState } from 'react';

export default function DashboardSelect(){
    
    const categorias = ["SegidorAvancado", "SeguidorMirim", "Sumo"];

    const equipesPorCategoria = {
        SegidorAvancado: ['EquipeAvançado'],
        SeguidorMirim: ['EquipeMirim'],
        Sumo: ['EquipeSumô']
    }

    const[equipefiltrada, setfiltro] = useState(equipesPorCategoria[categorias[0]]);
    const[equipe, setequipe] = useState(equipesPorCategoria[categorias[0]][0]);
    
    const handleCategoryChange = (value) => {
        console.log(value);
        setfiltro(equipesPorCategoria[value]);
        setequipe(equipesPorCategoria[value][0])
      };

      const handleTeamChange = (value) => {
        setequipe(value);
      };

    return(
        <DivRow6>
                <DivRow2>
                    <DivRow3>
                        <div><label htmlFor="">Categoria:</label></div>
                        <Selecionar 
                        defaultValue={categorias[0]}
                        onChange={handleCategoryChange}
                        options={categorias.map((categoria) => ({
                          label: categoria,
                          value: categoria
                        }))}/>
                    </DivRow3>
                    <DivRow3>
                        <div><label htmlFor="">Equipe:</label></div>
                        <Selecionar 
                        onChange={handleTeamChange}
                        value={equipe}
                        options={equipefiltrada.map((equipe) => ({ 
                            label: equipe,
                            value: equipe 
                        }))}/>
                    </DivRow3> 
                    <DivRow3>
                        <div><label htmlFor="">Etapa:</label></div>
                        <Selecionar 
                        options={[]}/>

                    </DivRow3>
                    <DivRow3>
                        <div><label htmlFor="">Beteria:</label></div>
                        <Selecionar 
                        options = {[]} 
                        />
                    </DivRow3>
                </DivRow2>
                <output>tentativas restantes: 2</output>
        </DivRow6>
    )
}