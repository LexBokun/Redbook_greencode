/* global ymaps */

import React, { useEffect } from 'react';

const YandexMap = ({ center, zoom, polygonCoords, hintContent, fillColor, strokeColor, opacity, strokeWidth, strokeStyle }) => {
  useEffect ( () => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.type = 'text/javascript';
    script.onload = () => window.ymaps.ready(init);
    document.head.appendChild(script);

    const init = () => {
      const myMap = new window.ymaps.Map('map', {
        center: center || [55.75, 37.60],
        zoom: zoom || 10,
      });

      const myPolygon = new window.ymaps.Polygon(
        [polygonCoords],
        { hintContent: hintContent || 'Неровная зона' },
        {
          fillColor: fillColor || '#FF0000',
          strokeColor: strokeColor || '#0000FF',
          opacity: opacity || 0.6,
          strokeWidth: strokeWidth || 3,
          strokeStyle: strokeStyle || 'shortdash',
        }
      );

      myMap.geoObjects.add(myPolygon);
    };

  }, []);

  return <div id="map" style={{ width: '300px', height: '300px' }}></div>;
};

export default YandexMap;
