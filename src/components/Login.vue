<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex sm4 offset-sm4>
        <v-card>
          <v-card-title primary-title>
            <v-img
              :src="require('../assets/patriot_pangan_logo_hijau.png')"
              class="my-3"
              contain
              height="100"
            ></v-img>
          </v-card-title>
          <v-card-text class="nama_logo">Patriot Pangan</v-card-text>
          <v-card-text>
            <v-form ref="form" v-model='valid' lazy-validation>
              <v-text-field
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
              <v-btn block color="light-green accent-4" dark @click="login">Masuk</v-btn>
              <!-- <v-btn round color="error" v-google-signin-button="clientId"><v-icon left>mdi-google-plus</v-icon>Login With Your Google Account</v-btn> -->
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginService from '@/services/LoginService'
// import GoogleSignInButton from 'vue-google-signin-button-directive'

// export default {
//   directives: {
//     GoogleSignInButton
//   },
//   data: () => ({
//     clientId: '626403788659-4v0ck89ok4l6m61sqcqvhtcl6bpqj4ja.apps.googleusercontent.com'
//   }),
//   methods: {
//     OnGoogleAuthSuccess (user) {
//       // Receive the idToken and make your magic with the backend
//       var idUser = user.getId()
//       var emailUser = user.getEmail()
//       var nameUser = user.getName()
//       var photoUser = user.getImageUrl()

//       // const cek = LoginService.cekID({_id: idUser})
      
//       this.$store.dispatch('setID', idUser)
//       this.$store.dispatch('setEmail', emailUser)
//       this.$store.dispatch('setName', nameUser)
//       this.$store.dispatch('setProfilePicture', photoUser)
//       this.$store.dispatch('', )
//       this.$store.dispatch('', )
//       // console.log('id:' + idUser)
//       // console.log('email:' + emailUser)
//       // console.log('name:' + nameUser)
//       // console.log('photo:' + photoUser)
//       console.log(cek)
//     },
//     OnGoogleAuthFail (error) {
//       console.log(error)
//     }
//   }
// }
export default {
  data: () => ({
    email: '',
    password: '',
    error:'',
    valid: true
  }),
  methods: {
    async login(){
      try{
        const response = await LoginService.login({
          email: this.email,
          password: this.password,
        })
        console.log(response.data.data.privilege)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setPrivilege', response.data.data.privilege)
        this.$store.dispatch('setId', response.data.data._id)
        this.$store.dispatch('setEmail', response.data.data.email)
        this.$store.dispatch('setName', response.data.data.name)
        this.$store.dispatch('setAddress', response.data.data.address)
        this.$store.dispatch('setPhone', response.data.data.phone)
        this.$store.dispatch('setHomePhone', response.data.data.homePhone)
        this.$store.dispatch('setGender', response.data.data.gender)
        this.$store.dispatch('setBirthDate', response.data.data.birthDate)
        this.$router.push({name:'dashboard'})
        // this.$store.dispatch('setAddress', response.data.address)
        // this.$router.push({
        //   name: 'dashboard'
        // })
      }
      catch(error){
        this.error = error.response.data.error
      }
    }
  },
}
</script>

<style scoped>
  .nama_logo {
    font-family: 'Open Sans', sans-serif;
    color:rgb(64, 202, 64);
    font-weight: bold;
    font-size: 24px;
  }
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
