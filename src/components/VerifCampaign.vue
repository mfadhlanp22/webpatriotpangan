<template>
  <v-layout>
    <a @click="dialog = true">Verifikasi</a>
    <v-dialog v-model="dialog" persistent max-width="1100px">
      <v-card>
        <!-- <v-card-title>
          <span class="headline">Masukkan Data Keluarga Miskin</span>
        </v-card-title> -->
        <v-toolbar dark color="#51B800" flat>
        <v-btn icon dark @click.native="dialog = !dialog">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Verifikasi Campaign</v-toolbar-title>
        </v-toolbar>
        <v-card-title>
          <span class="headline text-capitalize">{{campaignData.judulCampaign}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row>
              <!-- <v-flex xs12>
                <v-flex
                  xs12
                  sm6
                  md8
                  align-center
                  justify-center
                  layout
                  text-xs-center></v-flex>
                <v-avatar size="100px">
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
              </v-flex> -->
              <v-flex
                xs6
                text-xs-center
                class="pa-2"
              >
              <v-carousel height=380>
                <v-carousel-item
                  v-for="(item,i) in campaignFoto"
                  :key="i"
                  :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/campaign/images/${item}`"
                ></v-carousel-item>
              </v-carousel>
              <!-- v-for="(n,index) in campaignData.fotoCampaign"
                :key="index" -->
                <!-- <v-avatar
                  size="150px"
                  color="grey lighten-4"
                > -->
                  <!-- <v-img :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/campaign/images/${this.campaignData.fotoCampaign}`">
                  </v-img> -->
                <!-- </v-avatar> -->
              </v-flex>
              <v-flex xs6>
                <v-list two-line>
                  <v-list-tile avatar class="pl-5">
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold">Nama Pembuat Campaign</v-list-tile-title>
                      <v-list-tile-action-text class="headline">{{campaignData.userId.name}}</v-list-tile-action-text>
                      <!-- <v-list-tile-action-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-list-tile-action-text> -->
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar class="pl-5">
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold">Alamat Pembuat Campaign</v-list-tile-title>
                      <v-list-tile-action-text class="headline">{{campaignData.userId.address.jalan}}</v-list-tile-action-text>
                      <!-- <v-list-tile-action-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-list-tile-action-text> -->
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar class="pl-5">
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold">Target Donasi</v-list-tile-title>
                      <v-list-tile-action-text class="headline">Rp. {{campaignData.targetDana}}</v-list-tile-action-text>
                      <!-- <v-list-tile-action-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-list-tile-action-text> -->
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar class="pl-5">
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold">Batas Periode Campaign</v-list-tile-title>
                      <v-list-tile-action-text class="headline">{{campaignData.dateFinish.split("T")[0]}}</v-list-tile-action-text>
                      <!-- <v-list-tile-action-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</v-list-tile-action-text> -->
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar class="pl-5">
                    <v-list-tile-content>
                      <v-list-tile-title class="font-weight-bold">Rekomendasi Barang</v-list-tile-title>
                      <v-list-tile-action-text v-for="(item,i) in campaignData.rekomendasiBarang" :key="i">{{item}}</v-list-tile-action-text>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
            <v-flex>
              <v-list two-line>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title class="font-weight-bold">Deskripsi</v-list-tile-title>
                    <v-list-tile-action-text>{{ campaignData.deskripsi }}</v-list-tile-action-text>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              </v-flex>
              <!-- <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex> -->
              <!-- <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex> -->
              <!-- <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex> -->
            <!-- </v-layout> -->
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="rejectCampaign(campaignData._id)">Tolak</v-btn>
          <v-btn dark color="#51B800" @click="verifyCampaign(campaignData._id)">Verifikasi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import CampaignService from "@/services/CampaignService";

  export default {
    data: () => ({
      dialog: false,
      foto: []
    }),
    props: ["campaignData","campaignFoto"],
    methods: {
      verifyCampaign(campaignId) {
        try {
          CampaignService.verifCampaign(campaignId).then(res => {
            // const index = this.patriotData.indexOf(item)
            // this.patriotData.splice(index, 1)
            this.dialog = false
            // this.$router.push({name:'verPatriot'})
          })
        }
        catch(error) {
          this.error = error.response
        }
      },
      rejectCampaign(campaignId) {
        try {
          CampaignService.rejectCampaign(campaignId).then(res => {
            // const index = this.patriotData.indexOf(item)
            // this.patriotData.splice(index, 1)
            this.dialog = false
            // this.$router.push({name:'verPatriot'})
          })
        }
        catch(error) {
          this.error = error.response
        }
      },
      activate() {
        this.dialog = true
      },

    },
    // async mounted() {
    //   try {
    //     CampaignService.getCampaignById(campaignData._id).then(res => {
    //       // this.count = res.data.patriots.length;
    //       this.foto = res.data.campaign.fotoCampaign;
    //       console.log(this.campaigns);
    //     });
    //   } catch (error) {
    //     this.error = error.response.data.error;
    //   }
    // }
  }
  
</script>

<style>

</style>
