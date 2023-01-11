<template>
  <v-form
    ref="form"
    @submit.prevent="addItem"
  >
    <h2 class="text-h5 mb-6">Добавление закладки</h2>
    <v-text-field
      v-model="bookmark.link"
      label="Ссылка"
    />

    <v-text-field
      v-model="bookmark.name"
      label="Название"
      required
    />

    <v-btn
      color="green"
      type="submit"
      width="100%"
    >
      Добавить
    </v-btn>
  </v-form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "BookmarksAddForm",

  data: () => ({
    bookmark: {
      name: '',
      link: ''
    }
  }),

  inject: ["popup"],

  methods: {
    ...mapActions({
      addBookmark: 'bookmarks/addBookmark'
    }),

    async addItem() {
      await this.addBookmark(this.bookmark);
      this.popup.closePopup();
    }
  }
}
</script>
