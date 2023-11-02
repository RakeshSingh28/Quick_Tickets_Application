<template>
  <v-container fluid grid-list-md class="pa-0 pt-2">
    <v-card width="100vw" color="black" class="mt-1" style="z-index: 1">
      <v-row class="d-flex justify-space-around">
        <h3 class="white--text">{{ companyName }}</h3>
      </v-row>
    </v-card>
    <div class="bground">
      <v-row class="d-flex justify-space-around">
        <v-card outlined :elevation="elevate ? 20 : 0" @mouseover="elevate=true" @mouseleave="elevate=false" class="dialog-height">
          <v-row class="pt-6 d-flex justify-space-around">
            <h4>Sign Up</h4>
          </v-row>
          <div class="border-col">
            <v-col cols="12" class="pb-0">
              <v-text-field
                :key="reset"
                v-model="name"
                :rules="nameRule"
                label="User Name"
                color="cyan"
                filled
                clearable
                dense
              ></v-text-field>
              <v-text-field
                :key="reset"
                v-model="email"
                :rules="emailRule"
                label="Email"
                type="email"
                color="cyan"
                filled
                clearable
                dense
              ></v-text-field>
              <v-text-field
                :key="reset"
                v-model="password"
                label="Password"
                :rules="passwordRule"
                color="cyan"
                :type="showPassword ? 'text' : 'password'"
                filled
                dense
                :append-icon="password ? (showPassword ? 'mdi-eye-off' : 'mdi-eye') : ''"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-text-field
                :key="reset"
                v-model="cnfrmpassword"
                :type="showCnfrmPassword ? 'text' : 'password'"
                :rules="cnfrmpasswordRule"
                label="Confirm Password"
                color="cyan"
                filled
                dense
                :append-icon="cnfrmpassword ? (showCnfrmPassword ? 'mdi-eye-off' : 'mdi-eye') : ''"
                @click:append="showCnfrmPassword = !showCnfrmPassword"
              ></v-text-field>
              <v-row>
                <v-col cols="5">
                  <v-autocomplete
                    filled
                    dense
                    color="cyan"
                    label="Country Code"
                    :items="item1"
                    :key="reset"
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
                    label="Mobile Number"
                    :key="reset"
                    v-model="mobnumber"
                    :rules="mobnumberRule"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-autocomplete
                filled
                dense
                color="cyan"
                label="Country"
                :items="item2"
                :key="reset"
                v-model="country"
                :rules="countryRule"
                @change="onCountryChange"
              ></v-autocomplete>
            </v-col>
          </div>
          <v-card-actions class="btn-pos">
            <v-row class="align d-flex align-center">
              <v-spacer />
              <v-btn
                @click="clearAll"
                :disabled="
                  !(
                    this.name ||
                    this.email ||
                    this.password ||
                    this.cnfrmpassword ||
                    this.country ||
                    this.mobnumber ||
                    this.countryCode
                  )
                "
                color="error"
                class="white--text"
                >Clear All</v-btn
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
                  <v-btn color="success" text v-on="on" @click="snackbar = false">
                    Close
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
                  <v-btn color="error" text v-on="on" @click="snackbar1 = false">
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
              <v-btn
                @click="signUp"
                :disabled="
                  !(
                    this.name &&
                    this.email &&
                    this.mobnumber && this.countryCode &&
                    this.password &&
                    this.cnfrmpassword &&
                    this.password.length <= 15 &&
                    this.password.length >= 8  &&
                    this.cnfrmpassword.length <= 15 &&
                    this.cnfrmpassword.length >= 8  &&
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                      this.email
                    ) &&
                    this.country &&
                    /^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobnumber)
                  )
                "
                color="primary"
                class="ml-2"
                >Sign Up!</v-btn
              >
            </v-row>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "SignupForm",
  components: {},
  props: {
    companyName: {
      type: String,
      default: "Company Name",
    },
  },
  data() {
    return {
      elevate: false,
      items: [],
      item1: [],
      item2: [],
      reset: 0,
      email: "",
      name: "",
      nameRule: [(v) => !!v || "User Name is required"],
      emailRule: [
        (v) => !!v || "Email is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      showPassword: false,
      passwordRule: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          "Password must be between 8 to 15 characters",
      ],
      showCnfrmPassword: false,
      cnfrmpasswordRule: [
        (v) => !!v || "Confirm Password is required",
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          "Password must be between 8 to 15 characters",
      ],
      countryRule: [(v) => !!v || "Country is required"],
      mobnumberRule: [
        (v) => !!v || "Mobile Number is required",
        (v) =>
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || "Mobile Number must be valid",
      ],
      password: "",
      cnfrmpassword: "",
      mobnumber: "",
      country: "",
      countryCode: "",
      snackbar: false,
      snackbar1: false,
      text: "Sign Up Successful!!!",
      text1: "Password and Confirm Password doesn't match",
    };
  },
  mounted() {
    this.callApi();
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
          (value) =>
            value.alpha3Code + "(+" + value.callingCodes[0] + ")" ==
            val
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
      this.name = "";
      this.email = "";
      this.password = "";
      this.cnfrmpassword = "";
      this.country = "";
      this.countryCode = "";
      this.mobnumber = "";
      this.reset++;
    },
    signUp() {
      if(this.password === this.cnfrmpassword)
      {
        this.snackbar = true;
        this.name = "";
        this.email = "";
        this.password = "";
        this.cnfrmpassword = "";
        this.country = "";
        this.countryCode = "";
        this.mobnumber = "";
        this.reset++;
        this.$router.push('/landing-page');
      }
      else
        this.snackbar1 = true;
    },
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

.align {
  margin-right: 0%;
}

.snackbar-style {
  position: relative;
  display: block;
  left: 26px;
  bottom: 1px;
  margin-top: -18px;
  padding-left: 4px;
  margin-right: 16px;
}

.dialog-height {
  min-width: 232px !important;
  max-width: 494px !important;
}

.border-col {
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  margin-top: 20px;
}

.btn-pos {
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 10px;
}
</style>
