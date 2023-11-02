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
    this.$router.push('/sign-up');
  },

  data: () => ({
  }),
};
</script>
