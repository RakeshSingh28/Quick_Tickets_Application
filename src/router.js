import Vue from "vue";
import VueRouter from "vue-router";
import SignupForm from "./components/SignupForm.vue";
import LandingPage from "./components/LandingPage.vue";
import StartupPage from "./components/StartupPage.vue";
import SigninForm from "./components/SigninForm.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", component: StartupPage },
  {
    path: "/quick-tickets/signup",
    component: SignupForm,
    props: { companyName: "Quick Tickets" },
  },
  {
    path: "/quick-tickets/signin",
    component: SigninForm,
    props: { companyName: "Quick Tickets" },
  },
  {
    path: "/quick-tickets/home",
    component: LandingPage,
    props: { companyName: "Quick Tickets" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
