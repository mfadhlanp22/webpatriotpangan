<template>
  <v-layout>
    <a @click="dialog = true">Verifikasi</a>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <!-- <v-card-title>
          <span class="headline">Masukkan Data Keluarga Miskin</span>
        </v-card-title> -->
        <v-toolbar dark color="#51B800" flat>
        <v-btn icon dark @click.native="dialog = !dialog">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Calon Patriot</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-md>
            <!-- <v-layout row wrap> -->
              <v-flex
                xs12
                align-center
                justify-center
                layout
                text-xs-center
              >
                <v-avatar
                  size="150px"
                  color="grey lighten-4"
                >
                  <v-img :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.patriotData.patriot.selfImage}`">
                  </v-img>
                </v-avatar>
              </v-flex>
              <v-flex xs12>
                <v-subheader>Data Diri</v-subheader>
                <v-divider></v-divider>
              </v-flex>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 pt-3 font-weight-regular">Nama Lengkap</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 pt-3 font-weight-regular">: {{patriotData.name}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Tanggal Lahir</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.birthDate.split("T")[0]}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular" v-if="patriotData.gender==='P'">Jenis Kelamin</h4>
                  <h4 class="pl-3 font-weight-regular" v-else>Jenis Kelamin</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular" v-if="patriotData.gender==='P'">: Perempuan</h4>
                  <h4 class="pl-3 font-weight-regular" v-else>: Laki-Laki</h4>   
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Email</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.email}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Telepon</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.homePhone}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Handphone</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.phone}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Provinsi</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.address.provinsi.provinsi}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Kota/Kabupaten</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.address.kabupaten.kabupaten}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Kecamatan</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.address.kecamatan.kecamatan}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Desa/Kelurahan</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.address.desa.desa}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 font-weight-regular">Jalan</h4>
                </v-flex>
                <v-flex xs8>
                  <h4 class="pl-3 font-weight-regular">: {{patriotData.address.jalan}}</h4>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs4>
                  <h4 class="pl-3 pb-3 font-weight-regular">Jenis Tempat Tinggal</h4>
                </v-flex>
                <v-flex xs8>
                 <h4 class="pl-3 pb-3 font-weight-regular">: {{patriotData.address.jenisTempatTinggal}}</h4>
                </v-flex>
              </v-layout>
              <v-flex xs12>
                <v-subheader>Data Pendukung</v-subheader>
                <v-divider></v-divider>
              </v-flex>
            <v-layout>
              <v-flex xs6 sm6>
                <v-img
                  :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.patriotData.patriot.ktpImage}`"
                ></v-img>
              </v-flex>

              <v-flex xs6 sm6>
                <v-img :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.patriotData.patriot.selfImage}`">
                </v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">Batal</v-btn>
          <v-btn dark color="#51B800" @click="verifPatriot(patriotData._id,patriotData)">Verifikasi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import PatriotService from "@/services/PatriotService";

  export default {
    data: () => ({
      dialog: false
    }),
    props: ["patriotData"],
    methods: {
      verifPatriot(patriotId,item) {
        try {
          PatriotService.activatePatriot(patriotId).then(res => {
            // const index = this.patriotData.indexOf(item)
            // this.patriotData.splice(index, 1)
            this.dialog = false
            // this.$router.push({name:'verPatriot'})
          })
        }
        catch(error) {
          this.error = error.response
        }
      }
    }
  }
  
</script>

<style>

</style>
