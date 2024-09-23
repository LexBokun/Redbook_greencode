import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef, useMemo, useEffect } from 'react'
import './style/App.css'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import MyNavbar from './components/UI/navbar_Main/MyNavbar'
import { AuthContext } from './context'
function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
