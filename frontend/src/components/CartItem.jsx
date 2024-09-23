import React, { useState } from 'react'
import '../style/App.css'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Badge } from 'react-bootstrap'

export default function CartItem({ cart, isPopulationGrowth }) {
  const router = useNavigate()

  return (
    // <div className="PostsItem" >
    //   <div className='post__content'>
    //     <strong>{cart.title}</strong>
    //     <p>{cart.body}</p>
    //   </div>
    // </div>
    <Card
      onClick={(e) => e.stopPropagation()}
      className="bg-dark text-white carts cart__image"
      style={{
        backgroundImage: `url(https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.title.replace(
          / /g,
          '_',
        )}.png)`,
        backgroundSize: 'cover',
      }}>
      <div className="cart__cotent">
        <Card.Title className="cart__title">{cart.title}</Card.Title>
        <div className="hr"></div>
        <Card.Text>популяция: {cart.population}</Card.Text>
      </div>
      <Button onClick={() => router('/moderation/catalog/cart/' + cart.id)} variant="light" className="cart__button">
        Подробнее
      </Button>

      {isPopulationGrowth ? (
        <div className="cryk green">
          <svg height="13" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49996 0.0285645L15.7375 9.22142H1.26247L8.49996 0.0285645Z" fill="white" />
            <rect x="5.71436" y="7.82855" width="5.57143" height="10.0286" fill="white" />
          </svg>
        </div>
      ) : (
        <div className="cryk red">
          <svg height="13" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.50004 17.8571L1.26254 8.66426L15.7375 8.66426L8.50004 17.8571Z" fill="white" />
            <rect x="11.2856" y="10.0571" width="5.57143" height="10.0286" transform="rotate(180 11.2856 10.0571)" fill="white" />
          </svg>
        </div>
      )}
    </Card>
  )
}
