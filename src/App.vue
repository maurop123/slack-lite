<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex>
          <v-list>
            <template v-for="msg in messageList">
              <v-list-tile>
                {{ msg }}
              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-text-field
            label="Message"
            v-model="message"
            ></v-text-field>
        </v-flex>
        <v-flex xs1>
          <v-btn flat icon color="blue"
            v-on:click="sendMessage">
            <v-icon>send</v-icon>
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
        message: '',
        messageList: []
      }
    },
    methods: {
      sendMessage: function() {
        this.messageList.push(this.message)
      }
    }
  }
</script>
