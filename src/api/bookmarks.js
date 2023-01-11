import store from "@/store"

class BookmarksAPI {
  constructor(instance) {
    this.API = instance
  }

  getBookmarks = async () => {
    const res = await this.API.get('/bookmarks/');
    return res.data;
  }

  addBookmark = async (bookmark) => {
    return await this.API.post('/bookmarks/', bookmark);
  }

  deleteBookmark = async (id) => {
    return await this.API.delete(`/bookmarks/${id}`);
  }

  updateBookmark = async (bookmark) => {
    return await this.API.put(`/bookmarks/${bookmark.id}`, bookmark);
  }
}

export default BookmarksAPI
