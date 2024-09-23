import React from 'react'
import "./mySelect.module.css"

export default function MySelect({options, defaultValue, value, onChange}) {
  return (
    <select
      value={value}
      onChange={evt => onChange(evt.target.value)}
    >
      <option disabled={true} value="">{defaultValue}</option>
      {options.map((option) => 
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      )}
    </select>
  )
}
