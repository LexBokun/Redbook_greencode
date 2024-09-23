import React from 'react'
import CartItem from './CartItem.jsx'
import '../style/App.css'

export default function Cataloglist({ carts }) {
  return (
    <div className="Cataloglist">
      {carts.map((cart) => (
        <CartItem key={cart.id} cart={cart} isPopulationGrowth={cart.isPopulationGrowth}/>
      ))}
    </div>
  )
}
