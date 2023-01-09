<template>
  <v-card
    color="white"
    class="pa-12"
  >
    <v-row>
      <div class="account-sidebar">
        <v-avatar color="blue" size="150">
          <v-icon icon="mdi-account-circle" size="100"></v-icon>
        </v-avatar>
        <h3 class="text-center mt-4">{{ getUser.name }}</h3>
        <p class="text-center mt-2">@{{ getUser.username }}</p>
      </div>
      <div class="pl-12 flex-grow-1">
        <h3 class="text-h5">Личная информация</h3>
        <v-form @submit.prevent="updateUser" class="mt-6">
          <v-row class="ma-0">
            <v-text-field
              v-model="user.name"
              label="ФИО"
              variant="outlined"
              class="account-info-input w-25"
            />
            <v-text-field
              v-model="user.username"
              label="Имя пользователя"
              variant="outlined"
              class="account-info-input ml-6 w-25"
            />
          </v-row>
          <v-text-field
            v-model="user.email"
            type="email"
            label="E-mail"
            variant="outlined"
            class="account-info-input w-100"
            required
          />
          <v-btn
            rounded="pill"
            class="mb-6"
            type="submit"
            variant="outlined"
          >
            Сохранить
          </v-btn>
        </v-form>
        <h3 class="text-h5 mt-6">Смена пароля</h3>
        <v-form @submit.prevent="updateUserPassword" class="mt-6">
          <v-row class="ma-0">
            <v-text-field
              v-model="user.password"
              label="Старый пароль"
              variant="outlined"
              class="account-info-input w-25"
            />
            <v-text-field
              v-model="user.newPassword"
              label="Новый пароль"
              variant="outlined"
              class="account-info-input ml-6 w-25"
            />
          </v-row>
          <v-btn
            rounded="pill"
            class="mb-6"
            type="submit"
            variant="outlined"
          >
            Изменить
          </v-btn>
        </v-form>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: 'AccountInfo',

  data: () => ({
    user: {
      name: '',
      email: '',
      username: 'oleg',
      password: '',
      newPassword: ''
    }
  }),

  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },

  mounted() {
    this.user.name = this.$store.state.user.user.name
    this.user.email = this.$store.state.user.user.email
    this.user.username = this.$store.state.user.user.username
  },

  methods: {
    ...mapMutations({
      updateName: 'user/updateUserName',
      updateUsername: 'user/updateUserUsername',
      updateEmail: 'user/updateUserEmail'
    }),

    updateUser() {
      this.updateName(this.user.name)
      this.updateUsername(this.user.username)
      this.updateEmail(this.user.email)
    },

    updateUserPassword() {

    }
  }
});
</script>

<style scoped>
.account-sidebar {
  width: 150px;
}
</style>
