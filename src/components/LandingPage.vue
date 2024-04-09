<template>
    <v-container fluid grid-list-md class="pa-0">
    <v-card width="100vw" height="80px" class="signup__top-bar d-flex align-center" elevation="0">
      <v-row class="d-flex justify-space-around">
        <div class="d-flex justify-space-around startup__title">
        <img src="@/assets/quick-tickets.png" width="40" height="40" alt="Quick Tickets">
        <h3 class="black--text logo">{{ companyName }}</h3>
        </div>
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