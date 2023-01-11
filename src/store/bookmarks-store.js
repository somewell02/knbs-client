import {bookmarks} from "../api";

export default {
  state: () => ({
    bookmarks: []
  }),
  getters: {
    getBookmarks(state) {
      return state.bookmarks;
    },
  },
  mutations: {
    updateBookmarks(state, bookmarks) {
      state.bookmarks = bookmarks;
    },
    addBookmark(state, bookmark) {
      state.bookmarks = [...state.bookmarks, bookmark];
    },
    deleteBookmark(state, id) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== id);
    },
    updateBookmark(state, bookmark) {
      state.bookmarks = state.bookmarks.map(item => {
        if (item.id === bookmark.id) return bookmark;
        else return item;
      });
    }
  },
  actions: {
    async updateBookmarks(context) {
      const data = await bookmarks.getBookmarks();
      context.commit("updateBookmarks", data);
    },
    async addBookmark(context, bookmark) {
      const res = await bookmarks.addBookmark(bookmark);
      context.commit("addBookmark", res.data);
    },
    async deleteBookmark(context, id) {
      await bookmarks.deleteBookmark(id);
      context.commit("deleteBookmark", id);
    },
    async updateBookmark(context, bookmark) {
      await bookmarks.updateBookmark(bookmark);
      context.commit("updateBookmark", bookmark);
    }
  },
  namespaced: true
}