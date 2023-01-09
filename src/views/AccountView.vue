<template>
  <base-layout>
    <v-main>
      <account-info class="mt-6" />
      <account-keys class="mt-6" />
    </v-main>
  </base-layout>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import AccountInfo from '@/components/account/AccountInfo.vue'
import BaseLayout from "@/layouts/BaseLayout.vue";
import AccountKeys from "@/components/account/AccountKeys.vue";

export default defineComponent({
  name: 'AccountView',

  components: {
    AccountKeys,
    BaseLayout,
    AccountInfo
  },
});
</script>
