import React, { useState } from 'react';
import  Button  from '../Button/Button'
import { Divider, Select, Space } from 'antd';


export default function Edit() {

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
    span.replaceWith(inp);
  }
  const salvar = () =>{
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
          <Button type="Salvar" text="Salvar"/>
      </>
  );
}
