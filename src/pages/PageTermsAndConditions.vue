<script setup>
import { markRaw } from 'vue';

// компоненты
import MainTextBlock from '@/components/text-content/MainTextBlock.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

// пропсы для  MainTextBlock
const arrayOfObjTextBlock = markRaw([
  {
    titleTag: 'h4',
    titleText: 'Acceptance of Term',
    arrayOfParagraphs: [
      'By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Use of Website and Services',
    arrayOfParagraphs: [
      'You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services:',
    ],
    arrayOfListItems: [
      'In any way that violates any applicable federal, state, local or international law or regulation.',
      `To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.`,
      'To impersonate or attempt to impersonate [Company Name], a [Company Name] employee, another user or any other person or entity.',
      `To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm [Company Name] or users of the website or services or expose them to liability.`,
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Intellectual Property',
    arrayOfParagraphs: [
      'The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of [Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.',
      'You may not use any of our content or materials for commercial purposes without obtaining a license to do so from [Company Name] or its licensors.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Limitation of Liability',
    arrayOfParagraphs: [
      'In no event shall [Company Name] be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Changes to Terms and Conditions',
    arrayOfParagraphs: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Contact Us',
    arrayOfParagraphs: [
      'If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.',
    ],
  },
]);

const textContent = markRaw({
  tag_title: 'h2',
  title: 'Terms & Conditions',
  tag_sub_title: 'h3',
  sub_title: 'Terms and Conditions',
});
</script>
<template>
  <section
    data-aos="zoom-in-left"
    class="terms-condition"
  >
    <div class="terms-condition__header">
      <div class="title-media">
        <div class="terms-condition__title title-media__title">
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
      <p class="terms-condition__paragraph">
        Welcome to VRNas. Please read these Terms and Conditions carefully
        before using our website and services.
      </p>
    </div>

    <MainTextBlock
      v-for="(obj, i) in arrayOfObjTextBlock"
      :key="i"
      v-bind="obj"
    />
  </section>
</template>

<style lang="scss" scoped>
.terms-condition {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 788px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  padding-top: 150px;

  @include _1199 {
    padding-top: 100px;
    margin-bottom: 100px;
  }

  &__header {
    display: grid;
    justify-items: center;
    max-width: 623px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    color: $white;
    text-align: center;
  }

  &__title {
    display: grid;
    justify-items: center;
  }

  &__paragraph {
    padding-top: 24px;
    @include body1;
    color: $grey_2;
    text-align: center;
  }
}
</style>
