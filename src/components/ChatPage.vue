<template>
  <v-container fill-height>
    <v-layout column>
      <v-flex>
        <v-list two-line>
          <template v-for="msg in messageList">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  {{ msg.user }} - {{ formatTime(msg.timestamp) }}
                </v-list-tile-sub-title>
                <v-list-tile-title>
                  {{ msg.text }}
                </v-list-tile-title>
              </v-list-tile-content>
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
    <v-snackbar
      :timeout="3000"
      bottom
      v-model="snackbar"
      multi-line
    >
      {{ error }}
      <v-btn flat color="blue" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['db', 'user'],
    data () {
      return {
        message: '',
        messageList: [],
        error: '',
        snackbar: false
      }
    },
    methods: {
      sendMessage: function() {
        if (this.user !== null) {
          const messageObject = {
            user: this.user.email,
            timestamp: moment().unix(),
            text: this.message
          }
          this.db.ref('messages').push(messageObject)
          this.message = ''
        } else {
          this.error = 'Need to be logged in to do that',
          this.snackbar = true
        }
      },
      formatTime(t) {
        return moment(t, 'X').fromNow()
      }
    },
    mounted() {
      this.db.ref('messages').on('value', snapshot => {
        let messages = snapshot.val()
        if (messages) {
          messages = Object.keys(messages).map(key => messages[key])
          this.messageList = messages
        }
      })
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
