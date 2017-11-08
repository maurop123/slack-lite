<template>
  <v-app>
    <router-view v-bind="{ auth }" ></router-view>
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
        auth: firebase.auth()
      }
    }
  }
</script>

