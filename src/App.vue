<template>
  <v-app>
    <signup-form></signup-form>
  </v-app>
</template>

<script>
import SignupForm from './components/SignupForm.vue';

export default {
  name: 'App',

  components: {
    SignupForm,
  },

  data: () => ({
    //
  }),
};
</script>
