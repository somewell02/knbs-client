<template>
  <teleport to="body">
    <v-dialog v-model="isOpen">
      <v-card class="base-popup pa-6">
        <slot />
        <v-btn
          icon="mdi-close"
          color="info"
          size="small"
          class="close-btn"
          @click="close"
        />
      </v-card>
    </v-dialog>
  </teleport>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BasePopup",

  data: () => ({
    isOpen: false
  }),

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  },
})
</script>

<style scoped>
.base-popup {
  min-height: 150px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
