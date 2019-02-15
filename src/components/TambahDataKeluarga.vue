<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="#51B800" dark>Tambah Data</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Masukkan Data Keluarga Miskin</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs4>
                <v-subheader>Nama Kepala Rumah Tangga :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field solo label="Masukkan Nama*" required></v-text-field>
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
              <v-flex xs4>
                <v-subheader>Pekerjaan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field solo label="Masukkan Pekerjaan*" required></v-text-field>
              </v-flex>
              <!-- <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex> -->
              <v-flex xs4>
                <v-subheader>Provinsi :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-select
                  :items="['Jawa Barat', 'Banten', 'Jawa Tengah', 'DKI Jakarta']"
                  label="Provinsi"
                  required
                  solo
                ></v-select>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Kabupaten/Kota :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-select
                  :items="['Bogor', 'Serang', 'Semarang', 'Jakarta Timur']"
                  label="Kabupaten/Kota"
                  required
                  solo
                ></v-select>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Kecamatan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-select
                  :items="['Dramaga', 'Cikande', 'Semarang', 'Pulo Gadung']"
                  label="Kecamatan"
                  required
                  solo
                ></v-select>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Desa/Kelurahan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-select
                  :items="['Ciherang', 'Sukatani', 'Semarang', 'Kayu Putih']"
                  label="Desa/Kelurahan"
                  required
                  solo
                ></v-select>
              </v-flex>
              <v-flex xs4>
                <v-subheader>Jalan :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field solo label="Masukkan Jalan*" required></v-text-field>
              </v-flex>
              <v-flex xs4>
                <v-subheader>No.HP/Telepon :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field solo label="Masukkan No.HP/Telepon*" required></v-text-field>
              </v-flex>
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
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Batal</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Tambah</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>

<style>

</style>
