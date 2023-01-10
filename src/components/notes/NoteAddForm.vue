<template>
  <v-form
    ref="form"
    @submit.prevent="addItem"
  >
    <h2 class="text-h5 mb-6">Добавление заметки</h2>

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
      Добавить
    </v-btn>
  </v-form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "NotesAddForm",

  data: () => ({
    note: {
      name: '',
      text: ''
    }
  }),

  inject: ["popup"],

  methods: {
    ...mapActions({
      addNote: 'notes/addNote'
    }),

    async addItem() {
      await this.addNote(this.note);
      this.popup.closePopup();
    }
  }
}
</script>
