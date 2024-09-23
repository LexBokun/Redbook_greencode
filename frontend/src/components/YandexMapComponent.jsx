import React, { useState, useRef } from "react";
import { YMaps, Map, Polygon, Button } from "react-yandex-maps";

const YandexMapComponent = () => {
  const [polygonCoordinates, setPolygonCoordinates] = useState([[]]);
  const [isDrawing, setIsDrawing] = useState(false);
  const mapRef = useRef(null);
  const polygonRef = useRef(null);

  const handleDrawButtonClick = () => {
    if (polygonRef.current && polygonRef.current.editor) {
      if (isDrawing) {
        finishDrawing();
      } else {
        startDrawing();
      }
      setIsDrawing(!isDrawing);
    }
  };

  const startDrawing = () => {
    if (polygonRef.current && polygonRef.current.editor) {
      polygonRef.current.editor.startDrawing();
    }
  };

  const finishDrawing = () => {
    if (polygonRef.current && polygonRef.current.editor) {
      polygonRef.current.editor.stopDrawing();
      const coordinates = polygonRef.current.geometry.getCoordinates();
      setPolygonCoordinates(coordinates);
      console.log("Координаты выделенной зоны:", coordinates);

      // Отправка координат на сервер
      fetch("/find-species", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coords: coordinates }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Найденные species:", data);
          // Здесь можно обработать ответ
        });
    }
  };

  return (
    <div>
      <YMaps>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
          width={600}
          height={400}
          instanceRef={(ref) => (mapRef.current = ref)}
        >
          <Polygon
            instanceRef={(ref) => (polygonRef.current = ref)}
            geometry={polygonCoordinates}
            options={{
              editorDrawingCursor: "crosshair",
              editorMaxPoints: 50,
              fillColor: "#00FF0088",
              strokeColor: "#0000FF",
              strokeWidth: 2,
            }}
          />
          <Button
            data={{ content: isDrawing ? "Завершить рисование" : "Нарисовать зону" }}
            options={{ float: "right" }}
            onClick={handleDrawButtonClick}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMapComponent;
