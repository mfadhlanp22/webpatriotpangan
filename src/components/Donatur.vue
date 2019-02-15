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
              <h1>Daftar Donatur</h1>
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
                  :items="desserts"
                  :search="search"
                  :rows-per-page-items="[10,20,50,100]"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.calories }}</td>
                    <td class="text-xs-left">{{ props.item.fat }}</td>
                    <td class="text-xs-left">{{ props.item.carbs }}</td>
                    <td class="text-xs-left" v-if="props.item.protein===''"><v-btn color="info">Verifikasi</v-btn></td>
                    <td class="text-xs-left" v-else>{{ props.item.protein }}</td>
                    <!-- <td class="text-xs-left"><ukm-detail :businessData="props.item"></ukm-detail></td> -->
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
  export default {
    data: () => ({
      headers: [
        { text: 'No', sortable: false, value: '' },
          { text: 'Nama Donatur', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Alamat', value: 'prov' },
          { text: 'Status', sortable: false, value: 'kab' },
          // { text: 'Kecamatan', value: 'kec' },
          // { text: 'Desa', value: 'desa' },
          // { text: 'Action', sortable: false, value: 'action' }
        ],
        desserts: [
          {
            name: '1',
            calories: 'Hendrawan',
            fat: 'hendra@hendra.id',
            carbs: 'Jl. Bata 2',
            protein: '',
            iron: '1%'
          },
          {
            name: '2',
            calories: 'Yanti',
            fat: 'yanyan@yanti.id',
            carbs: 'Jl. Balok 3',
            protein: 'Sudah Terverifikasi',
            iron: '1%'
          },
          // {
          //   name: 'Eclair',
          //   calories: 262,
          //   fat: 16.0,
          //   carbs: 23,
          //   protein: 6.0,
          //   iron: '7%'
          // },
          // {
          //   name: 'Cupcake',
          //   calories: 305,
          //   fat: 3.7,
          //   carbs: 67,
          //   protein: 4.3,
          //   iron: '8%'
          // },
          // {
          //   name: 'Gingerbread',
          //   calories: 356,
          //   fat: 16.0,
          //   carbs: 49,
          //   protein: 3.9,
          //   iron: '16%'
          // },
          // {
          //   name: 'Jelly bean',
          //   calories: 375,
          //   fat: 0.0,
          //   carbs: 94,
          //   protein: 0.0,
          //   iron: '0%'
          // },
          // {
          //   name: 'Lollipop',
          //   calories: 392,
          //   fat: 0.2,
          //   carbs: 98,
          //   protein: 0,
          //   iron: '2%'
          // },
          // {
          //   name: 'Honeycomb',
          //   calories: 408,
          //   fat: 3.2,
          //   carbs: 87,
          //   protein: 6.5,
          //   iron: '45%'
          // },
          // {
          //   name: 'Donut',
          //   calories: 452,
          //   fat: 25.0,
          //   carbs: 51,
          //   protein: 4.9,
          //   iron: '22%'
          // },
          // {
          //   name: 'KitKat',
          //   calories: 518,
          //   fat: 26.0,
          //   carbs: 65,
          //   protein: 7,
          //   iron: '6%'
          // }
        ],
      dialog: false,
      // drawer: null,
    }),
    props: {
      source: String
    }
  }
</script>