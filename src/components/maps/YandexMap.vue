<template>
  <div id="map"></div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import markerImage from '/assets/images/decor/marker-map.svg';

let map;

initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  // Инициализация карты
  map = new YMap(document.getElementById('map'), {
    location: {
      center: [100.984317, -66.273472],
      zoom: 2,
    },
  });

  // Добавление слоя карты
  const schemeLayer = new YMapDefaultSchemeLayer();
  map.addChild(schemeLayer);

  // Добавление слоя для функций
  const featuresLayer = new YMapDefaultFeaturesLayer();
  map.addChild(featuresLayer);

  // Создание элемента маркера
  const markerElement = document.createElement('div');
  markerElement.className = 'marker-map';
  markerElement.innerHTML = `<img  class="img-marker" src="${markerImage}" />`;

  // Создание маркера
  const marker = new YMapMarker(
    {
      coordinates: [100.984317, -66.273472],
    },
    markerElement
  );

  // Добавление маркера на карту
  featuresLayer.addChild(marker); // Добавляем маркер на слой функций
}

onBeforeUnmount(() => {
  if (map) {
    map.destroy();
  }
});
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 100%;
}

.marker-map {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: relative;
  &::before {
    content: '66°16\'24.5" ю.ш., 100°59\'03.54" в.д.';
    position: absolute;
    left: -120px;
    top: -30px;
    color: #ff0000;
    white-space: nowrap;
    opacity: 0;
  }
  &::after {
    content: 'Мы здесь';
    position: absolute;
    left: 0;
    bottom: -20px;
    color: #151414;
    white-space: nowrap;
  }
  @include hover-and-pointer {
    transition: box-shadow 1s, transform 1s;
    cursor: pointer;
    &::before {
      transition: opacity 3s linear;
    }
    &:hover {
      box-shadow: $glow-effect2;
      transform: scale(1.5);
    }
    &:hover::after {
      text-shadow: 2px 2px 4px black;
    }
    &:hover::before {
      opacity: 1;
    }
  }
  @include hover-none {
    transition: box-shadow 0.3s, transform 0.3s;
    cursor: pointer;
    &::before {
      transition: opacity 0.3s linear;
    }

    &:active {
      box-shadow: $glow-effect2;
      transform: scale(1.3);
    }
    &:active::after {
      text-shadow: 2px 2px 4px black;
    }
    &:active::before {
      opacity: 1;
    }
  }
}

.img-marker {
  width: 100%;
  height: 100%;
}
</style>
