class AuthAPI {
    constructor(instance) {
        this.API = instance
    }

    signIn = async (data) => {
        /**
         * Авторизовывает пользователя в системе
         *
         * @param {string} data.email
         * @param {string} data.password
         */
    
        return this.API.post('/auth/jwt/create/', data)
    }
}

export default AuthAPI
