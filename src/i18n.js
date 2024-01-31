// i18n.js

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import commoni18n from './commoni18n.json'; // Adjust the path as needed

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // Default language
  messages: {
    en : commoni18n,
  }
});

export default i18n;