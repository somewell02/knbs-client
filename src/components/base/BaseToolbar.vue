<template>
  <v-toolbar
    dark
    prominent
    color="blue"
  >
    <v-container>
      <v-row justify="space-between" align="center">
        <div class="d-flex align-center">
          <v-toolbar-title class="toolbar-title" style="flex-grow: 3">
            <router-link :to="{ name: 'home' }">
              KnBs
            </router-link>
          </v-toolbar-title>
          <nav
            v-if="getIsAuth"
            class="d-flex align-center ml-12"
          >
            <router-link :to="{ name: 'notes' }"> <v-btn> Заметки </v-btn> </router-link>
            <router-link :to="{ name: 'bookmarks' }"> <v-btn> Закладки </v-btn> </router-link>
          </nav>
        </div>

        <div class="d-flex align-center">
          <router-link :to="{ name: 'faq' }">
            <v-avatar
              color="info"
              class="toolbar-avatar"
            >
              <v-icon
                icon="mdi-help-circle"
                size="x-large"
              />
            </v-avatar>
          </router-link>
          <router-link :to="{ name: 'account' }">
            <v-avatar
              color="info"
              class="toolbar-avatar ml-2"
            >
              <v-icon
                icon="mdi-account-circle"
                size="x-large"
              />
            </v-avatar>
          </router-link>
          <v-btn v-if="getIsAuth" icon class="ml-2" @click="logout">
            <v-icon icon="mdi-export" />
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  name: "BaseToolbar",

  computed: {
    ...mapGetters({
      getIsAuth: 'user/getIsAuth'
    })
  },

  methods: {
    ...mapMutations({
      updateUser: 'user/updateUser'
    }),
    ...mapActions({
      setUserAuth: 'user/setUserAuth'
    }),
    logout() {
      this.setUserAuth(false);
      this.$router.push({ name: 'auth' })
    }
  }
}
</script>

<style scoped>
.toolbar-title {
  font-weight: 700;
  font-size: 32px;
}
a {
  color: white;
}
</style>