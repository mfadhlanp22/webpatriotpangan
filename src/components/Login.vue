<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex sm4 offset-sm4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3>Login</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
              <!-- <v-text-field
                type="email"
                v-model="email"
                label="Your E-mail"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="password"
                label="Your Password"
                required
              ></v-text-field>
              <v-btn round color="light-green accent-4" dark>Login</v-btn><br>
              or
              <br> -->
              <v-btn @click="login" round color="error"><v-icon left>mdi-google-plus</v-icon>Login With Your Google Account</v-btn>
            <!-- </v-form> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginService from '@/services/LoginService'
export default {
  data: () => ({
    google: null,
    valid: true,
    email: '',
    // emailRules: [
    // v => /.+@.+/.test(v) || 'E-mail must be valid'
    // ],
    password: ''
  }),
  methods: {
    async login() {
      try {
        this.google = (await LoginService.loginGoogle()).data
        console.log('google',this.google)
      } catch(error) {
        this.error = 'The login information was incorrect'
      } 
    }
  }
}
</script>

<style scoped>

</style>

<!--
<template>
  <div>
    <h1>Test</h1>
    <button @click="handleClickGetAuth" :disabled="!isInit">get auth code</button>
    <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
    <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOout</button>
  </div>
</template>

<script>
/** 
* You should first need to place these 2 lines of code in your APP ENTRY file, e.g. src/main.js
*
* import GAuth from 'vue-google-oauth2'
* Vue.use(GAuth, {clientId: '4584XXXXXXXX-2gqknkvdjfkdfkvb8uja2k65sldsms7qo9.apps.googleusercontent.com'})
* 
*/
export default {
  name: 'test',
  data () {
    return {
      isInit: false,
      isSignIn: false
    }
  },
  methods: {
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
      })
      .then(response => {
        // And then
      })
      .catch(error => {
        // On fail do something
      })
    },
    handleClickSignIn(){
      this.$gAuth.signIn()
      .then(user => {
        // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
        console.log('user', GoogleUser)
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        // On fail do something
      })
    },
    handleClickSignOut(){
      this.$gAuth.signOut()
      .then(() => {
        // On success do something
        this.isSignIn = this.$gAuth.isAuthorized
      })
      .catch(error  => {
        // On fail do something
      })
    }
  },
  mounted(){
    let that = this
    let checkGauthLoad = setInterval(function(){
      that.isInit = that.$gAuth.isInit
      that.isSignIn = that.$gAuth.isAuthorized
      if(that.isInit) clearInterval(checkGauthLoad)
    }, 1000);
  }
  
}
</script> -->
