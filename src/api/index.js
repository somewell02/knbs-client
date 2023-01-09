import instance from "@/api/instance"
import AuthAPI from "@/api/auth"
import NotesAPI from "@/api/notes"
import BookmarksAPI from "@/api/bookmarks"
import FaqsAPI from "@/api/faqs"

const auth = new AuthAPI(instance)
const notes = new NotesAPI(instance)
const bookmarks = new BookmarksAPI(instance)
const faqs = new FaqsAPI(instance)

export {
    auth,
    notes,
    bookmarks,
    faqs
}
