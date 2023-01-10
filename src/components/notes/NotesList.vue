<template>
  <transition-group name="list" tag="div" class="notes-list d-flex flex-wrap mt-6 justify-space-between">
    <v-card
      v-for="(item, idx) in items"
      :key="`note-${idx}`"
      class="notes-list-item rounded-xl d-flex flex-column pa-4 mt-6"
      width="100%"
    >
      <v-card-item class="note-text d-flex flex-column flex-grow-1">
        <div>
          <!-- div class="text-overline">
            тег/теги
          </div -->

          <div class="text-h5 mb-3">
            {{ item.name }}
          </div>

          <div
            class="text-caption"
            v-html="item.text.split('\n').join('<br />')"
          />
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined" @click="openEditModal(item)">
          Изменить
        </v-btn>
        <v-btn variant="outlined" class="ml-4" color="red" @click="deleteItem(item)">
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </transition-group>
</template>

<script>
import NoteEditForm from "@/components/notes/NoteEditForm.vue";
import {mapActions} from "vuex";

export default {
  name: "NotesList",

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  inject: ["popup"],

  methods: {
    ...mapActions({
      deleteNote: 'notes/deleteNote'
    }),

    async deleteItem(note) {
      await this.deleteNote(note.id);
    },

    openEditModal(note) {
      this.popup.component = NoteEditForm;
      this.popup.componentProps = { item: note };
      this.popup.openPopup();
    }
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.notes-list-item {
  width: 48%;
  flex: 0 0 48%;
}
.note-text :deep(.v-card-item__content) {
  align-self: start;
}
</style>