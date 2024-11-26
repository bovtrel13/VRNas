<template>
  <div
    class="video-player"
    :class="{ 'img-bg': !isPlaying }"
    :style="playerStyle"
    @click.stop="togglePlay"
  >
    <video
      loading="lazy"
      :controls="isPlaying"
      ref="$video"
      @play="onPlay()"
      @pause="onPause()"
      @seeking="onSeeking()"
    >
      <source
        :src="videoSrc"
        type="video/mp4"
      />
      Ваш браузер не поддерживает видео.
    </video>
    <div
      class="play-icon"
      v-if="!isPlaying"
    >
      <div class="play-icon__container-img">
        <img
          class="play-icon__img"
          src="/assets/images/decor/play.svg"
          alt="play"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  img: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: true,
  },
});

const isPlaying = ref(false);
const $video = ref(null);

const emit = defineEmits(['video-play']);

function togglePlay() {
  $video.value.play();
}

function onPause() {
  isPlaying.value = false;
  emit('video-play', isPlaying.value);
}

function onPlay() {
  isPlaying.value = true;
  emit('video-play', isPlaying.value);
}

function onSeeking() {
  isPlaying.value = true;
  emit('video-play', isPlaying.value);
}

const playerStyle = computed(() => {
  return {
    '--img': `url(${import.meta.env.BASE_URL}${props.img})`,
  };
});

watch(
  () => props.video,
  () => {
    isPlaying.value = false;
    $video.value.pause(); 
    $video.value.load(); 
  }
);


const videoSrc = computed(() => {
  return `${import.meta.env.BASE_URL}/assets/video/${props.video}`; 
});
</script>

<style lang="scss" scoped>
.video-player {
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: relative;
  cursor: pointer;

  & video {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

.img-bg {
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: var(--img);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @include hover-and-pointer {
      transition: transform 1s;
    }
  }

  @include hover-and-pointer {
    &:hover::before {
      transform: scale(1.2);
    }
  }
}

.play-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: top left;
  width: 64px;
  height: 64px;
  background-image: $main-gradient;
  border-radius: 100%;
  cursor: pointer;

  @include hover-and-pointer {
    &:hover {
      animation: rotate 1s infinite linear;
    }
    &:hover &__img {
      transform: scale(1.2);
    }
    &:hover &__container-img {
      animation: non-rotate 1s infinite linear;
    }
  }
  &__container-img {
    width: 52px;
    height: 52px;
    background-color: #202029a9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
  }
  &__img {
    width: 20px;
    height: 20px;
    @include hover-and-pointer {
      transition: transform 0.3s linear;
    }
  }
}

// можем передать класс size-min компоненту PlayerMin class="size-min"  для маленькой кнопки
.size-min .play-icon {
  width: 54px;
  height: 54px;
  .play-icon__container-img {
    width: 42px;
    height: 42px;
  }
  .play-icon__img {
    width: 15px;
    height: 15px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}
@keyframes non-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
