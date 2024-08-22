import { Select } from 'antd'

export default function Selecionar({options, onSelect, onChange, value}) {
    return(
        <>
        <Select
            showSearch
            style={{ width: 150 }}
            placeholder="Selecionar"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={options}
            onSelect={onSelect}
            onChange={onChange}
            value={value}
        />
        </>
    )
}