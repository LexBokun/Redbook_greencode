import React, { version } from 'react'
import { useContext } from 'react'

import '../style/Moderation.css'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

import MyModal from '../components/UI/MyModal/MyModal'
import { useState } from 'react'
import { Button, Offcanvas, Card, Form } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

import Cataloglist from '../components/Cataloglist'

export default function Moderation() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const rest = useNavigate()

  const [visibleCatalogue, setVisibleCatalogue] = useState(false)
  const [visibleKart, setVisibleKart] = useState(false)
  const [visibleNovosti, setVisibleNovosti] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function exit() {
    setIsAuth(false)
    localStorage.removeItem('auth')
    rest('/login')
  }

  return (
    <>
      <header>
        <div className="navbar">
          <Button variant="primary" onClick={handleShow} className="icon-minu">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M3 45L38 25L3 5" stroke="#769929" strokeWidth="11" />
            </svg>
          </Button>
          <h1>Просмотр информации</h1>
        </div>
        <div className="content_user">
          <p>Иванов Иван Иванович</p>
          <div className="button_exit" onClick={exit}>
            выход
          </div>
        </div>
      </header>

      <main>
        <section className="section1">
          <div onClick={() => setVisibleCatalogue(true)} className="conteiner_catalogue">
            <h3>Последнии изменения</h3>
            <div className="catalogue">
              <Cataloglist
                carts={[
                  { id: 1, title: 'Горностай', isPopulationGrowth: true, population: 9 },
                  { id: 2, title: 'Зелёный дятел', isPopulationGrowth: false, population: 3 },
                  { id: 3, title: 'Язвенник обыкновенный', isPopulationGrowth: true, population: 4 },
                  { id: 4, title: 'Пальчатокоренник балтийский', isPopulationGrowth: true, population: 3 },
                ]}
              />
            </div>
          </div>
          <div className="conteiner_kart" onClick={() => setVisibleKart(true)}>
            <h3>Просмотр онлайн карты</h3>
            <img width={300} src="https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/image.png" alt="" />
          </div>
        </section>

        <section className="novosti">
          <h2>Новости</h2>
          <div className="novosti_content"></div>
          <Card className="bg-dark text-white" style={{ width: '80vw', margin: '20px' }}>
            <Card.Img
              className="novosti_img"
              src="https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/novosti.png"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Тысячи пловцов преодолели Москву-реку: заплыв прошел через территорию Москворецкого парка</Card.Title>
              <Card.Text>01.09.24</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Button variant="success" onClick={() => setVisibleNovosti(true)} className="novosti_button">
            Выложить новости
          </Button>
        </section>
      </main>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
          <Button variant="primary" onClick={handleClose} className="icon-minu">
            <svg viewBox="0 0 50 50" fill="none">
              <path d="M47 5L12 25L47 45" stroke="#769929" strokeWidth="11" />
            </svg>
          </Button>
        </div>
        <ListGroup>
          <ListGroup.Item action onClick={() => rest('/moderation/catalog')}>
            Каталог
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas>

      <MyModal visible={visibleKart} setVisible={setVisibleKart}>
        <img width={500} src="https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/moderation/kart.png" alt="карта" />
      </MyModal>

      <MyModal visible={visibleNovosti} setVisible={setVisibleNovosti}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Control type="text" placeholder="Название поста" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Control type="text" placeholder="Описание поста" />
          </Form.Group>

          <Button className="novosti_button" variant="success" type="submit" onClick={() => setVisibleNovosti(false)}>
            Выложить
          </Button>
        </Form>
      </MyModal>
    </>
  )
}
