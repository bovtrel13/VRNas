<script setup>
import { markRaw, ref } from 'vue';

import facebookImg from '/assets/images/social/facebook.svg';
import instagramImg from '/assets/images/social/instagram.svg';
import twitterImg from '/assets/images/social/twitter.svg';
import githubImg from '/assets/images/social/github.svg';

import ContactUsMichurin from '@/components/section-page/contact-us/ContactUsMichurin.vue';
import CardContactUs from '@/components/card/CardContactUs.vue';
import YandexMap from '@/components/maps/YandexMap.vue';

import ContactUsForm from '@/components/section-page/contact-us/ContactUsForm.vue';

const cardContactUs = markRaw([
  {
    title: 'EMAIL',
    sub_title: 'sotto36623@gmail.com',
    imgName: 'email.svg',
    tagTitle: 'div',
    href: 'mailto:sotto36623@gmail.com',
  },
  {
    title: 'ADDRESS',
    sub_title: '742 Evergreen Terrace, Springfield',
    imgName: 'address.svg',
    tagTitle: 'div',
  },
  {
    title: 'PHONE',
    sub_title: '(901) 009-0901',
    imgName: 'phone.svg',
    tagTitle: 'div',
    href: 'tel:+9010090901',
  },
]);

const formContactUs = markRaw({
  nameEmail: 'email',
  nameFirstName: 'first-name',
  nameLastName: 'last-name',
  namePhone: 'phone',
  nameTextArea: 'message',
  emailErrorText: 'not valid email',
  firstNameErrorText: 'enter first name',
  lastNameErrorText: 'enter last name',
  phoneErrorText: 'not valid phone',
  messageErrorText: 'enter message',
  maskProperty: {
    placeHolder: '+7 (999) 999 99 99',
    mask: true,
    maskStart: 3,
    maskValue: '+7(___)___-__-__',
    maskSymbols: [')', '(', '-'],
    maskHover: true,
  },
  textContent: {
    tag_title: 'h2',
    title: 'CONTACT US',
    tag_sub_title: 'h3',
    sub_title: 'Get in Touch',
    paragraph:
      "At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.",
  },
});

const socialLinkData = markRaw([
  {
    imgSrc: facebookImg,
    altText: 'facebook link',
    href: '#',
  },
  {
    imgSrc: instagramImg,
    altText: 'instagram link',
    href: '#',
  },
  {
    imgSrc: twitterImg,
    altText: 'twitter link',
    href: '#',
  },
  {
    imgSrc: githubImg,
    altText: 'github link',
    href: 'https://github.com/Tudovchanin',
  },
]);

const fade = ['fade-up', 'fade-down', 'fade-up'];
</script>
<template>
  <section>
    <address class="section-cards">
      <div
      class="wrapper-cards-contact"
        :data-aos="fade[index]"
        v-for="(card, index) in cardContactUs"
        :key="card.title"
      >
        <CardContactUs v-bind="card" />
      </div>
    </address>
  </section>

  <section class="section-social">
    <div
      data-aos="fade-up"
      class="section-social__left"
    >
      <ContactUsMichurin :socialLinkData />
    </div>
    <div
      data-aos="fade-down"
      class="section-social__right"
    >
      <ContactUsForm v-bind="formContactUs" />
    </div>
  </section>

  <section
    data-aos="fade-left"
    class="section-map"
  >
    <YandexMap />
  </section>
</template>

<style lang="scss" scoped>
.section-cards {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding-top: 64px;
  margin-bottom: 150px;

  @include _1199 {
    padding-top: 100px;
    margin-bottom: 100px;
  }

  @include _991 {
    flex-direction: column;
  }
}

.wrapper-cards-contact {
  // background-color: aqua;
  width: 100%;
  
}

.section-social {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 150px;

  @include _1199 {
    flex-direction: column;
    margin-bottom: 100px;
  }

  &__left {
    position: absolute;
    z-index: 0;
    top: 25%;
    left: -10%;

    @include _1600 {
      left: 0;
    }

    @include _1199 {
      align-self: center;
      padding-top: 142px;
      position: initial;
    }

    @include _480 {
      padding-top: 120px;
      padding-left: 50px;
    }

    @include _430 {
      padding-left: 0;
    }
  }

  &__right {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      z-index: -1;
      @include background-effect;
    }
  }
}

.section-map {
  width: 100%;
  height: 473px;
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }

  @include _991 {
    height: 300px;
  }

  @include _767 {
    height: 200px;
  }

  @include _575 {
    height: 257px;
  }
}
</style>
