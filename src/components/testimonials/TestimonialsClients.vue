<template>
  <div class="testimonial">
    <div
      v-for="(client, index) in clientsData"
      :key="client.id"
      class="testimonial__circle"
      :class="'testimonial__circle--' + index"
    >
      <div
        class="testimonial__user"
        :class="[
          'testimonial__user--' + index,
          { move: indexClicked === index },
        ]"
      >
        <ClientTestimonials
          @button-clicked="handleClickTest(index)"
          :client="client"
          :showClientInfo="indexClicked === index"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import ClientTestimonials from '@/components/testimonials/ClientTestimonials.vue';
import clientsData from '@/assets/data/people/clients';
import { ref } from 'vue';

const props = defineProps({
  clientsData: {
    type: Array,
    required: true,
  },
});

const indexClicked = ref(-1);

const handleClickTest = (index) => {
  if (indexClicked.value === index) {
    indexClicked.value = -1;
  } else {
    indexClicked.value = index;
  }
};
</script>

<style lang="scss" scoped>
.testimonial {
  margin: auto;
  width: min(1247px, 65vw);
  height: min(1247px, 65vw);
  padding-top: min(111px, 5.78vw);
  position: relative;

  @include _1400 {
    width: 80vw;
    height: 80vw;
    padding-top: 0;
  }

  @include _767 {
    width: 100%;
    height: 1007px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/images/bg/bg-user-testimonial-h.png') no-repeat center / contain;
    
    @include _767 {
      background-size: cover;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-40deg);
    width: 80%;
    height: 20%;
    background: $main-gradient no-repeat;
    filter: blur(110px);
    pointer-events: none;
  }
}

.testimonial__circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.testimonial__user {
  position: absolute;
  width: 383px;
  animation: pulse 2s infinite;
  transition: left 1s ease-in-out, top 1s ease-in-out, right 1s ease-in-out, bottom 1s ease-in-out;

  font-size: 12px;
  @include _380 {
    width: 100vw;
    font-size: 10px;
  }
}

.testimonial__user::before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-shadow: 25px 0px 50px 12px rgba(233, 92, 233, 0.6);
  opacity: 0;
  transition: opacity 0.5s;
}

.testimonial__user::after {
  content: '';
  position: absolute;
  z-index: -2;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-shadow: -25px 0px 50px 2px rgb(12, 186, 241, 0.6);
  opacity: 0;
  transition: opacity 0.5s;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
.testimonial__user.move {
  animation: none;
}

.move::before,
.move::after {
  opacity: 1;
}

.testimonial__circle--0 {
  width: 16%;
  height: 16%;
  z-index: 7;

  & .testimonial__user--0 {
    top: calc(-130% - 40px);
    left: 70%;
  }
  & .move {
    left: -150%;
    @include _767 {
     top: 170%;
      left: -240%;
    }
  }
}

.testimonial__circle--1 {
  width: 32%;
  height: 32%;
  z-index: 6;

  & .testimonial__user--1 {
  
    bottom: -10%;
    left: 188%;

    @include _767 {
      top: -75%;
      left: 0;
      bottom: initial;
     
    }
    @include _380 {
      left: 0;
    }
  }
  & .move {
    left: -100%;
    top: 100%;
  }
}

.testimonial__circle--2 {
  width: 48%;
  height: 48%;
  z-index: 5;

  & .testimonial__user--2 {
    top: 9%;
    left: calc(-17% - 40px);
  }
  & .move {
    top: -50%;
    left: 50%;
    @include _767 {
      top: 86%;
      left: -55%;
    }
  }
}

.testimonial__circle--3 {
  width: 64%;
  height: 64%;
  z-index: 4;

  & .testimonial__user--3 {
    left: 80%;
    bottom: -13%;
    @include _330 {
      left: 35vw;
    }
  }
  & .move {
    left: 35%;
    bottom: -2%;
    @include _767 {
      left: -28%;
    }
  }
}

.testimonial__circle--4 {
  width: 87%;
  height: 87%;
  z-index: 3;

  & .testimonial__user--4 {
    left: 18%;
    bottom: -40px;
  }
  & .move {
    left: -7%;
    bottom: 30%;
    @include _767 {
      bottom: 17%;
    }
  }
}

.testimonial__circle--5 {
  width: 100%;
  height: 100%;
  z-index: 2;

  & .testimonial__user--5 {
    top: 50%;
    left: -40px;
    @include _767 {
      top: -2%;
      left: 65%;
    }
  }
  & .move {
    top: -3.5%;
    left: 50%;
    @include _767 {
      left: 0;
    }
  }
}
</style>
