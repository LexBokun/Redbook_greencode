import React, { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, Switch, Redirect } from 'react-router-dom'

import { AuthContext } from '../context'
import Main from '../pages/Main'
import CartMain from '../pages/CartMain'
import Login from '../pages/Login'
import Moderation from '../pages/Moderation'
import CartModeration from '../pages/CartModeration'
import СatalogMain from '../pages/СatalogMain'
import CatalogModeration from '../pages/CatalogModeration'

export default function AppRouter() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/catalog" element={<СatalogMain />} />
          <Route exact path="/catalog/cart/:id" element={<CartMain />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/moderation" element={<Moderation />} />
          <Route exact path="/moderation/catalog" element={<CatalogModeration />} />
          <Route exact path="/moderation/catalog/cart/:id" element={<CartModeration />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/catalog" element={<СatalogMain />} />
          <Route exact path="/catalog/cart/:id" element={<CartMain />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  )
}
