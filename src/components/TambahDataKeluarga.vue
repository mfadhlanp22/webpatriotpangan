<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="#51B800" dark>Tambah Data</v-btn>
      <v-card>
        <!-- <v-card-title>
          <span class="headline">Masukkan Data Keluarga Miskin</span>
        </v-card-title> -->
        <v-toolbar dark color="#51B800" flat>
        <v-btn icon dark @click.native="dialog = !dialog">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Masukkan Data Keluarga Rawan Pangan</v-toolbar-title>
        </v-toolbar>
        <!-- <form enctype="multipart/form-data"> -->
        <v-form v-model="valid">
          <v-card-text>
            <v-flex>
              <v-btn 
                raised
                @click="onPickFile"
              >
                Upload File
              </v-btn>
              <input
                type="file"
                style="display: none"
                ref="file"
                @change="onFilePicked"
              />
              <v-subheader>{{filename}}</v-subheader>
            </v-flex>
          <!-- <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs4>
                <v-subheader>Nama Kepala Rumah Tangga :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field v-model="namaKrt" solo label="Masukkan Nama*" required></v-text-field>
              </v-flex> -->
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
              <!-- <v-flex xs4>
                <v-subheader>Pekerjaan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field solo v-model="pekerjaan" label="Masukkan Pekerjaan*" required></v-text-field>
              </v-flex> -->
              <!-- <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex> -->
              <!-- <v-flex xs4>
                <v-subheader>Provinsi :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-autocomplete
                  :items="provinsilist"
                  item-text="provinsi"
                  item-value="_id"
                  label="Provinsi"
                  required
                  v-model="provinsi"
                  solo
                ></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Kabupaten/Kota :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-autocomplete
                  :items="kabupatenlist"
                  item-text="kabupaten"
                  item-value="_id"
                  label="Kabupaten/Kota"
                  required
                  v-model="kabupaten"
                  solo
                ></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Kecamatan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-autocomplete
                  :items="kecamatanlist"
                  item-text="kecamatan"
                  item-value="_id"
                  label="Kecamatan"
                  required
                  v-model="kecamatan"
                  solo
                ></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Desa/Kelurahan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-autocomplete
                  :items="desalist"
                  item-text="desa"
                  item-value="_id"
                  label="Desa/Kelurahan"
                  required
                  v-model="desa"
                  solo
                ></v-autocomplete>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Jalan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-textarea v-model="jalan" auto-grow rows="3" solo label="Masukkan Jalan*" required></v-textarea>
              </v-flex>
              <v-flex xs4>
                <v-subheader>No.HP/Telepon :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field type="number" v-model="phone" solo label="Masukkan No.HP/Telepon*" required></v-text-field>
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
            <!-- </v-layout>
          </v-container>
          <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Batal</v-btn>
            <v-btn color="blue darken-1" flat @click="addKeluarga">Tambah</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import KeluargaService from '@/services/KeluargaService'

  export default {
    data: () => ({
      dialog: false,
      namaKrt: '',
      pekerjaan: '',
      provinsi: '',
      kabupaten: '',
      kecamatan: '',
      desa: '',
      jalan: '',
      phone: '',
      provinsilist: [],
      kabupatenlist: [],
      kecamatanlist: [],
      desalist: [],
      file: null,
      filename: '',
      valid: false
    }),
    methods: {
      async addKeluarga() {
        try{
          let formData = new FormData()
          formData.append('dataKeluargaMiskin', this.file)
          // console.log(this.imageFile, this.title, this.organizer, this.date, this.location, this.description)
          await KeluargaService.addKeluarga(formData).then(response => {
            console.log(response.data)
          })
        } catch (error) {
          this.error = error.response.data.error;
        }
      },
      onPickFile() {
        this.$refs.file.click()
      },
      onFilePicked(e) {
        const files = e.target.files
        console.log(files)
        if(files[0] !== undefined) {
          this.filename = files[0].name
          if (this.filename.lastIndexOf('.') <= 0) {
            return alert('Please add a valid file!')
          }
          const fr = new FileReader()
          fr.addEventListener("load", () => {
            this.file = files[0]; // this is an image file that can be sent to server...
          });
        } else {
          this.file = ''
          this.filename = ''
        }
        // console.log(this.file)
      }
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
    }
  }
</script>

<style>

</style>
