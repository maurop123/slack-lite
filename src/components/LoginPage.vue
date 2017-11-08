<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-card>
          <v-card-title>
            Login
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="login">
              <v-text-field label="Email" v-model="email" />
              <v-text-field label="Password" v-model="password" type="password" />
              <button type="submit" style="display:none"></button>
            </form>
          </v-card-text>
          <v-card-actions>
            <v-btn class="orange white--text" @click="login">
              Login
            </v-btn>
            <v-spacer />
            <v-btn flat class="grey--text" @click="createAccount()">
              Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['auth'],
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        const {email, password, auth} = this
        return auth.signInWithEmailAndPassword(email, password)
      },
      createAccount() {
        const {email, password, auth} = this
        return auth.createUserWithEmailAndPassword(email, password)
      },
    },
  }
</script>
