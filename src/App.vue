<template>
  <v-app>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-list v-for="msg in messageList" v-bind:key="msg.timestamp">
            <v-list-tile>
              {{ msg.text }}
            </v-list-tile>
            <v-divider></v-divider>
          </v-list>
        </v-flex>
        <v-flex>
          <form v-on:submit.prevent="sendMessage">
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
          </form>
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
        messageList: [],
      }
    },
    methods: {
      sendMessage() {
        const now = new Date()
        const messageObj = {
          text: this.message,
          timestamp: now.getTime()
        }
        this.messageList.push(messageObj)
        this.message = ''
      }
    }
  }
</script>

<style>
  .application--light .list {
    background: none;
  }
</style>
