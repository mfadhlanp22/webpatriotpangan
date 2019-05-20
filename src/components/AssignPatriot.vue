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
              <h1>Data Keluarga Yang Belum Dipantau</h1>
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
                  :items="keluarga"
                  :search="search"
                  :rows-per-page-items="[10,20,50,100]"
                  :expand="expand"
                  item-key="_id"
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
                      <td class="text-xs-left"><a @click="props.expanded = !props.expanded; getPatriots(props.item);">Pilih Patriot</a></td>
                    <!-- <td class="text-xs-left"><ukm-detail :businessData="props.item"></ukm-detail></td> -->
                    </tr>
                  </template>
                  <template v-slot:expand="props">
                    <v-card flat color="grey lighten-4">
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
                          <v-flex xs12 md3>
                            <v-btn color="info" @click="addPatriot(); props.expanded = !props.expanded;">Simpan</v-btn>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
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
// import TambahData from "@/components/TambahDataKeluarga";
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
        ],
      keluarga: [],
      patriot: null,
      patriotlist: [],
      expand: false,
      search: '',
      idKeluarga: null
    }),
    // props: ["patriotAssignData"],
    methods: {
      async getPatriots(data) {
        const desa = data.address.desaId._id;
        const kecamatan = data.address.kecamatanId._id;
        const kabupaten = data.address.kabupatenId._id;
        const provinsi = data.address.provinsiId._id;
        this.idKeluarga = data._id;
        console.log(this.idKeluarga);
        await PatriotService.fetchAssignPatriot(desa,kecamatan,kabupaten,provinsi).then(res => {
          this.patriotlist = res.data.patriots.docs;
          console.log(this.patriot);
        });
      },
      async addPatriot() {
        KeluargaService.assignPatriot({
          _id: this.idKeluarga,
          patriotId: this.patriot,          
        });
        // this.expand = false;
      },
    },
    async mounted() {
      try {
        KeluargaService.fetchKeluarga().then(res => {
          // this.count = res.data.patriots.length;
          const item = res.data.keluargas.docs;
          item.forEach(v => {
            if(v.patriotId==null){
              this.keluarga.push(v)
            }
          });
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
      
    },
    props: {
      source: String
    }
  }
</script>