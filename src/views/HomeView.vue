<template>
  <v-container>
    <auth-form />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import AuthForm from '@/components/auth/AuthForm.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    AuthForm
  },
});
</script>
