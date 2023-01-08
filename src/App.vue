<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',

  mounted() {
    this.getUserAuth();
  },

  methods: {
    ...mapActions({
      getUserAuth: 'user/getUserAuth'
    })
  }
}
</script>

<style src="./assets/styles.css"></style>