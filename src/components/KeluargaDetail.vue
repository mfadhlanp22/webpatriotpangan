<template>
<v-container>
  <v-card v-if="laporan.length==0">
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
        <v-flex class="pa-4">
          <h2>Laporan belum tersedia</h2>
        </v-flex>
      </v-layout>
    </v-tab-item>
  </v-tabs-items>
  </v-card>
  <v-card v-else>
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
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].datePelaporan.split("T")[0] }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Batas Pelaporan</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].batasPelaporan.split("T")[0] }}</h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Kondisi Pangan</h4>
        </v-flex>
        <v-flex xs9 v-if="laporan[0].kondisiPangan==1">
          <h4 class="pl-3 pt-3 font-weight-regular">: Taraf 1 </h4>
        </v-flex>
        <v-flex xs9 v-else-if="laporan[0].kondisiPangan==2">
          <h4 class="pl-3 pt-3 font-weight-regular">: Taraf 2 </h4>
        </v-flex>
        <v-flex xs9 v-else-if="laporan[0].kondisiPangan==3">
          <h4 class="pl-3 pt-3 font-weight-regular">: Taraf 3 </h4>
        </v-flex>
        <v-flex xs9 v-else-if="laporan[0].kondisiPangan==4">
          <h4 class="pl-3 pt-3 font-weight-regular">: Taraf 4</h4>
        </v-flex>
        <v-flex xs9 v-else-if="laporan[0].kondisiPangan==5">
          <h4 class="pl-3 pt-3 font-weight-regular">: Taraf 5 </h4>
        </v-flex>
        <v-flex xs9 v-else>
          <h4 class="pl-3 pt-3 font-weight-regular">: Belum ada laporan </h4>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs3>
          <h4 class="pl-3 pt-3 font-weight-regular">Deskripsi</h4>
        </v-flex>
        <v-flex xs9>
          <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].deskripsi }}</h4>
        </v-flex>
      </v-layout>
      <v-flex xs12 class="pa-3">
        <v-subheader>Indikator</v-subheader>
        <v-divider></v-divider>
      </v-flex>
      <v-layout row>
        <v-layout column>
          <v-flex xs8>
            <h4 class="pl-3 pt-3 font-weight-medium">Kondisi Rawan Pangan</h4>
          </v-flex>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya kekhawatiran kerawanan pangan</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isKurangPangan==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya perubahan jenis pangan</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isJenisPanganBerubah==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya penurunan frekuensi dan/atau jumlah konsumsi pangan orang dewasa</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isTurunKonsumsiDewasa==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya penurunan frekuensi dan/atau jumlah konsumsi pangan orang balita</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isTurunKonsumsiBalita==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Mengalami tidak makan dalam satu hari</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isTidakMakanSehari==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya penurunan berat badan balita dalam dua bulan terakhir karena kurang makan</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isTurunBeratBalita==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs9>
              <h4 class="pl-4 pt-3 font-weight-regular">Adanya penurunan berat badan orang dewasa karena kurang makan</h4>
            </v-flex>
            <v-flex xs3 v-if="laporan[0].laporanKerawanan.isTurunBeratDewasa==true">
              <h4 class="pl-3 pt-3 font-weight-regular">: ya</h4>
            </v-flex>
            <v-flex xs3 v-else>
              <h4 class="pl-3 pt-3 font-weight-regular">: tidak</h4>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout column>
          <v-flex xs4 v-if="laporan[0].kondisiPangan==1">
            <v-img :src="require('../assets/taraf_rawan_pangan_1.png')" width="150"></v-img>
          </v-flex>
          <v-flex xs4 v-else-if="laporan[0].kondisiPangan==2">
            <v-img :src="require('../assets/taraf_rawan_pangan_2.png')" width="150"></v-img>
          </v-flex>
          <v-flex xs4 v-else-if="laporan[0].kondisiPangan==3">
            <v-img :src="require('../assets/taraf_rawan_pangan_3.png')" width="150"></v-img>
          </v-flex>
          <v-flex xs4 v-else-if="laporan[0].kondisiPangan==4">
            <v-img :src="require('../assets/taraf_rawan_pangan_4.png')" width="150"></v-img>
          </v-flex>
          <v-flex xs4 v-else-if="laporan[0].kondisiPangan==5">
            <v-img :src="require('../assets/taraf_rawan_pangan_5.png')" width="150"></v-img>
          </v-flex>
          <v-flex xs4 v-else>
          </v-flex>
          <v-flex xs4>
            <h4 class="pt-3 font-weight-medium">Kondisi Lingkungan</h4>
          </v-flex>
          <v-layout row>
            <v-flex xs7>
              <h4 class="pl-3 pt-3 font-weight-regular">Kondisi cuaca</h4>
            </v-flex>
            <v-flex xs5>
              <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].laporanLingkungan.weatherCondition }}</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs7>
              <h4 class="pl-3 pt-3 font-weight-regular">Kondisi harga pangan</h4>
            </v-flex>
            <v-flex xs5>
              <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].laporanLingkungan.foodPriceCondition }}</h4>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs7>
              <h4 class="pl-3 pt-3 font-weight-regular">Kondisi ketersediaan pangan</h4>
            </v-flex>
            <v-flex xs5>
              <h4 class="pl-3 pt-3 font-weight-regular">: {{ laporan[0].laporanLingkungan.foodScarcityCondition }}</h4>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-layout>
      <v-flex xs12 class="pa-3">
        <v-subheader>Foto Pelaporan</v-subheader>
        <v-divider></v-divider>
      </v-flex>
      <v-layout row>
      <v-flex v-for="(item,i) in fotoLaporan"
      :key="i"
      class="pa-3"
      xs3 sm3>
        <!-- <v-img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"></v-img> -->
        <v-img
          :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/laporan/keluarga-miskin/images/${item}`"
        ></v-img>
      </v-flex>
      <!-- <v-flex xs3 sm3>
        <v-img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"></v-img>
        <v-img :src="`http://ci.apps.cs.ipb.ac.id/patriotpangan/api/${this.donaturData.donatur.selfImage}`">
        </v-img>
      </v-flex> -->
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
        'Data','Laporan'
      ],
      keluarga:{},
      laporan:{},
      fotoLaporan:[]
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
      this.laporan = (await KeluargaService.getLaporanById(keluargaId)).data.laporans.docs
      console.log(this.laporan)
      this.fotoLaporan = this.laporan[0].fotoLaporan
      // console.log(this.laporan)
    }
  }
</script>

<style>

</style>
