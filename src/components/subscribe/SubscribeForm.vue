<template>
  <div class="subscribe">
    <div class="subscribe__title">
      Subscribe to our newsletter for latest updates
    </div>
    <div class="subscribe__container-form">
      <form
        class="subscribe__form"
        action="#"
      >
        <input
          class="subscribe__input"
          type="email"
          name="subscribe"
          placeholder="Enter your email address"
        />
        <button
          class="subscribe__btn"
          type="submit"
        >
          <img
            class="subscribe__btn-img"
            src="/assets/images/decor/Send.svg"
            alt="send"
          />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 38px 74px 31px;
  border-radius: 4px;
  color: $white;
  background-image: $main-gradient;

  @include _1024 {
    padding-left: 30px;
    padding-right: 30px;
  }

  @include _767 {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }

  @include _380 {
    padding: 20px;
  }

  &__title {
    max-width: 520px;
    width: 100%;
    @include heading3;
    letter-spacing: -0.005em;

    @include _767 {
      @include heading6;
      text-align: center;
    }

    @include _380 {
      @include heading10;
      text-align: left;
    }
  }

  &__container-form {
    max-width: 365px;
    width: 100%;
  }

  &__form {
    height: 56px;
    position: relative;
  }

  &__input {
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 50px;
    padding-right: 60px;
    border: solid 1px transparent;
    outline: none;
    background: rgba(255, 255, 255, 0.071)
      url('/assets/images/decor/Message.svg') no-repeat 20px / 20px;
    color: $white;
    @include body3;
    &:focus {
      border: solid $white 1px;
    }
    @include _330 {
      padding-left: 30px;
      background-position: 5px;
    }
  }
}

.subscribe__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.212);
  width: 49px;
  position: absolute;
  right: 6px;
  bottom: 6px;
  top: 6px;
}

.subscribe__input::placeholder {
  @include body3;
  color: $white;
  @include _380 {
    @include body4;
  }
  @include _330 {
    font-size: 10px;
  }
}
</style>
