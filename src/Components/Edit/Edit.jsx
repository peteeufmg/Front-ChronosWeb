import React, { useState } from 'react';
import  Button  from '../Button/Button'
import { Divider, Select, Space } from 'antd';
import { useTimer } from '../TimerProvider/TimerProvider';

export default function Edit() {
  const {save, setSave} = useTimer();
  const [items, setItems] = useState(['Checkpoint0', 'Checkpoint1', 'Checkpoint2','Checkpoint3','Checkpoint4','Checkpoint5','Checkpoint6','Checkpoint7', 'Checkpoint8', 'Checkpoint9',]);
  let index;

  const input = (value) => (
  index = `C${value.slice(10)}`
  );
  const editar = () => {
    const dados = document.getElementById(index).textContent;
    const span = document.getElementById(index);
    const inp = document.createElement('input');
    inp.id = index;
    inp.value = dados;

     // Estiliza o input para ficar semelhante ao span
    inp.style.border = 'none'; // ou qualquer outro estilo de borda que se encaixe
    inp.style.width = '20%'; // ajuste o tamanho conforme necessário
    inp.style.fontFamily = getComputedStyle(span).fontFamily; // mantém a mesma fonte
    inp.style.fontSize = '50%'; // mesma altura de fonte

    span.replaceWith(inp);
  }
  const salvar = (e) =>{
    setSave(e);
  }
  const salvarAlteracao = (e) =>{
    items.forEach(item =>{
        const dados = document.getElementById(`C${item.slice(10)}`).value;
        const input = document.getElementById(`C${item.slice(10)}`);
        const span = document.createElement('span');
        span.id = `C${item.slice(10)}`;
        span.value = dados;
        span.textContent = dados;
        if(document.getElementById(`C${item.slice(10)}`).tagName === 'INPUT'){
            input.replaceWith(span);
        }
    });
  }
  return (
      <>
          <Select
            style={{ width: 300 }}
            placeholder="Selecionar Checkpoint"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ padding: '0 8px 4px' }}></Space>
              </>
            )}
            options={items.map((item) => ({ label: item, value: item }))}
            onSelect={(value)=>{input(value)}}
          />
          <Button type="Edit" text="Editar" onClick = {()=>{editar()}}/>
          <Button type="update" text="Atualizar" onClick = {()=>{salvarAlteracao()}}/>
          <Button type="Salvar" text="Salvar" onClick = {(e)=>{salvar(e)}}/>
      </>
  );
}
