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
              <h1>Data Patriot</h1>
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
                  :items="patriots"
                  :search="search"
                  :custom-sort="customSort"
                  :rows-per-page-items="[10,20,50,100]"
                >
                  <template slot="items" slot-scope="props">
                    <!-- <td class="text-xs-left">{{ count+1 }}</td> -->
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.email }}</td>
                    <td class="text-xs-left">{{ props.item.address.provinsi.provinsi }}</td>
                    <td class="text-xs-left">{{ props.item.address.kabupaten.kabupaten }}</td>
                    <td class="text-xs-left">{{ props.item.address.kecamatan.kecamatan }}</td>
                    <td class="text-xs-left">{{ props.item.address.desa.desa }}</td>
                    <td class="text-xs-left" v-if="props.item.patriot.isActive===false"><patriot-detail :patriotData="props.item"></patriot-detail></td>
                    <td class="text-xs-left" v-else><patriot-detail :patriotData="props.item"></patriot-detail></td>
                    <!-- <td class="text-xs-left"><ukm-detail :businessData="props.item"></ukm-detail></td> -->
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
import PatriotService from "@/services/PatriotService";
import PatriotDetail from "@/components/PatriotDetail";

  export default {
    data: () => ({
      headers: [
          // { text: 'NO', sortable: false },
          { text: 'Nama Lengkap', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Provinsi', value: 'address.provinsi.provinsi' },
          { text: 'Kota/Kabupaten', value: 'address.kabupaten.kabupaten' },
          { text: 'Kecamatan', value: 'address.kecamatan.kecamatan' },
          { text: 'Desa/Kelurahan', value: 'address.desa.desa' },
          { text: 'Verifikasi Akun', value: 'patriot.isActive' }
        ],
      patriots: [],
      dialog: false,
      search: '',
      // count: 0
      // drawer: null,
    }),
    methods: {
      // deactivatePatriot(patriotId) {
      //   try {
      //     PatriotService.deactivatePatriot(patriotId).then(res => {
      //       // const index = this.patriotData.indexOf(item)
      //       // this.patriotData.splice(index, 1)
      //       // this.dialog = false
      //       // this.$router.push({name:'verPatriot'})
      //     })
      //   }
      //   catch(error) {
      //     this.error = error.response
      //   }
      // }
      // customSort(items, index, isDescending) {
      //   // The following is informations as far as I researched.
      //   // items: 'food' items
      //   // index: Enabled sort headers value. (black arrow status).
      //   // isDescending: Whether enabled sort headers is desc
      //   items.sort((a, b) => {
      //       if (index === 'patriot.isActive') {
      //         if (isDescending) {
      //           return compare(b.patriot.isActive,a.patriot.isActive);
      //         } else {
      //           return compare(a.patriot.isActive,b.patriot.isActive);
      //         }
      //       } else {
      //         if (isDescending) {
      //           return a[index] < b[index] ? -1 : 1;
      //         } else {
      //           return b[index] < a[index] ? -1 : 1;
      //         }
      //       }
      //   });
      //   return items;
      // }
    },
    components: {
      PatriotDetail
    },
    props: {
      source: String
    },
    created() {
      store.dispatch("setItem", "Patriot");
      store.dispatch("setSubItem", "verPatriot");
    },
    async mounted() {
      try {
        PatriotService.fetchPatriot().then(res => {
          // this.count = res.data.patriots.length;
          this.patriots = res.data.patriots.docs;
          console.log(res.data.patriots.docs);
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
</script>