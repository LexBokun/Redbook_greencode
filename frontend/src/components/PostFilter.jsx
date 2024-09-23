import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'


export default function PostSorted({filter, setFilter}) {

  
 
  return (
    <>
        <MyInput
          value={filter.query}
          onChange={evt => setFilter({...filter, query: evt.target.value})}
          placeholder='Поиск...'
        />
        <MySelect
          value={filter.sort}
          defaultValue="Сортировка"
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'По названию'}, 
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </> 
  )
}
