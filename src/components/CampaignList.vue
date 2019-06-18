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
              <h1>Daftar Campaign</h1>
            </div>
            <div class="pl-4 pr-4 pt-4 pb-4">
              <v-card>
                <v-card-title>
                  <v-btn color="#51B800" dark @click="navigateTo({name: 'buatCampaign'})">Buat Campaign</v-btn>                  
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
                  :items="campaigns"
                  :search="search"
                  :rows-per-page-items="[10,20,50,100]"
                  :expand="expand"
                  item-key="_id"
                >
                  <!-- <template slot="items" slot-scope="props"> -->
                  <template v-slot:items="props">
                    <!-- <tr> -->
                    <!-- <td class="text-xs-left">{{ props.item.name }}</td> -->
                      <td class="text-xs-left">{{ props.item.judulCampaign }}</td>
                      <td class="text-xs-left">{{ props.item.userId.name }}</td>
                      <!-- <td class="text-xs-left">Stunting</td> -->
                      <td class="text-xs-left">{{ props.item.dateFinish.split("T")[0] }}</td>
                      <td class="text-xs-left">{{ props.item.targetDana }}</td>
                      <td class="text-xs-left">{{ props.item.danaTerkumpul }}</td>
                      <td class="text-xs-left font-italic" v-if="props.item.isDone==false && props.item.isVerified=='false'">Belum Dimulai</td>
                      <td class="text-xs-left font-italic" v-else-if="props.item.isDone==false && props.item.isVerified=='true'">Sedang Berlangsung</td>
                      <td class="text-xs-left" v-else> Selesai </td>
                      <!-- <td class="text-xs-left">{{ props.item.s }}</td> -->
                      <td class="text-xs-left" v-if="props.item.isVerified=='false'"><verif-campaign :campaignData="props.item" :campaignFoto="props.item.fotoCampaign"/></td>
                      <td class="text-xs-left font-italic" v-else-if="props.item.isVerified=='true'"> Telah Terverifikasi </td>
                      <td class="text-xs-left font-italic" v-else> Ditolak </td>
                    <!-- <td class="text-xs-left"><ukm-detail :businessData="props.item"></ukm-detail></td> -->
                    <!-- </tr> -->
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
import VerifCampaign from "@/components/VerifCampaign";
import CampaignService from "@/services/CampaignService";
// import PatriotService from "@/services/PatriotService";

  export default {
    data: () => ({
      headers: [
          // { text: 'No', sortable: false, value: '' },
          { text: 'Judul Campaign', value: 'judulCampaign' },
          { text: 'Pembuat', value: 'userId.name' },
          // { text: 'Kategori', value: 'prov' },
          { text: 'Batas Periode', value: 'dateFinish' },
          { text: 'Target Dana', value: 'targetDana' },
          { text: 'Dana Terkumpul', value: 'danaTerkumpul' },
          { text: 'Status', sortable: false },
          // { text: 'Status', value: 'desa' },
          { text: 'Verifikasi Campaign', value: 'isVerified' }
        ],
      campaigns: [],
      patriot: null,
      patriotlist: [],
      expand: false,
      search: '',
      dialog: false,
      // drawer: null,
    }),
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
    },
    async mounted() {
      try {
        CampaignService.fetchCampaign().then(res => {
          // this.count = res.data.patriots.length;
          this.campaigns = res.data.campaigns.docs;
          console.log(this.campaigns);
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    components: {
      VerifCampaign
    },
    props: {
      source: String
    }
  }
</script>