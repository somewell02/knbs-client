<template>
  <v-form
    ref="form"
    @submit.prevent="updateItem"
    v-if="bookmark"
  >
    <h2 class="text-h5 mb-6">Редактирование закладки</h2>
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
      Сохранить
    </v-btn>
  </v-form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "BookmarksAddForm",

  data: () => ({
    bookmark: null
  }),

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  inject: ["popup"],

  mounted() {
    this.bookmark = { ...this.item }
  },

  methods: {
    ...mapActions({
      updateBookmark: 'bookmarks/updateBookmark'
    }),

    async updateItem() {
      await this.updateBookmark(this.bookmark);
      this.popup.closePopup();
    }
  }
}
</script>
