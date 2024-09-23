import React, { useState } from 'react'
import '../style/СatalogMain.css'
import { Carousel } from 'react-bootstrap'
import YandexMap from '../components/YandexMap'
import MyButton from '../components/UI/batton/MyButton'

export default function CartCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [carts, setCarts] = useState([
    {
      id: 1,
      title: 'Горностай / Mustela erminea',
      name: 'Горностай',
      class: 'млекопитающие',
      order: 'хищные',
      family: 'куньи',
      genus: 'ласки и хорьки',
      category: 'LT',
      count: 9,
      description: `Описание: Этот зверёк длиной всего 18-26 сантиметров. Маленький размер позволяет ему легко находить себе местообитание даже в городской среде. Летом мех бурый, зимой – чисто белый. Кончик хвоста всегда чёрный.
      Несмотря на свой небольшой размер, горностай – настоящий хищник. По ночам он  охотится на мышевидных  грызунов и землероек, реже ест птиц, лягушек, насекомых и ягоды. При случае может подбирать остатки добычи более крупных хищников.
      В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов
      Горностай на городских природных территориях – это редкий вид, включённый в Красную Книгу г. Москвы. `,
      habitat: `В Москве горностай обитает в речных долинах, на пустырях и лугах, заброшенных садово-огородных участках, где много мышевидных грызунов.`,
      isHibernation: false,
      Coordinates: [
        [55.8, 37.5],
        [55.85, 37.6],
        [55.8, 37.7],
        [55.75, 37.68],
        [55.7, 37.6],
        [55.7, 37.55],
        [55.72, 37.53],
        [55.75, 37.5],
      ],
    },
    {
      id: 2,
      title: 'Зеленый дятел / Picus viridis',
      name: 'Зелёный дятел',
      class: 'птицы',
      order: 'дятлообразные',
      family: 'дятловые',
      genus: 'зеленые дятлы',
      category: 'LC',
      count: 3,
      description: `Описание: Зеленый дятел - это птица длиной около 30-35 сантиметров. Его ярко-зеленая спина и крылья, а также белое лицо и брюхо делают его легко узнаваемым. У него есть характерный красный шлем на голове, который является отличительной чертой самцов.
      Несмотря на свой средний размер, зеленый дятел - это настоящий специалист по добыче пищи. Он использует свой мощный клюв, чтобы выдалбливать насекомых и их личинок из деревьев. Он также ест семена, орехи и фрукты.
      В Москве зеленый дятел обитает в лесопарках, садах и аллеях, где есть старые деревья с дуплами и трещинами, которые он использует для поиска пищи и гнездования.
      Зеленый дятел на городских природных территориях - это редкий вид, включенный в Красную Книгу г. Москвы `,
      habitat: `В Москве зеленый дятел обитает в лесопарках, садах и аллеях, где есть старые деревья, где он может найти насекомых и их личинок, а также семена, орехи и фрукты. Он также можно встретить в парках и скверах с большими деревьями, где он может гнездиться и кормиться.`,
      isHibernation: true,
      Coordinates: [
        [55.8, 37.5],
        [55.85, 37.6],
        [55.8, 37.7],
        [55.75, 37.68],
        [55.7, 37.6],
        [55.7, 37.55],
        [55.72, 37.53],
        [55.75, 37.5],
      ],
    },
    {
      id: 3,
      title: 'Язвенник обыкновенный / Anthyllis vulneraria',
      name: 'Язвенник обыкновенный',
      class: 'растения',
      order: 'бобовоцветные',
      family: 'бобовые',
      genus: 'язвенник',
      category: 'CR',
      count: 320,
      description: `Описание: Язвенник обыкновенный (Anthyllis vulneraria) - это двулетнее или многолетнее травянистое растение семейства Бобовые (Fabaceae). Оно имеет мощную корневую систему с длинными стеблями, достигающими высоты 15-30 см. Листья язвенника простые, длинночерешковые, с овально-ланцетными листочками. Цветки растения жёлтые, собраны в плотное головчатое соцветие.
      Язвенник обыкновенный произрастает на сухих лугах, солнечных склонах, известковых тощих лугах, каменоломнях, обочинах дорог, заброшенных землях, чаще всего на известковой почве.`,
      habitat: `Язвенник обыкновенный на территории России обитает на западе и севере европейской части, обычно в бассейнах рек, на Урале. Он предпочитает расти по сухим песчаным и известковым склонам, на сухих лугах, в светлых лесах, по опушкам и пустырям, вдоль дорог`,
      isHibernation: false,
      Coordinates: [
        [55.8, 37.5],
        [55.85, 37.6],
        [55.8, 37.7],
        [55.75, 37.68],
        [55.7, 37.6],
        [55.7, 37.55],
        [55.72, 37.53],
        [55.75, 37.5],
      ],
    },
  ])

  return (
    <div className="container">
      {/* Заголовок и фильтр */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h1>Каталог</h1>
        <div>
          <label htmlFor="filterSelect" className="me-2">
            Тип:
          </label>
          <select id="filterSelect" className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Флора">Флора</option>
            <option value="Фауна">Фауна</option>
          </select>
        </div>
      </div>

      {/* Поиск */}
      <div className="input-group my-4">
        <input type="text" className="form-control" placeholder="Поиск" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {/* Карточка животного */}
      {carts.map((cart) => (
        <div key={cart.id} className="card">
          <div className="flex">
            <h2>{cart.title}</h2>
            <button className="cart_kol2 but" disabled>Изменить информацию</button>
          </div>
          <div className="row">
            {/* Основная информация */}
            <div className="col-md-8">
              <div className="row">
                {/* Изображение */}
                <div className="col">
                  <Carousel interval={null} fade={false} slide={false} controls={false}>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/1.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/2.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/catalog/${cart.name.replace(
                            / /g,
                            '_',
                          )}/3.png")`,
                        }}></div>
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>

                {/* Основные характеристики */}
                <div className="col">
                  <div className="card-body">
                    <p className="card-text">
                      <strong>Класс: </strong> {cart.class}
                    </p>
                    <p className="card-text">
                      <strong>Отряд: </strong> {cart.order}
                    </p>
                    <p className="card-text">
                      <strong>Семейство: </strong> {cart.family}
                    </p>
                    <p className="card-text">
                      <strong>Род: </strong> {cart.genus}
                    </p>
                    <p className="card-text">
                      <strong>Охранный статус: </strong> {cart.category}
                    </p>
                    <p className="card-text">
                      <div>
                        <span className="cart_kol1">
                          <strong>Количество особей:</strong>
                        </span>
                        <span className="cart_kol2">{cart.count}</span>
                      </div>
                    </p>
                  </div>
                  {cart.isHibernation && (
                    <div className="hibernation">
                      <div>
                        Птица находится в зимовке в период с <b>октября</b> по <b>март</b>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* описание */}
              <div className="row description">
                <p className="card-text">{cart.description}</p>
              </div>
            </div>

            {/* Ареал обитания */}
            <div className="col-md-4 areal">
              <div className="card">
                <div className="card-body">
                  {cart.id === 1 ? (
                    <YandexMap
                      center={[55.75, 37.6]} // Центр карты
                      zoom={10} // Масштаб карты
                      polygonCoords={cart.Coordinates} // Координаты полигона
                      hintContent="Неровная зона" // Подсказка для полигона
                      fillColor="#FF0000" // Цвет заливки полигона
                      strokeColor="#0000FF" // Цвет границ полигона
                      opacity={0.6} // Прозрачность полигона
                      strokeWidth={3} // Толщина линии полигона
                      strokeStyle="shortdash" // Стиль линии полигона
                    />
                  ) : (
                    <div
                      className="card-images"
                      style={{
                        backgroundImage: `url("https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/kart/${cart.id}.png")`,
                      }}></div>
                  )}
                  <h5 className="card-title">Ареал обитания</h5>
                  <p className="card-text">{cart.habitat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
