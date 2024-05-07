<template>
  <v-container fluid grid-list-md class="pa-0">
    <v-row no-gutters>
    <v-col cols="8" class="pa-0 ma-0">
      <div class="bground"></div>
    </v-col>
    <v-col cols="4" class="align-content-center">
    <v-card
      width="100vw"
      height="80px"
      class="d-flex align-center"
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
    <div>
      <v-row class="d-flex justify-space-around pt-5">
        <v-col cols="12" class="d-flex justify-center pa-0">
          <h4>
            {{ $t("common.account.not.exist") }}
            <a href="#/quick-tickets/signup" class="text-decoration-none">{{
              $t("common.sign.up")
            }}</a>
          </h4>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-card width="100vw" class="dialog-height" elevation="0">
            <v-row class="pt-6 d-flex justify-space-around">
              <h4>{{ $t("common.sign.in") }}</h4>
            </v-row>
            <div class="border-col">
              <v-col cols="12" class="pb-0">
                <v-text-field
                  ref="email"
                  :key="reset + 'email'"
                  v-model="email"
                  :rules="emailRule"
                  :disabled="!!mobnumber.length"
                  @focus="onEmailPasswordTextFieldFocused"
                  :label="$t('common.email')"
                  type="email"
                  color="cyan"
                  filled
                  clearable
                  dense
                ></v-text-field>
                <v-text-field
                  ref="password"
                  :key="reset + 'pswrd'"
                  v-model="password"
                  :label="$t('common.password')"
                  :rules="passwordRule"
                  :disabled="!!mobnumber.length"
                  @focus="onEmailPasswordTextFieldFocused"
                  color="cyan"
                  :type="showPassword ? 'text' : 'password'"
                  filled
                  dense
                  :append-icon="
                    password ? (showPassword ? 'mdi-eye-off' : 'mdi-eye') : ''
                  "
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
                <v-row class="justify-center">
                  <v-row no-gutters dense class="px-3">
                    <v-divider class="mt-3" /><span class="mx-2">OR</span>
                    <v-divider class="mt-3" />
                  </v-row>
                  <v-col cols="12">
                    <v-text-field
                      ref="mobnumber"
                      filled
                      clearable
                      dense
                      type="number"
                      hide-spin-buttons
                      @focus="onMobTextFieldFocused"
                      :disabled="!!email.length || !!password.length"
                      color="cyan"
                      :label="$t('common.mobile.number')"
                      :key="reset + 'mob'"
                      v-model="mobnumber"
                      :rules="mobnumberRule"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </div>
            <v-card-actions class="btn-pos">
              <v-row class="mr-0 d-flex align-center">
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
                <v-btn
                  @click="signIn"
                  :disabled="signInDisabled"
                  color="primary"
                  class="ml-2 capitalize-text"
                  >{{ $t("common.sign.in") + "!" }}</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SigninForm",
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
      reset: 0,
      email: "",
      emailRule: [
        (v) => !!v || this.$t("common.required.email"),
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          this.$t("common.email.valid"),
      ],
      showPassword: false,
      password: "",
      passwordRule: [
        (v) => !!v || this.$t("common.required.password"),
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          this.$t("common.password.length"),
      ],
      mobnumber: "",
      mobnumberRule: [
        (v) => !!v || this.$t("common.required.mobile.number"),
        (v) =>
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) ||
          this.$t("common.mobile.number.valid"),
      ],
      snackbar: false,
      text: this.$t("common.sign-in.success"),
    };
  },
  computed: {
    clearAllDisabled() {
      return !(this.email || this.password || this.mobnumber);
    },
    signInDisabled() {
      return !(
        (this.email &&
          this.password &&
          this.password.length <= 15 &&
          this.password.length >= 8 &&
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) ||
        (this.mobnumber && /^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobnumber))
      );
    },
  },
  methods: {
    onMobTextFieldFocused() {
      this.$refs.email.reset();
      this.$refs.password.reset();
      this.email = this.password = "";
    },
    onEmailPasswordTextFieldFocused() {
      this.$refs.mobnumber.reset();
      this.mobnumber = "";
    },
    clearAll() {
      this.email = this.password = this.mobnumber = "";
      this.reset++;
    },
    signIn() {
      this.snackbar = true;
      setTimeout(() => {
        this.email = this.password = this.mobnumber = "";
        this.reset++;
        this.$router.push("/quick-tickets/landing");
      }, 1000);
    },
  },
};
</script>

<style scoped src="./QuickTicketsPage.css"></style>
