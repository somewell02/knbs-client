<template>
  <base-layout ref="bookmarksLayout">
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
          Добавить закладку
        </v-btn>
      </div>
    </v-row>

    <bookmarks-list :items="filteredSortedBookmarks" />
  </base-layout>
</template>


<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import BookmarksList from "@/components/bookmarks/BookmarksList.vue";
import BookmarkAddForm from "@/components/bookmarks/BookmarkAddForm.vue";

import {mapGetters, mapActions} from "vuex";

export default {
  name: 'BookmarksView',

  components: {
    BookmarksList,
    BaseLayout
  },

  data: () => ({
    sort: 'default',
    sortItems: [
      { key: 'default', value: 'По умолчанию' },
      { key: 'date', value: 'По дате' },
      { key: 'name', value: 'По названию' }
    ],
    search: ''
  }),

  computed: {
    ...mapGetters({
      getBookmarks: 'bookmarks/getBookmarks'
    }),

    filteredSortedBookmarks() {
      let list = [...this.getBookmarks];

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
          item.name.toUpperCase().includes(normalizedSearch) || item.link.toUpperCase().includes(normalizedSearch)
        )
      }

      return list;
    }
  },

  mounted() {
    this.updateBookmarks();
  },

  methods: {
    ...mapActions({
      updateBookmarks: 'bookmarks/updateBookmarks'
    }),

    openAddModal() {
      this.$refs.bookmarksLayout.setComponent(BookmarkAddForm);
      this.$refs.bookmarksLayout.openPopup();
    }
  }
}
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