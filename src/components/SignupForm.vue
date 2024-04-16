<template>
  <v-container fluid grid-list-md class="pa-0">
    <v-card
      width="100vw"
      height="80px"
      class="signup__top-bar d-flex align-center"
      elevation="0"
    >
      <v-row class="d-flex justify-space-around">
        <div class="d-flex justify-space-around startup__title">
          <img
            src="@/assets/quick-tickets.png"
            width="40"
            height="40"
            alt="Quick Tickets"
          />
          <h3 class="black--text logo">{{ companyName }}</h3>
        </div>
      </v-row>
    </v-card>
    <div class="bground">
      <v-row class="d-flex justify-space-around">
        <v-col cols="12" class="d-flex justify-center pa-0">
          <h4>
            {{ $t("common.account.exist") }}
            <a href="#/quick-tickets/signin" class="text-decoration-none">{{
              $t("common.sign.in")
            }}</a>
          </h4>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-card outlined class="dialog-height">
            <v-row class="pt-6 d-flex justify-space-around">
              <h4>{{ $t("common.create.account") }}</h4>
            </v-row>
            <div class="border-col">
              <v-col cols="12" class="pb-0">
                <v-text-field
                  :key="reset + 'name'"
                  v-model="name"
                  :rules="nameRule"
                  :label="$t('common.user.name')"
                  color="cyan"
                  filled
                  clearable
                  dense
                ></v-text-field>
                <v-text-field
                  :key="reset + 'email'"
                  v-model="email"
                  :rules="emailRule"
                  :label="$t('common.email')"
                  type="email"
                  color="cyan"
                  filled
                  clearable
                  dense
                ></v-text-field>
                <v-text-field
                  :key="reset + 'pswrd'"
                  v-model="password"
                  :label="$t('common.password')"
                  :rules="passwordRule"
                  color="cyan"
                  :type="showPassword ? 'text' : 'password'"
                  filled
                  dense
                  :append-icon="
                    password ? (showPassword ? 'mdi-eye-off' : 'mdi-eye') : ''
                  "
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-text-field
                  :key="reset + 'cnfrmpswrd'"
                  v-model="cnfrmpassword"
                  :type="showCnfrmPassword ? 'text' : 'password'"
                  :rules="cnfrmpasswordRule"
                  :label="$t('common.confirm.password')"
                  color="cyan"
                  filled
                  dense
                  :append-icon="
                    cnfrmpassword
                      ? showCnfrmPassword
                        ? 'mdi-eye-off'
                        : 'mdi-eye'
                      : ''
                  "
                  @click:append="showCnfrmPassword = !showCnfrmPassword"
                ></v-text-field>
                <v-row>
                  <v-col cols="5">
                    <v-autocomplete
                      filled
                      dense
                      color="cyan"
                      :label="$t('common.country.code')"
                      :items="item1"
                      :key="reset + 'countrycode'"
                      v-model="countryCode"
                      @change="onCountryCodeChange"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="7">
                    <v-text-field
                      filled
                      clearable
                      dense
                      type="number"
                      hide-spin-buttons
                      :disabled="!countryCode"
                      color="cyan"
                      :label="$t('common.mobile.number')"
                      :key="reset + 'mob'"
                      v-model="mobnumber"
                      :rules="mobnumberRule"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-autocomplete
                  filled
                  dense
                  color="cyan"
                  :label="$t('common.country')"
                  :items="item2"
                  :key="reset + 'country'"
                  v-model="country"
                  :rules="countryRule"
                  @change="onCountryChange"
                ></v-autocomplete>
                <p class="quick-tickets--policy">
                  {{ $t("common.company.agreement") }}
                  <a class="quick-tickets-a--policy text-decoration-none">{{
                    $t("common.terms.of.use")
                  }}</a>
                  and
                  <a class="quick-tickets-a--policy text-decoration-none">{{
                    $t("common.privacy.policy")
                  }}</a
                  >.
                </p>
              </v-col>
            </div>
            <v-card-actions class="btn-pos">
              <v-row class="align d-flex align-center">
                <v-spacer />
                <v-btn
                  @click="clearAll"
                  :disabled="clearAllDisabled"
                  color="error"
                  class="white--text capitalize-text"
                  >{{ $t("common.clear.all") }}</v-btn
                >
                <v-snackbar
                  transition="scale-transition"
                  right
                  v-model="snackbar"
                >
                  <div>
                    <v-img
                      width="20"
                      height="20"
                      src="../assets/success.svg"
                    ></v-img>
                    <span class="snackbar-style">{{ text }}</span>
                  </div>
                  <template v-slot:action="{ on }">
                    <v-btn
                      color="success"
                      text
                      v-on="on"
                      @click="snackbar = false"
                    >
                      {{ $t("common.close") }}
                    </v-btn>
                  </template>
                </v-snackbar>
                <v-snackbar
                  transition="scale-transition"
                  right
                  v-model="snackbar1"
                >
                  <div>
                    <v-img
                      width="20"
                      height="20"
                      src="../assets/Error.svg"
                    ></v-img>
                    <span class="snackbar-style">{{ text1 }}</span>
                  </div>
                  <template v-slot:action="{ on }">
                    <v-btn
                      color="error"
                      text
                      v-on="on"
                      @click="snackbar1 = false"
                    >
                      {{ $t("common.close") }}
                    </v-btn>
                  </template>
                </v-snackbar>
                <v-btn
                  @click="signUp"
                  :disabled="signUpDisabled"
                  color="primary"
                  class="ml-2 capitalize-text"
                  >{{ $t("common.sign.up") + "!" }}</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "SignupForm",
  props: {
    companyName: {
      type: String,
      default: () => {
        this.$t("common.company.name");
      },
    },
  },
  data() {
    return {
      items: [],
      item1: [],
      item2: [],
      reset: 0,
      email: "",
      name: "",
      nameRule: [(v) => !!v || this.$t("common.required.user.name")],
      emailRule: [
        (v) => !!v || this.$t("common.required.email"),
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          this.$t("common.email.valid"),
      ],
      showPassword: false,
      passwordRule: [
        (v) => !!v || this.$t("common.required.password"),
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          this.$t("common.password.length"),
      ],
      showCnfrmPassword: false,
      cnfrmpasswordRule: [
        (v) => !!v || this.$t("common.required.confirm.password"),
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          this.$t("common.password.length"),
      ],
      countryRule: [(v) => !!v || this.$t("common.required.country")],
      mobnumberRule: [
        (v) => !!v || this.$t("common.required.mobile.number"),
        (v) =>
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) ||
          this.$t("common.mobile.number.valid"),
      ],
      password: "",
      cnfrmpassword: "",
      mobnumber: "",
      country: "",
      countryCode: "",
      snackbar: false,
      snackbar1: false,
      text: this.$t("common.sign-up.success"),
      text1: this.$t("common.password.confirm.password.valid"),
    };
  },
  mounted() {
    this.callApi();
  },
  computed: {
    clearAllDisabled() {
      return !(
        this.name ||
        this.email ||
        this.password ||
        this.cnfrmpassword ||
        this.country ||
        this.mobnumber ||
        this.countryCode
      );
    },
    signUpDisabled() {
      return !(
        this.name &&
        this.email &&
        this.mobnumber &&
        this.countryCode &&
        this.password &&
        this.cnfrmpassword &&
        this.password.length <= 15 &&
        this.password.length >= 8 &&
        this.cnfrmpassword.length <= 15 &&
        this.cnfrmpassword.length >= 8 &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email) &&
        this.country &&
        /^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobnumber)
      );
    },
  },
  methods: {
    onCountryChange(val) {
      let singleData = this.items.find((value) => value.name == val);
      this.countryCode = "";
      this.countryCode =
        singleData.alpha3Code + "(+" + singleData.callingCodes[0] + ")";
    },
    onCountryCodeChange(val) {
      let singleData = this.items.find(
        (value) => value.alpha3Code + "(+" + value.callingCodes[0] + ")" == val
      );
      this.country = "";
      this.country = singleData.name;
    },
    async callApi() {
      const allApiData = await axios.get("https://restcountries.com/v2/all");
      this.items = allApiData.data;
      this.items.forEach((item) => {
        this.item1.push(item.alpha3Code + "(+" + item.callingCodes[0] + ")");
        this.item2.push(item.name);
      });
    },
    clearAll() {
      this.name =
        this.email =
        this.password =
        this.cnfrmpassword =
        this.country =
        this.countryCode =
        this.mobnumber =
          "";
      this.reset++;
    },
    signUp() {
      if (this.password === this.cnfrmpassword) {
        this.snackbar = true;
        setTimeout(() => {
          this.name =
            this.email =
            this.password =
            this.cnfrmpassword =
            this.country =
            this.countryCode =
            this.mobnumber =
              "";
          this.reset++;
          this.$router.push("/quick-tickets/landing");
        }, 500);
      } else this.snackbar1 = true;
    },
  },
};
</script>
<style scoped src="./QuickTicketsPage.css"></style>
