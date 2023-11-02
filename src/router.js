import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupForm from './components/SignupForm.vue';
import LandingPage from './components/LandingPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/sign-up', component: SignupForm, props: {companyName:"Sign Up Form"} },
  { path: '/landing-page', component: LandingPage, props: {companyName:"Landing Page"} },
];

const router = new VueRouter({
  routes,
});

export default router;
