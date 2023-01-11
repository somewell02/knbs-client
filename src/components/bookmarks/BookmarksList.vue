<template>
  <transition-group name="list" tag="div" class="bookmarks-list d-flex flex-column mt-6">
    <v-card
      v-for="(item, idx) in items"
      :key="`bookmark-${idx}`"
      class="bookmark-card rounded-xl pa-4 mt-6"
      width="100%"
    >
      <v-card-item>
        <div>
          <a class="bookmark-card-link text-caption" :href="item.link" target="_blank">
            {{ item.link }}
          </a>
          <div class="text-h5 mb-1 mt-3">
            {{ item.name }}
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <a :href="item.link" target="_blank">
          <v-btn variant="outlined">
            Перейти
          </v-btn>
        </a>
        <v-btn variant="outlined" class="ml-4" @click="copyToClipboard(item)">
          Скопировать
        </v-btn>
        <v-btn variant="outlined" class="ml-4" @click="openEditModal(item)">
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
import BookmarkEditForm from "@/components/bookmarks/BookmarkEditForm.vue";
import {mapActions} from "vuex";

export default {
  name: "BookmarksList",

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  inject: ["popup"],

  methods: {
    ...mapActions({
      deleteBookmark: 'bookmarks/deleteBookmark'
    }),
    async deleteItem(bookmark) {
      await this.deleteBookmark(bookmark.id);
    },
    openEditModal(bookmark) {
      this.popup.component = BookmarkEditForm;
      this.popup.componentProps = { item: bookmark };
      this.popup.openPopup();
    },
    async copyToClipboard(bookmark) {
      try {
        await navigator.clipboard.writeText(bookmark.link);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
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

.bookmark-card .bookmark-card-link {
  text-decoration: none;
  color: rgb(var(--v-theme-info));
}
</style>
