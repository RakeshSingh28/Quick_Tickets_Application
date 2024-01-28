<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  mounted() {
    if (this.$route.path !== '/sign-up') {
  this.$router.push('/sign-up');
    }
  },

  data: () => ({
  }),
};
</script>
