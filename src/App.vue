<template>
  <v-app>
    <v-toolbar color="purple darken-4" dark>
      <v-toolbar-title>
        <v-btn flat @click="$router.push('/')">Slack Lite</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="user === null" flat to="/login">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view v-bind="{ db, auth, user }"></router-view>
  </v-app>
</template>

<script>
  import firebase from 'firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8Nl-dkVKGp3hyznikkh3jTRuOO2Bvh_k",
    authDomain: "slack-lite.firebaseapp.com",
    databaseURL: "https://slack-lite.firebaseio.com",
  })

  export default {
    data () {
      return {
        db: firebaseApp.database(),
        auth: firebase.auth(),
        user: null
      }
    },
    mounted() {
      this.auth.onAuthStateChanged((user) => {
        this.user = user
      })
    }
  }
</script>

