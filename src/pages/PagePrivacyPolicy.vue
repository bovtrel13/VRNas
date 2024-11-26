<script setup>
import { markRaw } from 'vue';

// компоненты
import MainTextBlock from '@/components/text-content/MainTextBlock.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

// пропсы для  MainTextBlock
const arrayOfObjTextBlock = markRaw([
  {
    titleTag: 'h4',
    titleText: 'Information We Collect',
    arrayOfParagraphs: [
      'We may collect the following types of personal information:',
    ],
    arrayOfListItems: [
      'Name, email address, and other contact information.',
      'Demographic information such as age, gender, and location.',
      'Payment information such as credit card details.',
      'Information about how you use our website and services.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'How We Use Your Information',
    arrayOfParagraphs: [
      'We may use your personal information for the following purposes:',
    ],
    arrayOfListItems: [
      'To provide you with our services and products.',
      'To process payments and fulfill orders.',
      'To send you marketing and promotional materials.',
      'To improve our website and services.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'How We Protect Your Information',
    arrayOfParagraphs: [
      'We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Information Sharing',
    arrayOfParagraphs: [
      'We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Cookies and Tracking',
    arrayOfParagraphs: [
      'We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Your Rights',
    arrayOfParagraphs: [
      'You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Changes to Privacy Policy',
    arrayOfParagraphs: [
      'We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.',
    ],
  },

  {
    titleTag: 'h4',
    titleText: 'Contact Us',
    arrayOfParagraphs: [
      'If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.',
    ],
  },
]);

const textContent = markRaw({
  tag_title: 'h2',
  title: 'PRIVACY POLICY',
  tag_sub_title: 'h3',
  sub_title: 'Privacy Policy',
});
</script>
<template>
  <section
    data-aos="zoom-in-right"
    class="privacy-policy"
  >
    <div class="privacy-policy__header">
      <div class="title-media">
        <div class="privacy-policy__title title-media__title">
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
      <p class="privacy-policy__paragraph">
        This Privacy Policy describes how [Company Name] collects, uses, and
        protects the personal information of our website visitors and customers.
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
.privacy-policy {
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
