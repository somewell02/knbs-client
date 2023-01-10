class NotesAPI {
    constructor(instance) {
        this.API = instance
    }

    getNotes = async () => {
        const res = await this.API.get('/notes/');
        return res.data;
    }

    addNote = async (note) => {
        return await this.API.post('/notes/', note);
    }

    deleteNote = async (id) => {
        return await this.API.delete(`/notes/${id}`);
    }

    updateNote = async (note) => {
        console.log(note);
        return await this.API.put(`/notes/${note.id}`, note);
    }
}

export default NotesAPI
