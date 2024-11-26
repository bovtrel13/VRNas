<template>
  <picture
    class="responsive-picture"
    :style="setObjFit"
  >
    <source
      v-for="format in validFormats"
      :key="format"
      :srcset="getImagePath(nameFolder, imgName, format)"
      :type="`image/${format}`"
    />
    <img
      loading="lazy"
      :src="getImagePath(nameFolder, imgName, defaultFormat)"
      :alt="alt"
      class="responsive-picture__img"
    />
  </picture>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Пропсы
const props = defineProps({
  nameFolder: {
    type: String,
    default: null,
  },
  imgName: {
    type: String,
    required: true,
  },
  imageFormats: {
    type: Array,
    required: false,
  },
  defaultFormat: {
    type: String,
    default: 'jpeg',
  },
  alt: {
    type: String,
    required: false,
  },
  objFit: {
    type: String,
    default: 'cover',
  },
});

const setObjFit = computed(() => {
  return { '--obj-fit': props.objFit };
});


const getImagePath = (nameFolder, imgName, format) => {
  const path = nameFolder
    ? `${import.meta.env.BASE_URL}/assets/images/${nameFolder}/${imgName}.${format}`
    : `${import.meta.env.BASE_URL}/assets/images/${imgName}.${format}`;
  return path; 
};

// Реактивное свойство для хранения доступных форматов
const validFormats = ref([]);

// Функция для проверки существования изображения
const checkImageExists = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(true); // Изображение успешно загружено
    img.onerror = () => resolve(false); // Ошибка при загрузке
  });
};

// Асинхронная функция для проверки доступных форматов
const checkAvailableFormats = async () => {
  const formatsToCheck = props.imageFormats || []; // Получаем массив форматов из пропсов

  const checks = await Promise.all(
    formatsToCheck.map(async (format) => {
      const path = getImagePath(props.nameFolder, props.imgName, format);
      const exists = await checkImageExists(path);
      return exists ? format : null; // Возвращаем формат только если изображение существует
    })
  );

  validFormats.value = checks.filter((format) => format !== null); // Фильтруем недоступные форматы
};

// Запуск проверки доступных форматов при монтировании компонента
onMounted(() => {
  checkAvailableFormats();
});


// Отслеживание изменений в imgName и imageFormats
watch(() => [props.imgName, props.imageFormats], () => {
  checkAvailableFormats(); // Повторная проверка доступных форматов при изменении
});
</script>

<style lang="scss" scoped>
.responsive-picture {
  display: block;
  height: 100%;
  width: 100%;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: var(--obj-fit);
  }
}
</style>
