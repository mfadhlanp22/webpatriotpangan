<template>
  <!-- <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="$store.state.drawer"
    fixed
    app
    v-if="$store.state.isUserLoggedIn"
  >
    <v-list dense>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://lh5.googleusercontent.com/-E6nWyGPwFHM/AAAAAAAAAAI/AAAAAAAAAAc/kkPSXlMzCrs/s96-c/photo.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-text="$store.state.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <template v-for="item in items">
        <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer> -->
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="$store.state.drawer"
    fixed
    app
    v-if="$store.state.isUserLoggedIn"
  >
    <!-- <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-layout pa-2 column fill-height class="lightbox white--text">
        <v-spacer></v-spacer>
        <v-flex shrink>
          <v-avatar size="70">
            <img src="https://lh5.googleusercontent.com/-E6nWyGPwFHM/AAAAAAAAAAI/AAAAAAAAAAc/kkPSXlMzCrs/s96-c/photo.jpg">
          </v-avatar>
          <div class="subheading">Jonathan Lee</div>
          <div class="body-1">heyfromjonathan@gmail.com</div>
        </v-flex>
      </v-layout>
    </v-img> -->
    <v-list dense>
      <v-list-tile avatar>
        <v-list-tile-avatar size="50">
          <img src="https://lh5.googleusercontent.com/-E6nWyGPwFHM/AAAAAAAAAAI/AAAAAAAAAAc/kkPSXlMzCrs/s96-c/photo.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="$store.state.privilege[0]"></v-list-tile-title>
          <v-list-tile-title v-text="$store.state.name"></v-list-tile-title>
          <v-list-tile-title v-text="$store.state.email"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
    <v-list v-for="item in items" :key="item.title" dense>
      <v-list-group :value="item.title == $store.state.item" v-if="item.items != null" :prepend-icon="item.action" no-action >
        <v-list-tile slot="activator" :value="item.title == $store.state.item">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="navigateTo(subItem.to, item.title)"
          :value="subItem.to == $store.state.subItem"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
      <v-list-tile
        v-else
        @click="navigateTo(item.to, item.to)"
        :value="item.to == $store.state.item"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      // items: [
      //   { icon: 'contacts', text: 'Contacts' },
      //   { icon: 'history', text: 'Frequently contacted' },
      //   { icon: 'content_copy', text: 'Duplicates' },
      //   {
      //     icon: 'keyboard_arrow_up',
      //     'icon-alt': 'keyboard_arrow_down',
      //     text: 'Labels',
      //     model: true,
      //     children: [
      //       { icon: 'add', text: 'Create label' }
      //     ]
      //   },
      //   {
      //     icon: 'keyboard_arrow_up',
      //     'icon-alt': 'keyboard_arrow_down',
      //     text: 'More',
      //     model: false,
      //     children: [
      //       { text: 'Import' },
      //       { text: 'Export' },
      //       { text: 'Print' },
      //       { text: 'Undo changes' },
      //       { text: 'Other contacts' }
      //     ]
      //   },
      //   { icon: 'settings', text: 'Settings' },
      //   { icon: 'chat_bubble', text: 'Send feedback' },
      //   { icon: 'help', text: 'Help' },
      //   { icon: 'phonelink', text: 'App downloads' },
      //   { icon: 'keyboard', text: 'Go to the old version' }
      // ]
      items: [
        {
          action: "dashboard",
          title: "Dashboard",
          to: "dashboard",
          items: null
        },
        {
          action: "mdi-clipboard-check-outline",
          title: "Verifikasi",
          items: [
            {
              title: "Patriot",
              to: "verPatriot"
            },
            {
              title: "Donatur",
              to: "verDonatur"
            }
          ]
        },
        {
          action: "mdi-format-list-checkbox",
          title: "Data Keluarga Miskin",
          to: "dataKeluargaMiskin",
          items: null
          // items: [
          //   { 
          //       title: "Produk UKM",
          //       to: "ukmProduct"
          //   },
          //   { 
          //       title: "Daftar UKM",
          //       to: "ukmList"
          //   },
          //   { 
          //       title: "Daftar Pengusaha",
          //       to: "ukmListPengusaha"
          //   }
          // ]
        }
      ],
      right: null
    }),
    methods: {
      navigateTo(route,item){
        this.$router.push({name: route});
        this.$store.dispatch('setItem', item)
        this.$store.dispatch('setSubItem', route)
      }
    }
  }
</script>

<style>

</style>
