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
  <style scoped>
  .bground {
    background-image: url("https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    background-size: cover;
    min-height: calc(100vh - 16px);
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  </style>
  