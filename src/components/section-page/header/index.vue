<template>
  <div class="header-content">
    <div class="header-content__logo">
      <Logo />
    </div>
    <nav
      class="header-content__nav mobile-menu"
      :class="{ 'mobile--hidden': !burgerOpen }"
    >
      <ul class="header__list mobile-menu__list">
        <li
          class="header__list-item mobile-menu__list-item"
          v-for="(value, key) in navLink"
          :key="key"
        >
          <router-link
            class="header__link mobile-menu__link"
            :to="value"
          >
            {{ key }}
          </router-link>
        </li>

        <li class="header__list-item list-drop">
          <DropMenuLink
            :dropMenu="dropMenuPages"
            :menuStyle
            :color="colorDropMenu"
          />
        </li>
        <li class="mobile-link-btn">
          <BaseLinkBtn v-bind="btnLinkHeader">Contact us</BaseLinkBtn>
        </li>
      </ul>
    </nav>
    <div class="header-content__btn">
      <BaseLinkBtn v-bind="btnLinkHeader">Contact us</BaseLinkBtn>
    </div>

    <div class="header__burger">
      <BaseBurgerBtn
        @click="handleClickBurger"
        :burgerOpen
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, markRaw, watch, reactive } from 'vue';

import Logo from '@/components/ui/BaseLogo.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseBurgerBtn from '@/components/ui/BaseBurgerBtn.vue';
import DropMenuLink from '@/components/ui/BaseDropMenu.vue';

const props = defineProps({
  currentRouteName: {
    type: String,
    required: true,
  },
});



watch(
  () => props.currentRouteName,
  (newRoute) => {
    if (newRoute === 'DetailOurTeam' || newRoute === 'OurTeam') {
      dropMenuPages.menuItems[2].attr.class =
        'link-menu custom-link-active-header';
    } else {
      dropMenuPages.menuItems[2].attr.class = 'link-menu';
    }

    if (newRoute === 'DetailService' || newRoute === 'OurService') {
      dropMenuPages.menuItems[0].attr.class =
        'link-menu custom-link-active-header';
    } else {
      dropMenuPages.menuItems[0].attr.class = 'link-menu';
    }
  }
);

const burgerOpen = ref(false);
const handleClickBurger = () => {
  burgerOpen.value = !burgerOpen.value;
  document.body.classList.toggle('no-scroll', burgerOpen.value);
};

const navLink = markRaw({
  Home: '/',
  'About us': '/about-us',
  Service: '/our-services',
  Blog: '/blog?page=1',
});

const dropMenuPages = reactive({
  title: 'Page',
  menuItems: [
    {
      type: 'router-link',
      attr: { to: '/our-services/7', class: 'link-menu' },
      nameItem: 'Detail Service ',
    },
    {
      type: 'router-link',
      attr: { to: '/pricing-plan', class: 'link-menu' },
      nameItem: 'Pricing Plan',
    },
    {
      type: 'router-link',
      attr: { to: '/our-team/229', class: 'link-menu' },
      nameItem: 'Our Team',
    },
    {
      type: 'router-link',
      attr: { to: '/faq', class: 'link-menu' },
      nameItem: 'FAQ',
    },
    {
      type: 'router-link',
      attr: { to: '/terms-and-conditions', class: 'link-menu' },
      nameItem: 'Terms & Conditions',
    },
    {
      type: 'router-link',
      attr: { to: '/privacy-policy', class: 'link-menu' },
      nameItem: 'Privacy Policy',
    },
  ],
});

const menuStyle = markRaw({ class: 'drop-menu__list--header' });
const colorDropMenu = '#f0ce91';
const btnLinkHeader = markRaw({
  isLink: true,
  to: '/contact-us',
  version: 2,
});

const handleClickDocument = (e) => {
  if (
    burgerOpen.value &&
    !e.target.closest('.mobile-menu') &&
    !e.target.closest('.header__burger') &&
    !e.target.closest('.header-content__btn')
  ) {
    burgerOpen.value = false;
    document.body.classList.remove('no-scroll');
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickDocument);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickDocument);
});
</script>

<style lang="scss" scoped>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @include _991 {
    gap: 60px;
  }
  @include _330 {
    gap: 10px;
  }
}

.header-content__nav {
  margin-left: 60px;

  @include _991 {
    margin-left: 0;
  }
}

.header__list {
  display: flex;
  gap: 64px;
  @include body1;
  color: $white;
}

.header__link:not(.router-link-active) {
  &:hover {
    color: $gold_1;
    text-shadow: $glow-effect;
  }
}

.header-content__btn {
  position: relative;
  max-width: 126px;
  width: 100%;
  height: 52px;
  @include body1;
  color: $white;
  @include _991 {
    z-index: 200;
    margin-left: auto;
  }
  @include _575 {
    display: none;
  }
}

.list-drop {
  z-index: 100;
}

.header__burger {
  z-index: 200;
  display: none;
  @include _991 {
    display: initial;
  }
}

.mobile-menu {
  @include _991 {
    padding-top: 100px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60vw;
    height: 100vh;
    background-color: rgba(48, 44, 39, 0.674);
    z-index: 100;
    transition: transform 0.5s linear;

    @include _height_600 {
      overflow-y: auto;
    }

    @include _430 {
      width: 70vw;
    }

    @include _380 {
      width: 80vw;
    }

    @include _330 {
      width: 100vw;
    }

    .header__list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      @include heading7;
    }
  }

  & .mobile-link-btn {
    display: none;

    @include _575 {
      display: block;
      width: 80%;
      height: 50px;
    }
  }
}

.mobile--hidden {
  @include _991 {
    transform: translate(-2000px, 100%) rotate(90deg);
  }
}
</style>
