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
              <h1>Data Keluarga Rawan Pangan</h1>
            </div>
            <div class="pl-4 pr-4 pt-4 pb-4">
              <v-card>
                <v-card-title>
                  <tambah-data></tambah-data>
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
                  :items="keluarga"
                  :search="search"
                  :rows-per-page-items="[10,20,50,100]"
                >
                  <!-- <template slot="items" slot-scope="props"> -->
                  <template v-slot:items="props">
                    <tr>
                    <!-- <td class="text-xs-left">{{ props.item.name }}</td> -->
                      <td class="text-xs-left">{{ props.item.namaKRT }}</td>
                      <td class="text-xs-left">{{ props.item.address.jalan }}</td>
                      <td class="text-xs-left">{{ props.item.address.provinsiId.provinsi }}</td>
                      <td class="text-xs-left">{{ props.item.address.kabupatenId.kabupaten }}</td>
                      <td class="text-xs-left">{{ props.item.address.kecamatanId.kecamatan }}</td>
                      <td class="text-xs-left">{{ props.item.address.desaId.desa }}</td>                      
                      <!-- <td class="text-xs-left">{{ props.item.carbs }}</td> -->
                      <td class="text-xs-left" v-if="props.item.patriotId!=null">{{ props.item.patriotId.name }}</td>
                      <td class="text-xs-left" v-else>Belum Di Pantau</td>
                      <td class="text-xs-left"><a @click="navigateTo({name: 'keluarga', params: {keluargaId: props.item._id}})">Lihat Detail</a></td>
                    <!-- <td class="text-xs-left"><ukm-detail :businessData="props.item"></ukm-detail></td> -->
                    </tr>
                  </template>
                  <!-- <template v-slot:expand="props">
                    <v-card flat>
                      <v-container>
                        <v-layout justify-center>
                          <v-flex xs12 md3>
                            <v-card-text>Pilih Patriot :</v-card-text>
                          </v-flex>
                          <v-flex xs12 md3>
                            <v-select
                              :items="patriotlist"
                              item-text="name"
                              item-value="_id"
                              label="Pilih Patriot"
                              required
                              v-model="patriot"
                              solo
                            ></v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </template> -->
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
import TambahData from "@/components/TambahDataKeluarga";
import KeluargaService from "@/services/KeluargaService";
import PatriotService from "@/services/PatriotService";

  export default {
    data: () => ({
      headers: [
          // { text: 'No', sortable: false, value: '' },
          { text: 'Nama Kepala Rumah Tangga', value: 'namaKRT' },
          { text: 'Alamat', value: 'address.jalan' },
          { text: 'Provinsi', value: 'address.provinsiId.provinsi' },
          { text: 'Kota/Kabupaten', value: 'address.kabupatenId.kabupaten' },
          { text: 'Kecamatan', value: 'address.kecamatanId.kecamatan' },
          { text: 'Desa/Kelurahan', value: 'address.desaId.desa' },
          { text: 'Nama Patriot', value: 'patriotId.name' },
          { text: '', sortable: false }
        ],
      keluarga: [],
      patriot: null,
      patriotlist: [],
      expand: false,
      search: '',
      // address: [],
        // desserts: [
        //   {
        //     name: '1',
        //     calories: 'Supriyadi',
        //     fat: 'Jl. Sukacita',
        //     carbs: 'Taraf 1',
        //     protein: 'Rendy',
        //     // iron: '1%'
        //   },
        //   {
        //     name: '2',
        //     calories: 'Anton',
        //     fat: 'Jl. Kenangan',
        //     carbs: 'Taraf 2',
        //     protein: 'Aisyah',
        //     // iron: '1%'
        //   },
        //   // {
        //   //   name: '3',
        //   //   calories: 262,
        //   //   fat: 16.0,
        //   //   carbs: 23,
        //   //   protein: 6.0,
        //   //   iron: '7%'
        //   // },
        //   // {
        //   //   name: '4',
        //   //   calories: 305,
        //   //   fat: 3.7,
        //   //   carbs: 67,
        //   //   protein: 4.3,
        //   //   iron: '8%'
        //   // },
        //   // {
        //   //   name: '5',
        //   //   calories: 356,
        //   //   fat: 16.0,
        //   //   carbs: 49,
        //   //   protein: 3.9,
        //   //   iron: '16%'
        //   // },
        //   // {
        //   //   name: '6',
        //   //   calories: 375,
        //   //   fat: 0.0,
        //   //   carbs: 94,
        //   //   protein: 0.0,
        //   //   iron: '0%'
        //   // },
        //   // {
        //   //   name: '7',
        //   //   calories: 392,
        //   //   fat: 0.2,
        //   //   carbs: 98,
        //   //   protein: 0,
        //   //   iron: '2%'
        //   // },
        //   // {
        //   //   name: '8',
        //   //   calories: 408,
        //   //   fat: 3.2,
        //   //   carbs: 87,
        //   //   protein: 6.5,
        //   //   iron: '45%'
        //   // },
        //   // {
        //   //   name: '9',
        //   //   calories: 452,
        //   //   fat: 25.0,
        //   //   carbs: 51,
        //   //   protein: 4.9,
        //   //   iron: '22%'
        //   // },
        //   // {
        //   //   name: '10',
        //   //   calories: 518,
        //   //   fat: 26.0,
        //   //   carbs: 65,
        //   //   protein: 7,
        //   //   iron: '6%'
        //   // }
        // ],
      dialog: false,
      // drawer: null,
    }),
    methods: {
      getPatriots(data) {
        console.log(data);
        PatriotService.fetchAssignPatriot(data).then(res => {
          this.patriotlist = res.data.patriots.docs;
          console.log(this.res);
        });
      },
      navigateTo (route) {
        this.$router.push(route)
      },
    },
    async mounted() {
      try {
        KeluargaService.fetchKeluarga().then(res => {
          // this.count = res.data.patriots.length;
          this.keluarga = res.data.keluargas.docs;
          console.log(this.keluarga);
        });
        // KeluargaService.getAddress(this.keluarga.address.desaId).then(res => {
        //   this.address = res.data;
        //   console.log(this.address)
        // })
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    components: {
      TambahData
    },
    props: {
      source: String
    }
  }
</script>