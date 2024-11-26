<template>
  <div
    class="drop-menu"
    :style="setVariables"
    v-bind="menuStyle"
    @click="toggleMenu"
  >
    <div class="drop-menu__title">{{ dropMenu.title }}</div>

    <button class="drop-menu__btn">
      <img
        :class="{ 'btn-rotate': !hiddenMenu }"
        :src="`${basePath}assets/images/decor/toggle_btn.svg`"
        alt="button"
      />
    </button>

    <ul
      class="drop-menu__list"
      :class="{ 'hidden-menu': hiddenMenu }"
    >
      <li
        v-for="item in dropMenu.menuItems"
        :key="item.nameItem"
      >
        <component
          :is="item.type"
          v-bind="item.attr"
        >
          {{ item.nameItem }}
        </component>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const basePath: string = import.meta.env.BASE_URL;


// Интерфейс для атрибутов элемента меню
interface MenuItemAttr {
  to?: string; // Необязательное свойство
  class?: string; 
}

// Интерфейс для элемента меню
interface MenuItem {
  type: string; // Тип элемента меню
  attr?: MenuItemAttr; // Атрибуты элемента меню
  nameItem: string; // Название элемента меню
}

// Интерфейс для объекта dropMenu
interface DropMenu {
  title: string; // Заголовок меню
  menuItems: MenuItem[]; // Массив элементов меню
}

// Интерфейс для стилей меню
interface MenuStyle {
  class: string; 
}

// Определяем интерфейс для CSS-переменных
interface CssVariables {
  [key: string]: string; // Ключи - строки, значения - строки
}

const props = defineProps<{
  dropMenu: DropMenu; // Используем интерфейс DropMenu для типизации пропса
  menuStyle: MenuStyle;
  color: string; // Используем интерфейс MenuStyle для типизации пропса
}>();
const hiddenMenu = ref<boolean>(true);

const setVariables: CssVariables = {
  '--main-color': `${props.color}`,
};

const handleClickOutside = (event: MouseEvent): void => {
  const target = event.target as HTMLElement; // Приведение типа к HTMLElement
  const clicked = target.closest('.drop-menu'); // TypeScript автоматически выводит тип как HTMLElement | null
  if (!clicked) {
    hiddenMenu.value = true;
  }
};

const toggleMenu = (): void => {
  hiddenMenu.value = !hiddenMenu.value;
};

onMounted((): void => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount((): void => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>

.drop-menu {
  display: flex;
  width: max-content;
  position: relative;
}

.drop-menu__title {
  color: inherit;
  cursor: pointer;
}

.drop-menu__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  & img {
    width: 20px;
    height: 20px;
    transition: transform 0.5s;
  }
}

// Модификатор для header меню
.drop-menu__list--header {
  & .drop-menu__list {
    display: grid;
    gap: 20px;
    padding: 20px 60px 20px 20px;
    background-color: #25253299;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    transition: all .5s;
    opacity: 1;
    line-height: 1.4;
 
    & .link-menu:hover {
      color: var(--main-color);
      text-shadow: $glow-effect;
    }
  }
  & .drop-menu__title:hover {
    color: var(--main-color);
    text-shadow: $glow-effect;
  }
  & .hidden-menu {
    line-height: 0;
    gap: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
    opacity: 0;
  }
}



.btn-rotate {
  transform: rotateX(180deg);
}
</style>
