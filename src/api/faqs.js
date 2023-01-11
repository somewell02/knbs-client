class FaqsAPI {
    constructor(instance) {
        this.API = instance
    }

    getFaqs = async () => {
        const res = await this.API.get('/faqs/');
        return res.data;
    }
}

export default FaqsAPI
