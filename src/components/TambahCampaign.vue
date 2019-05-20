<template>
<v-container>
  <v-card>
    <v-card-title>
      <span class="headline">Buat Campaign Kerawanan Pangan</span>
    </v-card-title>
    <v-form v-model="valid">
      <v-layout row wrap>
        <v-flex xs12 sm2>
          <v-subheader>Judul Campaign :</v-subheader>
        </v-flex>
        <v-flex xs12 sm4>
          <v-textarea v-model="judul" solo auto-grow rows="3" required></v-textarea>
        </v-flex>
        <v-flex>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <!-- <v-subheader class="ml-5 pl-5">Kategori :</v-subheader><br> -->
              <v-subheader class="pl-5 ml-5">Target Donasi :</v-subheader><br>
              <v-subheader class="pl-5 ml-5">Rekomendasi Donasi Barang :</v-subheader>
            </v-flex>
            <v-flex xs12 sm6 class="pr-5">
              <v-text-field persistent-hint hint="*masukkan nominal" type="number" v-model="targetDonasi" solo required></v-text-field>
              <!-- <v-text-field v-model="judul" solo required></v-text-field> -->
              <v-text-field v-model="rekomendasiBarang" solo required></v-text-field>            
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-subheader>Deskripsi Lengkap :</v-subheader>
          <v-textarea class="pl-3" v-model="deskripsi" solo auto-grow rows="5" required></v-textarea>
        </v-flex>
        <v-flex>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-subheader class="pl-5 ml-5">Durasi Campaign :</v-subheader><br>
              <v-subheader class="pl-5 ml-5 pt-5 pb-4">Provinsi :</v-subheader>
              <v-subheader class="ml-5 pl-5 pt-5">Kota/Kabupaten :</v-subheader>
            </v-flex>
            <v-flex xs12 sm6>
              <!-- <v-menu
                :close-on-content-click="true"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              > -->
                <v-text-field
                  type="number"
                  slot="activator"
                  v-model="lamaCampaign"
                  solo
                  class="pr-5"
                  required
                  persistent-hint 
                  hint="*masukkan durasi waktu campaign (hari)"
                ></v-text-field>
                <!-- <v-date-picker ref="picker" v-model="lamaCampaign" min="1950-01-01"></v-date-picker> -->
              <!-- </v-menu> -->
              <v-autocomplete
                :items="provinsilist"
                item-text="provinsi"
                required
                v-model="provinsi"
                solo
                class="pr-5"
                return-object
              ></v-autocomplete>
              <v-autocomplete
                :items="kabupatenlist"
                item-text="kabupaten"
                required
                v-model="kabupaten"
                solo
                class="pr-5"
                return-object
              ></v-autocomplete>        
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm2>
          <v-subheader>Video(Optional) :</v-subheader>
        </v-flex>
        <v-flex xs12 sm4>
          <v-text-field persistent-hint hint="*masukkan link youtube" class="pl-3" v-model="videoLink" solo required></v-text-field>
        </v-flex>
        <v-flex>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-subheader class="ml-5 pl-5">Kecamatan :</v-subheader><br>
            </v-flex>
            <v-flex xs12 sm6 class="pr-5">
              <v-autocomplete
                :items="kecamatanlist"
                item-text="kecamatan"
                required
                return-object
                v-model="kecamatan"
                solo
              ></v-autocomplete>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-subheader>Foto Kerawanan :</v-subheader>
          <upload-btn multiple='true' title="Upload Foto"></upload-btn>
          <!-- <v-text-field
            label="Pilih Gambar"
            @click="onPickFile"
            v-model="imageName"
            prepend-inner-icon="attach_file"
            solo
            readonly
            class="pl-3"
          ></v-text-field>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
            multiple
          >
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
          <!-- <v-flex xs3 v-for="url in imageUrl"
              :key="url"> -->
            <!-- <img class="pl-3" :src="imageUrl" height="150" v-if="imageUrl"> -->
          <!-- </v-flex> -->
        </v-flex>
        <v-flex>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-subheader class="ml-5 pl-5">Desa/Kelurahan :</v-subheader>
              <v-subheader class="ml-5 pl-5 pt-5 pb-5">Alamat :</v-subheader><br>           
              <v-subheader class="ml-5 pl-5 pt-5">Kode Pos :</v-subheader>
            </v-flex>
            <v-flex xs12 sm6 class="pr-5">
              <v-autocomplete
                :items="desalist"
                item-text="desa"
                required
                v-model="desa"
                solo
                return-object
              ></v-autocomplete> 
              <v-textarea auto-grow rows="3" v-model="jalan" solo required></v-textarea>
              <v-text-field v-model="kodePos" solo required></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- <div class="text-xs-right"> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="light-blue darken-4" dark @click="buatCampaign">Buat Campaign</v-btn>
      <!-- </div> -->
      </v-card-actions>
    </v-form>
  </v-card>
</v-container>
</template>

<script>
import KeluargaService from '@/services/KeluargaService'
import CampaignService from '@/services/CampaignService'
import UploadButton from 'vuetify-upload-button'

  export default {
    data: () => ({
      dialog: false,
      judul: '',
      deskripsi: '',
      provinsi: '',
      kabupaten: '',
      kecamatan: '',
      desa: '',
      rekomendasiBarang: '',
      targetDonasi: '',
      provinsilist: [],
      kabupatenlist: [],
      kecamatanlist: [],
      desalist: [],
      imageName: "",
      imageUrl: "",
      imageFile: "",
      valid: false,
      lamaCampaign: '',
      idCampaign:'',          
      // dateRules: [v => !!v || "Tanggal harus diisi"],
      videoLink:'',
      kodePos: '',
      jalan: ''
    }),
    components: {
      'upload-btn': UploadButton
    },
    methods: {
      onPickFile() {
        this.$refs.image.click()
      },
      onFilePicked(e) {
        const files = e.target.files;
        console.log(files);
        // for( var i = 0; i < files.length; i++ ){
          if (files[0] !== undefined) {
            this.imageName = files[0].name;
            if (this.imageName.lastIndexOf(".") <= 0) {
              return;
            }
            const fr = new FileReader();
            fr.readAsDataURL(files[0]);
            fr.addEventListener("load", () => {
              this.imageUrl = fr.result;
              this.imageFile = files[0]; // this is an image file that can be sent to server...
              console.log(this.imageUrl);
              console.log(this.imageFile);
            });
          } else {
            this.imageName = "";
            this.imageFile = "";
            this.imageUrl = "";
          }
        // }
        // console.log(this.file)
      },
      async buatCampaign() {
        try {
          // let formData = new FormData()
          // formData.append('judulCampaign', this.judul)
          // formData.append('lamaCampaign', this.lamaCampaign)
          // formData.append('deskripsi', this.deskripsi)
          // formData.append('targetDana', this.targetDonasi)
          // formData.append('rekomendasiBarang', this.rekomendasiBarang)
          // formData.append('urlVideoCampaign', this.videoLink)
          // formData.append('provinsiId', this.provinsi._id)
          // formData.append('namaProvinsi', this.provinsi.provinsi)
          // formData.append('kabupatenId', this.kabupaten._id)
          // formData.append('namaKabupaten', this.kabupaten.kabupaten)
          // formData.append('kecamatanId', this.kecamatan._id)
          // formData.append('namaKecamatan', this.kecamatan.kecamatan)
          // formData.append('desaId', this.desa._id)
          // formData.append('namaDesa', this.desa.desa)
          // formData.append('kodePos', this.kodePos)
          // formData.append('jalan', this.jalan)
          // console.log(this.imageFile, this.title, this.organizer, this.date, this.location, this.description)
          console.log(this.imageFile)
          // await CampaignService.createCampaign({
          //   judulCampaign: this.judul,
          //   lamaCampaign: this.lamaCampaign,
          //   deskripsi: this.deskripsi,
          //   targetDana: this.targetDonasi,
          //   rekomendasiBarang: this.rekomendasiBarang,
          //   urlVideoCampaign: this.videoLink,
          //   provinsiId: this.provinsi._id,
          //   namaProvinsi: this.provinsi.provinsi,
          //   kabupatenId: this.kabupaten._id,
          //   namaKabupaten: this.kabupaten.kabupaten,
          //   kecamatanId: this.kecamatan._id,
          //   namaKecamatan: this.kecamatan.kecamatan,
          //   desaId: this.desa._id,
          //   namaDesa: this.desa.desa,
          //   kodePos: this.kodePos,
          //   jalan: this.jalan,
          // }).then(response => {
          //   console.log(response.data)
          //   this.idCampaign = response.data.campaign._id
          // })
          let formData = new FormData()
            formData.append('fotoCampaign', this.imageFile) 
            for(var pair of formData.entries()) {
              console.log(pair[0]+ ', '+ pair[1]); 
            }
            // console.log(formData)
            await CampaignService.uploadFoto("5ca364632268ca6d9917eede", {formData}).then(res => {
              console.log(res.data)
            })
          this.$router.push({name:'home'})
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    },
    
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
    async mounted() {
      try {
        KeluargaService.fetchProvinsi().then(res => {
          // this.count = res.data.patriots.length;
          this.provinsilist = res.data.provinsies;
          console.log(res.data.provinsies);
          // console.log(this.provinsi);
        });
        KeluargaService.fetchKabupaten().then(res => {
          // this.count = res.data.patriots.length;
          this.kabupatenlist = res.data.kabupatens;
          // console.log(res.data.kabupatens);
        });
        KeluargaService.fetchKecamatan().then(res => {
          // this.count = res.data.patriots.length;
          this.kecamatanlist = res.data.kecamatans;
          // console.log(res.data.kecamatans);
        });
        KeluargaService.fetchDesa().then(res => {
          // this.count = res.data.patriots.length;
          this.desalist = res.data.desas;
          // console.log(res.data.desas);
        });
      } catch (error) {
        this.error = error.response.data.error;
    }
  }
}
</script>

<style>

</style>
