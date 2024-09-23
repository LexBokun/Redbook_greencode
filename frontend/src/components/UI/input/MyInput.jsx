import React from 'react'
import classes from './myInput.module.css'

export default function MyInput(props) {
  return (
    <input { ...props } className={classes.myInput}/>
  )
}