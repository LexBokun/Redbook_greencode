import React from 'react'
import '../style/Main.css'
import { useNavigate, Link } from 'react-router-dom'
import MyNavbar from '../components/UI/navbar_Main/MyNavbar'
import YandexMapComponent from '../components/YandexMapComponent'
import Cataloglist from '../components/Cataloglist'

export default function Main() {
  const resu = useNavigate()
  return (
    <div className="Main">
      <div className="container_navbar">
        <div className="navbar">
          <nav className="nav-links">
            <a className="a" href="#about">
              О парке
            </a>
            <div className="a" onClick={() => resu('/catalog')}>
              Фауна
            </div>
          </nav>
        </div>
        <h1>Замоцкворецкий парк</h1>
      </div>

      <main>
        <div className="razdel_img">
          <svg viewBox="0 0 1969 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50.5 100.5L160.013 77.9518C208.658 67.936 258.878 68.3878 307.334 79.277L387.795 97.3581C440.496 109.201 495.515 105.303 546.02 86.1477V86.1477C602.675 64.66 664.831 62.434 722.878 79.8139L757.817 90.2751C813.154 106.844 871.732 109.458 928.325 97.8861L1072.13 68.4808C1121.95 58.2933 1173.39 59.0846 1222.88 70.7994L1343.57 99.3721C1388.28 109.956 1434.95 108.868 1479.12 96.2137L1568.85 70.5018C1606.55 59.7014 1647.14 70.084 1675.01 97.6579V97.6579"
              stroke="#F9F9F9"
              stroke-opacity="0.6"
              stroke-width="84"
              stroke-linecap="square"
            />
            <path
              d="M83.5 89L150.874 73.0173C205.372 60.089 262.178 60.429 316.517 74.0087L387.101 91.6478C439.994 104.866 495.75 100.557 545.985 79.3695V79.3695C602.313 55.6113 665.362 53.16 723.365 72.4731L753.215 82.4122C811.367 101.775 873.714 104.827 933.479 91.2364L1064.06 61.5437C1119.04 49.0397 1176.24 50.0074 1230.77 64.3644L1342.75 93.8442C1387.82 105.711 1435.34 104.498 1479.75 90.3471L1565.95 62.8796C1604.9 50.4684 1647.51 61.9064 1675.01 92.1546V92.1546"
              stroke="#F9F9F9"
              stroke-opacity="0.6"
              stroke-width="84"
              stroke-linecap="square"
            />
            <path
              d="M84 97.5L273 77L380.388 56.8575C425.171 48.4577 471.163 48.8828 515.782 58.109L601.585 75.8505C653.793 86.6456 707.951 83.0695 758.286 65.5036V65.5036C814.765 45.7934 875.906 43.7463 933.577 59.6345L974.235 70.8355C1025.61 84.9895 1079.54 87.2249 1131.91 77.3713L1286.05 48.3702C1332.12 39.7026 1379.46 40.3773 1425.26 50.3545L1537.36 74.772C1590.39 86.3238 1645.4 85.1326 1697.88 71.2962L1749.39 57.716C1804.01 43.317 1862.1 51.1001 1911 79.3673V79.3673"
              stroke="white"
              stroke-width="84"
              stroke-linecap="square"
            />
            <rect x="300.313" y="64.3304" width="1551.69" height="82.4335" rx="38" fill="white" />
          </svg>
        </div>
        <section id="about" className="about">
          <div className="flex">
            <div className="col-1">
              <h2>Знакомство с парком</h2>
              <p>
                Откройте для себя скрытые сокровища Москворецкого парка природы и истории в Москве, где обитают более 3 000 редких видов животных и
                растений, включая те, что занесены в Красную книгу Москвы, и погрузитесь в уникальную флору и фауну столицы!
              </p>
            </div>
            <div className="col-2">
              <img src="https://raw.githubusercontent.com/LexBokun/Redbook_GO_React/main/frontend/src/assets/main/eed.png" alt="" />
            </div>
          </div>
        </section>

        <section id="catalogue" className="catalogue">
          <div className="catalogue__content">
            <div className="catalogue__title">
              <h2 style={{margin: '30px'}}>Каталог</h2>
              <Cataloglist
                carts={[
                  { id: 1, title: 'Горностай', isPopulationGrowth: true, population: 9 },
                  { id: 2, title: 'Зелёный дятел', isPopulationGrowth: false, population: 3 },
                  { id: 3, title: 'Язвенник обыкновенный', isPopulationGrowth: true, population: 4 },
                  { id: 4, title: 'Пальчатокоренник балтийский', isPopulationGrowth: true, population: 3 },
                ]}
              />
            </div>
            <div className="catalogue__items"></div>
          </div>
        </section>
        {/* <YandexMapComponent /> */}
      </main>
    </div>
  )
}
