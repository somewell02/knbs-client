<template>
  <v-form
    ref="form"
    @submit.prevent="signIn"
  >
    <v-text-field
      v-model="form.email"
      label="E-mail"
      required
      type="email"
      @input="isError = false"
    />

    <v-text-field
      v-model="form.password"
      label="Пароль"
      required
      type="password"
      @input="isError = false"
    />

    <div class="error-text mb-4" v-if="isError">
      Неверный логин или пароль
    </div>

    <v-btn
      color="info"
      type="submit"
      width="100%"
    >
      Войти
    </v-btn>
  </v-form>
</template>

<script>
// import { auth } from '@/api'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'AuthForm',

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      isError: false
    }
  },

  methods: {
    ...mapMutations({
      updateUser: 'user/updateUser'
    }),

    ...mapActions({
      setUserAuth: 'user/setUserAuth'
    }),

    async signIn() {
      if (!this.form.email || !this.form.password) return;

      // const response = await auth.signIn(this.form)
      //
      // const { access, refresh } = response
      //
      // localStorage.setItem('accessToken', access)
      // localStorage.setItem('refreshToken', refresh)

      if (this.form.email === this.$store.state.user.user.email && this.form.password === this.$store.state.user.user.password) {
        // this.updateUser({ ...this.form });
        this.setUserAuth(true);
        this.$router.push({name: 'account'});
      } else {
        this.isError = true
      }
    }
  }
}
</script>

<style scoped>
.error-text {
  color: red;
}
</style>
