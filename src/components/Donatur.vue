<template>
  <v-container>
    <!-- <v-content> -->
      <!-- <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout justify-center column align-center> -->
          <!-- <v-tooltip right>
            <v-btn
              slot="activator"
              :href="source"
              icon
              large
              target="_blank"
            >
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip> -->
          <!-- <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
        </v-layout>
      </v-container> -->
      <v-layout row>
        <v-flex>
          <div class="white elevation-2">
            <div class="pl-4 pr-4 pt-2 pb-2">
              <h1>Data Donatur</h1>
            </div>
            <div class="pl-4 pr-4 pt-4 pb-4">
              <v-card>
                <v-card-title>
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="donaturs"
                  :search="search"
                  :rows-per-page-items="[10,20,50,100]"
                >
                  <template slot="items" slot-scope="props">
                    <!-- <td class="text-xs-left">{{ props.index+1 }}</td> -->
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.email }}</td>
                    <td class="text-xs-left">{{ props.item.address.jalan }}</td>
                    <!-- <td class="text-xs-left"><v-btn color="info">Verifikasi</v-btn></td> -->
                    <td class="text-xs-left" v-if="props.item.donatur.verificationStatus==='not verified'"><donatur-detail :donaturData="props.item"></donatur-detail></td>
                    <td class="text-xs-left font-italic" v-else-if="props.item.donatur.verificationStatus==='rejected'">Ditolak</td>
                    <td class="text-xs-left font-italic" v-else>Telah Terverifikasi</td>
                  </template>
                  <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                  </v-alert>
                </v-data-table>
              </v-card>
            </div>
          </div>
        </v-flex>
      </v-layout>
    <!-- </v-content> -->
  </v-container>
</template>

<script>
import DonaturService from "@/services/DonaturService";
import DonaturDetail from "@/components/DonaturDetail";
import store from "@/store.js"


  export default {
    data: () => ({
      headers: [
          // { text: 'NO', sortable: false, value: '' },
          { text: 'Nama Lengkap', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Alamat', value: 'address.jalan' },
          { text: 'Verifikasi Akun', value: 'donatur.verificationStatus' },
          // { text: 'Kecamatan', value: 'kec' },
          // { text: 'Desa', value: 'desa' },
          // { text: 'Action', sortable: false, value: 'action' }
        ],
      donaturs:[],
      dialog: false,
      search:''
      // drawer: null,
    }),
    components: {
      DonaturDetail
    },
    methods: {
      // customSort(items, index, isDescending) {
      //   // The following is informations as far as I researched.
      //   // items: 'food' items
      //   // index: Enabled sort headers value. (black arrow status).
      //   // isDescending: Whether enabled sort headers is desc
      //   items.sort((a, b) => {
      //       if (index === 'donatur.verificationStatus') {
      //         if (isDescending) {
      //           return compare(b.donatur.verificationStatus,a.donatur.verificationStatus);
      //         } else {
      //           return compare(a.donatur.verificationStatus,b.donatur.verificationStatus);
      //         }
      //       } else {
      //         if (isDescending) {
      //           return a[index] < b[index] ? -1 : 1;
      //         } else {
      //           return b[index] < a[index] ? -1 : 1;
      //         }
      //       }
      //   });
      //   return items;
      // }
    },
    props: {
      source: String
    },
    created() {
      store.dispatch("setItem", "Donatur");
      store.dispatch("setSubItem", "verDonatur");
    },
    async mounted() {
      try {
        DonaturService.fetchDonatur().then(res => {
          // this.count = res.data.count;
          this.donaturs = res.data.donaturs;
          console.log(this.donaturs);
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
</script>