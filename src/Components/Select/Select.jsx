import { Select } from 'antd'

export default function Selecionar({options, onSelect, onChange, value, onClick, defaultValue, disabled}) {
    return(
        <>
        <Select
            showSearch
            style={{ width: 150 }}
            placeholder="Selecionar"
            optionFilterProp="label"
            options={options}
            onSelect={onSelect}
            onChange={onChange}
            onClick={onClick}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
        />
        </>
    )
}