<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex>
          <v-text-field
            label="Message"
            v-model="message"
            ></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn flat icon color="pink">
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        message: ''
      }
    }
  }
</script>
