<template>
  <base-layout ref="notesLayout">
    <v-row justify="space-between" align="center" class="mt-6">
      <div class="d-flex align-center">
        Сортировать
        <v-select
          v-model="sort"
          :items="sortItems"
          item-title="value"
          item-value="key"
          variant="solo"
          density="compact"
          class="sort-select ml-4"
        />
        <v-text-field
          v-model="search"
          density="compact"
          variant="solo"
          label="Поиск..."
          append-inner-icon="mdi-magnify"
          class="search-input flex-grow-0 flex-shrink-0 ml-8"
          single-line
          hide-details
        />
      </div>

      <div>
        <v-btn color="green" @click="openAddModal">
          Добавить заметку
        </v-btn>
      </div>
    </v-row>

    <notes-list :items="filteredSortedNotes" />
  </base-layout>
</template>

<script>
import {defineComponent} from 'vue';
import {mapActions, mapGetters} from "vuex";

// Components
import BaseLayout from "@/layouts/BaseLayout.vue";
import NotesList from "@/components/notes/NotesList.vue";
import NoteAddForm from "@/components/notes/NoteAddForm.vue";

export default defineComponent({
  name: 'NotesView',
  components: {
    NotesList,
    BaseLayout
  },

  data: () => ({
    dialog: false,
    sort: 'default',
    sortItems: [
      { key: 'default', value: 'По умолчанию' },
      { key: 'date', value: 'По дате создания' },
      { key: 'editDate', value: 'По дате редактирования' },
      { key: 'name', value: 'По названию' }
    ],
    search: '',
  }),

  computed: {
    ...mapGetters({
      getNotes: 'notes/getNotes'
    }),

    filteredSortedNotes() {
      let list = [...this.getNotes];

      switch (this.sort) {
        case "name":
          list = list.sort((o1, o2) =>
            o1.name.toUpperCase() > o2.name.toUpperCase() ? 1
              : o1.name.toUpperCase() < o2.name.toUpperCase() ? -1 : 0
          )
          break;
      }

      const normalizedSearch = this.search.trim().toUpperCase();
      if (normalizedSearch) {
        list = list.filter(item =>
          item.name.toUpperCase().includes(normalizedSearch) || item.text.toUpperCase().includes(normalizedSearch)
        )
      }

      return list;
    }
  },

  mounted() {
    this.updateNotes();
  },

  methods: {
    ...mapActions({
      updateNotes: 'notes/updateNotes'
    }),

    openAddModal() {
      this.$refs.notesLayout.setComponent(NoteAddForm);
      this.$refs.notesLayout.openPopup();
    }
  }

});
</script>

<style scoped>
.sort-select {
  width: 200px;
}
.sort-select :deep(.v-input__details) {
  display: none;
}

.search-input {
  width: 250px;
}
</style>
