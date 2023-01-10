<template>
  <v-form
    ref="form"
    @submit.prevent="updateItem"
    v-if="note"
  >
    <h2 class="text-h5 mb-6">Редактирование заметки</h2>

    <v-text-field
      v-model="note.name"
      label="Название"
      required
    />

    <v-textarea v-model="note.text"></v-textarea>

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
  name: "NotesAddForm",

  data: () => ({
    note: null
  }),

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  inject: ["popup"],

  mounted() {
    this.note = { ...this.item }
  },

  methods: {
    ...mapActions({
      updateNote: 'notes/updateNote'
    }),

    async updateItem() {
      await this.updateNote(this.note);
      this.popup.closePopup();
    }
  }
}
</script>
