<template>
<v-container>
  <v-card>
    <v-tabs
      v-model="tab" 
      left
    >
    <v-tab
      v-for="item in items"
      :key="item"
      class="text-capitalize"
    >
      {{ item }}
    </v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
    <v-tab-item :key="items[0]" centered>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Nama Kepala Rumah Tangga</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.namaKRT }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Pekerjaan Kepala Rumah Tangga</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.pekerjaanKRT }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Provinsi</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.provinsiId.provinsi }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Kota/Kabupaten</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.kabupatenId.kabupaten }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Kecamatan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.kecamatanId.kecamatan }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Desa/Kelurahan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.desaId.desa }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Jalan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.jalan }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">No. Telepon/HP</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.phone }}</h4>
        </v-flex>
      </v-layout>
      <v-flex xs12 class="pa-3">
        <v-subheader>Patriot</v-subheader>
        <v-divider></v-divider>
      </v-flex>
      <v-layout>
        <v-flex xs3>
          <h4 class="pa-3 font-weight-regular">Patriot yang menangani</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pa-3 font-weight-regular" v-if="keluarga.patriotId!=null">: {{ keluarga.patriotId.name }}</h4>
          <h4 class="pa-3 font-weight-regular" v-else>: Belum Dipantau</h4>
        </v-flex>
      </v-layout>
    </v-tab-item>
    <v-tab-item :key="items[1]" centered>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Tanggal Pelaporan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.namaKRT }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Batas Pelaporan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.pekerjaanKRT }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Kondisi Pangan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.jalan }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Deskripsi</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.kabupatenId.kabupaten }}</h4>
        </v-flex>
      </v-layout>
      <v-flex xs12 class="pa-3">
        <v-subheader>Indikator</v-subheader>
        <v-divider></v-divider>
      </v-flex>
      <v-layout column>
        <v-layout row>
          <v-flex xs6>
            <h4 class="pl-3 pt-3 font-weight-regular">Kondisi Rawan Pangan</h4>
          </v-flex>
        </v-layout>
          <v-flex xs9>
            <h4 class="pl-3 pt-3 font-weight-regular">: {{ keluarga.address.kabupatenId.kabupaten }}</h4>
          </v-flex>
      </v-layout>
      <v-flex xs12>
        <v-subheader>Foto Pelaporan</v-subheader>
        <v-divider></v-divider>
      </v-flex>
      <v-layout row>
      <v-flex xs3 sm3>
        <v-img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"></v-img>
        <!-- <v-img
          :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.donaturData.donatur.ktpImage}`"
        ></v-img> -->
      </v-flex>
      <v-flex xs3 sm3>
        <v-img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"></v-img>
        <!-- <v-img :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.donaturData.donatur.selfImage}`">
        </v-img> -->
      </v-flex>
      </v-layout>
    </v-tab-item>
  </v-tabs-items>
    <!-- <v-toolbar dark color="light-blue darken-4" flat>
    <v-toolbar-title>test</v-toolbar-title>
    <v-spacer></v-spacer>
  <v-tabs
    slot="extension"
    v-model="tab"
    color="light-blue darken-4"
          grow
  >
    <v-tabs-slider color="cyan"></v-tabs-slider>
    <v-tab
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </v-tab>
  </v-tabs>      
  </v-toolbar>
  <v-tabs-items v-model="tab">
    <v-tab-item :key="items[0]" centered>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs10>
            <v-card>
              <v-card-text class="px-0">
                <v-list two-line subheader>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Nama Event</v-list-tile-title>
                      <v-list-tile-sub-title>d</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Penyelenggara</v-list-tile-title>
                      <v-list-tile-sub-title>s</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Waktu Pelaksanaan</v-list-tile-title>
                      <v-list-tile-sub-title>s</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Lokasi</v-list-tile-title>
                      <v-list-tile-sub-title>x</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Deskripsi</v-list-tile-title>
                      <v-list-tile-action-text></v-list-tile-action-text>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>
    <v-tab-item :key="items[1]" centered>
      <v-container grid-list-md text-xs-left fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-title>Daftar Pengusaha
                <v-spacer></v-spacer>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs-items> -->
  </v-card>
</v-container>
</template>

<script>
import KeluargaService from '@/services/KeluargaService'

  export default {
    data: () => ({
      dialog: false,
      tab: null,
      items: [
        'Data'
      ],
      keluarga:{}
    }),
    methods: {
      // async addKeluarga() {
      //   try{
      //     let formData = new FormData()
      //     formData.append('dataKeluargaMiskin', this.file)
      //     // console.log(this.imageFile, this.title, this.organizer, this.date, this.location, this.description)
      //     await KeluargaService.addKeluarga(formData).then(response => {
      //       console.log(response.data)
      //     })
      //   } catch (error) {
      //     this.error = error.response.data.error;
      //   }
      // },
      // onPickFile() {
      //   this.$refs.image.click()
      // },
      // onFilePicked(e) {
      //   const files = e.target.files;
      //   console.log(files);
      //   for( var i = 0; i < files.length; i++ ){
      //     if (files[i] !== undefined) {
      //       this.imageName = files[i].name;
      //       if (this.imageName.lastIndexOf(".") <= 0) {
      //         return;
      //       }
      //       const fr = new FileReader();
      //       fr.readAsDataURL(files[i]);
      //       fr.addEventListener("load", () => {
      //         this.imageUrl = fr.result;
      //         this.imageFile = files[i]; // this is an image file that can be sent to server...
      //       });
      //     } else {
      //       this.imageName = "";
      //       this.imageFile = "";
      //       this.imageUrl = "";
      //     }
      //   }
      //   // console.log(this.file)
      // }
    //         const response = await KeluargaService.addKeluarga({
    //         namaKRT: this.namaKrt,
    //         pekerjaanKRT: this.pekerjaan,
    //         provinsiId: this.provinsi,
    //         kabupatenId: this.kabupaten,
    //         kecamatanId: this.kecamatan,
    //         desaId: this.desa,
    //         jalan: this.jalan,
    //         phone: this.phone,            
    //       })
    //       this.dialog = false
    //     }
    //     catch(error) {
    //       this.error = error.response.data.error
    //     }
    //   }
    // },
    // async mounted() {
    //   try {
    //     KeluargaService.fetchProvinsi().then(res => {
    //       // this.count = res.data.patriots.length;
    //       this.provinsilist = res.data.provinsies;
    //       console.log(res.data.provinsies);
    //       // console.log(this.provinsi);
    //     });
    //     KeluargaService.fetchKabupaten().then(res => {
    //       // this.count = res.data.patriots.length;
    //       this.kabupatenlist = res.data.kabupatens;
    //       // console.log(res.data.kabupatens);
    //     });
    //     KeluargaService.fetchKecamatan().then(res => {
    //       // this.count = res.data.patriots.length;
    //       this.kecamatanlist = res.data.kecamatans;
    //       // console.log(res.data.kecamatans);
    //     });
    //     KeluargaService.fetchDesa().then(res => {
    //       // this.count = res.data.patriots.length;
    //       this.desalist = res.data.desas;
    //       // console.log(res.data.desas);
    //     });
    //   } catch (error) {
    //     this.error = error.response.data.error;
    },
    async mounted() {
      const keluargaId = this.$route.params.keluargaId
      this.keluarga = (await KeluargaService.getKeluargaById(keluargaId)).data.keluarga
      // console.log(this.keluarga)
    }
  }
</script>

<style>

</style>
