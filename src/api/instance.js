import axios from 'axios'

const apiURL = 'http://195.2.85.147/api'
const refreshURL = `${apiURL}/auth/jwt/refresh/`

const instance = axios.create({
    baseURL: apiURL
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },

    (error) => {
        console.log('HTTP Request error')
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => response,

    async (error) => {
        if (error.response?.status === 401) {
            const isInactiveAccount = error.response.data.detail === 'No active account found with the given credentials'
            const isRefreshInvalid = error.response.data.code === 'token_not_valid' && !error.response.data.messages
            const isTokenExist = localStorage.getItem('refreshToken')

            if (!isTokenExist) {
                window.location = '/'
                localStorage.clear()
            }

            if (!isInactiveAccount) {
                if (!isRefreshInvalid) {
                    // обновим токен
                    const tokenResponse = await axios.post(refreshURL, { refresh: localStorage.getItem('refreshToken') })

                    const { access } = tokenResponse.data

                    if (access) {
                        localStorage.setItem('accessToken', access)
                    }

                    // попробуем повторно отправить неудавшийся запрос
                    return instance.request(error.config)
                }

                // если рефреш токен невалиден, то разлогиним юзера
                if (isRefreshInvalid) {
                    window.location = '/'
                    localStorage.clear()
                }
            }
        }

        return Promise.reject(error)
    }
)

export default instance
