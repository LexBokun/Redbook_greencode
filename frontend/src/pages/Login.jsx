import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
import Service from '../API/Service'
import { AuthContext } from '../context'
import MyInport from '../components/UI/input/MyInput'
import MyButton from '../components/UI/batton/MyButton'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const fnLogin = async (e) => {
    e.preventDefault()
    setIsAuth(true)
    rest('/moderation')
    localStorage.setItem('auth', 'true')
    // await Service.verify(login, password)
    
    
  }

  return (
    <div className="Login">
      <div className="icon"></div>
      <h1>Авторизация</h1>
      <form className="form" onSubmit={fnLogin}>
        <Form.Group className="mb-3">
          <Form.Control className='input' value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Логин" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Control className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" />
        </Form.Group>
        <Button className="button" variant="success" type="submit">
          Войти
        </Button>
      </form>
    </div>
  )
}
