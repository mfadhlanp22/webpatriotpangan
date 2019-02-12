<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="#51B800"
    dark
    app
    fixed
  >
    <v-toolbar-title v-if="$store.state.isUserLoggedIn">
      <v-img :src="require('../assets/patriot_pangan_logo.png')" width="50" contain></v-img>
    </v-toolbar-title>
    <v-toolbar-title v-if="$store.state.isUserLoggedIn" style="width: 170px" class="ml-0 pl-3">
      <span>Patriot Pangan</span>
    </v-toolbar-title>
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-toolbar-side-icon @click="setDrawer"></v-toolbar-side-icon>
    </v-toolbar-items>
      <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field> -->
    <v-spacer></v-spacer>
    <!-- <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat @click="navigateTo({name: 'Login'})">
        Login
      </v-btn>
    </v-toolbar-items> -->
      <!-- <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn> -->
    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <!-- <v-menu offset-y v-if="true"> -->
        <!-- <v-btn flat slot="activator"> -->
        <v-btn flat @click="logout"> Keluar
          <!-- <span>Muhammad Fadhlan <v-avatar size="40px">
            <img
             src="https://lh5.googleusercontent.com/-E6nWyGPwFHM/AAAAAAAAAAI/AAAAAAAAAAc/kkPSXlMzCrs/s96-c/photo.jpg"
            >
          </v-avatar></span> -->
            <!-- <v-avatar size="32px" tile>
              <img
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                alt="Vuetify"
              >
            </v-avatar> -->
        </v-btn>
        <!-- <v-list>
          <v-list-tile @click="setting">
            <v-list-tile-title>Setting</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    methods: {
      setDrawer(){
        this.$store.dispatch('setDrawer', !this.$store.state.drawer)
      },
      logout (){
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setPrivilege', null)
        this.$store.dispatch('setId', null)
        this.$store.dispatch('setEmail', null)
        this.$store.dispatch('setName', null)
        this.$router.push({name:'login'})
      },
      navigateTo(route){
        this.$router.push(route)
      }
    }
  }
</script>

<style>

</style>
