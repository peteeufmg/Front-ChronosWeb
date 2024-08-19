import React, { useRef, useState } from 'react';
import  Button  from '../Button/Button'
import { Divider, Input, Select, Space } from 'antd';

export default function Edit() {
  const [items, setItems] = useState(['Checkpoint0', 'Checkpoint1', 'Checkpoint2','Checkpoint3','Checkpoint4','Checkpoint5','Checkpoint6','Checkpoint7', 'Checkpoint8', 'Checkpoint9',]);
  let index;
  const input = (value) => {
    const dados = document.getElementById(`C${value.slice(10)}`).textContent;
    const span = document.getElementById(`C${value.slice(10)}`);
    const input = document.createElement('input');
    index = `C${value.slice(10)}`
    input.id = `C${value.slice(10)}`;
    input.value = dados;
    span.replaceWith(input);
  };
  const edit = () =>{
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
      id='id_select'
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
    <Button type="Edit" text="Editar" onClick = {()=>{edit()}}/>
</>
  );
}
