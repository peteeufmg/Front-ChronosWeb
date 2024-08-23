import { Select } from 'antd'

export default function Selecionar({options, onSelect, onChange, value, defaultValue, disabled}) {
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
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
        />
        </>
    )
}