export default {
  state: () => ({
    user: {
      name: 'Иванов Иван Иванович',
      username: 'ivan',
      email: 'ivan@gmail.com',
      password: 'qwerty'
    },
    isAuth: false
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getIsAuth(state) {
      return state.isAuth;
    }
  },
  mutations: {
    updateUserName(state, name) {
      state.user.name = name;
    },
    updateUserUsername(state, username) {
      state.user.username = username;
    },
    updateUserEmail(state, email) {
      state.user.email = email;
    },
    updateIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    }
  },
  actions: {
    setUserAuth(context, isAuth) {
      localStorage.setItem('isAuth', isAuth);
      context.commit('updateIsAuth', isAuth);
    },
    getUserAuth(context) {
      const isAuth = !!(localStorage.getItem('isAuth') && localStorage.getItem('isAuth') === "true");
      context.commit('updateIsAuth', isAuth);
    }
  },
  namespaced: true
}