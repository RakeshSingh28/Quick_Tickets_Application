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
    if (this.$route.path.includes('/quick-tickets/signup'))
      this.$router.push('/quick-tickets/signup');
    else if(this.$route.path.includes('/quick-tickets/landing'))
      this.$router.push('/quick-tickets/landing');
    else if(this.$route.path.includes('/quick-tickets/signin'))
      this.$router.push('/quick-tickets/signin');
    else
      this.$router.push('/quick-tickets/startup')
  },

  data: () => ({
  }),
};
</script>
