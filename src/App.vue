<template>
  <v-app>
    <v-container fill-height>
      <v-layout column>
        <v-flex>
          <v-list>
            <template v-for="msg in messageList">
              <v-list-tile>
                {{ msg }}
              </v-list-tile>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-flex>
        <v-flex>
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
        this.message = ''
      }
    }
  }
</script>

<style>
 .application--light .list {
   background: none;
 }
 .container.fill-height {
   align-items: flex-end;
 }
</style>
