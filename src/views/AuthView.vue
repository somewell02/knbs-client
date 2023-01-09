<template>
  <base-layout>
    <h1 class="text-center mt-6 mb-6 text-h4">Авторизация</h1>
    <auth-form />
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import AuthForm from '@/components/auth/AuthForm.vue'
import BaseLayout from "@/layouts/BaseLayout.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    BaseLayout,
    AuthForm
  },
});
</script>
