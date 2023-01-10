import {bookmarks, notes} from "../api";

export default {
  state: () => ({
    notes: []
  }),
  getters: {
    getNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    updateNotes(state, notes) {
      state.notes = notes;
    },
    addNote(state, note) {
      state.notes = [...state.notes, note];
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(item => item.id !== id);
    },
    updateNote(state, note) {
      state.notes = state.notes.map(item => {
        if (item.id === note.id) return note;
        else return item;
      });
    }
  },
  actions: {
    async updateNotes(context) {
      const data = await notes.getNotes();
      context.commit("updateNotes", data);
    },
    async addNote(context, note) {
      const res = await notes.addNote(note);
      context.commit("addNote", res.data);
    },
    async deleteNote(context, id) {
      await notes.deleteNote(id);
      context.commit("deleteNote", id);
    },
    async updateNote(context, note) {
      await notes.updateNote(note);
      context.commit("updateNote", note);
    }
  },
  namespaced: true
}