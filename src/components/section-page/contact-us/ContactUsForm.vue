<script setup>
import { ref, reactive } from 'vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseTextArea from '@/components/ui/BaseTextArea.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';


const props = defineProps({
  nameEmail: {
    type: String,
    required: true,
  },

  nameFirstName: {
    type: String,
    required: true,
  },

  nameLastName: {
    type: String,
    required: true,
  },

  namePhone: {
    type: String,
    required: true,
  },

  nameTextArea: {
    type: String,
    required: true,
  },

  emailErrorText: {
    type: String,
    required: true,
  },

  firstNameErrorText: {
    type: String,
    required: true,
  },

  lastNameErrorText: {
    type: String,
    required: true,
  },

  phoneErrorText: {
    type: String,
    required: true,
  },

  messageErrorText: {
    type: String,
    required: true,
  },

  maskProperty: {
    type: Object,
    default: null,
  },

  textContent: {
    type: Object,
    default: null,
  },
});

const form = reactive({
  email: '',
  emailError: false,
  emailErrorText: props.emailErrorText,

  firstName: '',
  firstNameError: false,
  firstNameErrorText: props.firstNameErrorText,

  lastName: '',
  lastNameError: false,
  lastNameErrorText: props.lastNameErrorText,

  phone: '',
  phoneError: false,
  phoneErrorText: props.phoneErrorText,

  message: '',
  messageError: false,
  messageErrorText: props.messageErrorText,
});

const errorSubmit = ref(false);

const isValidPhone = (phone) => {
  console.log(phone);
  return phone.indexOf('_') === -1 && form.phone !== '';
};

const isValidEmail = (email) => {
  const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regexp.test(email);
};

const isValidLengthText = (text, value) => {
  return text.length > value;
};

const handleInput = () => {
  if (!errorSubmit.value) return;

  form.emailError = !isValidEmail(form.email);
  form.firstNameError = !isValidLengthText(form.firstName, 0);
  form.lastNameError = !isValidLengthText(form.lastName, 0);
  form.messageError = !isValidLengthText(form.message, 0);
};

const handleKeyupPhone = (phone) => {
  form.phone = phone;
  if (!errorSubmit.value) return;
  form.phoneError = !isValidPhone(form.phone);
};

const handleSubmit = () => {
  form.emailError = !isValidEmail(form.email);
  form.firstNameError = !isValidLengthText(form.firstName, 0);
  form.lastNameError = !isValidLengthText(form.lastName, 0);
  form.phoneError = !isValidPhone(form.phone);
  form.messageError = !isValidLengthText(form.message, 0);

  if (
    form.emailError ||
    form.firstNameError ||
    form.lastNameError ||
    form.phoneError
  ) {
    errorSubmit.value = true;
    return;
  }

  const formData = {
    email: form.email,
    firstName: form.firstName,
    lastName: form.lastName,
    phone: form.phone,
    message: form.message,
  };

  // const url = '';
  // sendingData(url, formData);
  errorSubmit.value = false;
  console.log('отправка данных', formData);
};
</script>
<template>
  <div class="container-form">
    <div class="container-form__header title-media">
      <div class="title-media__title">
        <BaseGradientTitle :tag="textContent.tag_title">
          {{ textContent.title }}
        </BaseGradientTitle>
      </div>
      <component
        :is="textContent.tag_sub_title || 'div'"
        class="title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>
    <p class="container-form__paragraph">
      At VRNas, we're always happy to hear from our clients and potential
      clients. Whether you have a question about our VR services, want to
      discuss a potential project, or just want to say hello, we're here to
      help.
    </p>
    <form
      @submit.prevent="handleSubmit"
      class="form-contact-us"
    >
      <div class="form-contact-us__input">
        <div
          v-show="form.firstNameError"
          class="form-contact-us__error"
        >
          {{ form.firstNameErrorText }}
        </div>
        <BaseInput
          placeHolder="First Name"
          :name="nameFirstName"
          v-model="form.firstName"
          @input="handleInput"
          autocomplete="off"
        />
      </div>

      <div class="form-contact-us__input">
        <div
          v-show="form.lastNameError"
          class="form-contact-us__error"
        >
          {{ form.lastNameErrorText }}
        </div>
        <BaseInput
          placeHolder="Last Name"
          :name="nameLastName"
          v-model="form.lastName"
          @input="handleInput"
          autocomplete="off"
        />
      </div>

      <div class="form-contact-us__input">
        <div
          v-show="form.emailError"
          class="form-contact-us__error"
        >
          {{ form.emailErrorText }}
        </div>
        <BaseInput
          placeHolder="Email"
          :name="nameEmail"
          v-model="form.email"
          @input="handleInput"
          autocomplete="off"
        />
      </div>

      <div class="form-contact-us__input">
        <div
          v-show="form.phoneError"
          class="form-contact-us__error"
        >
          {{ form.phoneErrorText }}
        </div>

        <BaseInput
          :name="namePhone"
          v-bind="maskProperty"
          v-model="form.phone"
          @keyup="handleKeyupPhone"
          autocomplete="off"
        />
      </div>

      <div class="form-contact-us__input form-contact-us__text-area">
        <div
          v-show="form.messageError"
          class="form-contact-us__error"
        >
          {{ form.messageErrorText }}
        </div>

        <BaseTextArea
          placeholder="Message"
          :name="nameTextArea"
          v-model="form.message"
          @input="handleInput"
        />
      </div>
      <div class="form-contact-us__submit">
        <BaseLinkBtn :version="1">SEND MESSAGE</BaseLinkBtn>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container-form {
  max-width: 645px;
  &__header {
    margin-bottom: 15px;
  }
  &__paragraph {
    margin-bottom: 32px;
    @include body1;
    color: $grey_2;
  }
}

.form-contact-us {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  column-gap: 33px;
  width: 100%;


  &__input {
    height: 50px;
    position: relative;
    border-radius: 4px;
    background: url('/assets/images/bg/field.png') no-repeat 0 0 / 100% 100%;
   
    @include _575 {
      grid-column: 1/3;
    }
  }

  &__text-area {
    grid-column: 1/3;
    height: 137px;
    position: relative;
    background: url('/assets/images/bg/text-area.png') no-repeat 0 0 / 100% 100%;
    border-radius: 4px;
  }

  &__error {
    top: -20px;
    position: absolute;
    color: $error;
  }


  &__submit {
    grid-column: 1/3;
    min-width: 198px;
    width: max-content;
    height: 50px;
    @include button1;
    color: $white;
    @include _330 {
      min-width: 100%;
    }
  }
}
</style>
