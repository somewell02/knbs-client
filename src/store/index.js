import { createStore } from "vuex";
import userModule from "./user-store";
import bookmarksModule from "./bookmarks-store";
import notesModule from "./notes-store";

export default createStore({
    modules: {
        user: userModule,
        bookmarks: bookmarksModule,
        notes: notesModule
    },
});