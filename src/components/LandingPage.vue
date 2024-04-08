<template>
    <v-container fluid grid-list-md class="pa-0 pt-2">
      <v-card width="100vw" color="black" class="mt-1" style="z-index: 1">
        <v-row class="d-flex justify-space-around">
          <h3 class="white--text">{{ companyName }}</h3>
        </v-row>
      </v-card>
      <div class="bground">
        <v-row class="d-flex justify-space-around">
        </v-row>
      </div>
    </v-container>
  </template>
  <script>
  export default {
    name: "LandingPage",
    components: {},
    props: {
      companyName: {
        type: String,
        default: () => {this.$t("common.company.name")},
      },
    },
    data() {
      return {
        
      };
    },
    mounted() {
    },
    methods: {
      
    },
  };
  </script>
  <style scoped src="./QuickTicketsPage.css"></style>