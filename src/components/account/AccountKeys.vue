<template>
  <v-card
    color="grey-lighten-3"
    class="pa-12"
  >
    <v-card-text class="pa-0">
      <h3 class="text-h5">Ключи доступа API</h3>
      <ul class="keys-list mt-4">
        <li
          v-for="item in keys"
          :key="item.key"
          class="keys-list-item d-flex justify-lg-space-between align-center text-body-1 py-2"
        >
          {{ item.key }}, {{ item.date }}

          <v-btn
            rounded="pill"
            variant="text"
            class="text-caption"
            append-icon="mdi-close"
            @click="deleteKey(item.key)"
          >
            Деактивировать
          </v-btn>
        </li>
      </ul>
    </v-card-text>
    <div class="d-flex w-100 justify-end mt-6">
      <v-btn
        rounded="pill"
        prepend-icon="mdi-cached"
      >
        Сгенерировать
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AccountKeys",

  data: () => ({
    keys: [
      { key: 'a38efjkwern', date: '15.12.2022' },
      { key: 'wefjknf&&67', date: '13.12.2022' },
      { key: '2345dgvbbnn', date: '22.11.2022' },
      { key: 'uhfhefhuefigw', date: '13.11.2022' },
    ]
  }),

  methods: {
    deleteKey(key) {
      this.keys = this.keys.filter(item => item.key !== key);
    }
  }
}
</script>

<style scoped>
.keys-list-item:not(:last-child) {
  border-bottom: 1px solid rgba(var(--v-theme-info))
}
</style>
