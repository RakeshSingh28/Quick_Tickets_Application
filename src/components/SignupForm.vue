<template>
  <v-container fluid grid-list-md class="pa-0 pt-2">
    <v-card height="40px" width="1400px" color="black" class="mt-1">
      <v-row>
        <v-spacer />
        <h3 class="white--text mt-1">Sign Up Form</h3>
        <v-spacer />
      </v-row>
    </v-card>
    <div class="bground">
      <v-row justify="center">
        <v-card height="450px" width="400px" class="dialog-height">
            <v-row class="title-row">
              <v-spacer />
              <h4>Sign Up</h4>
              <v-spacer />
            </v-row>
          <div class="border-col">
          <v-col
            cols="12"
            class="pb-0"
          >
            <v-text-field
              :key="reset"
              v-model="name"
              :rules="nameRule"
              label="User Name"
              color="cyan"
              filled
              clearable
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
            ></v-text-field>
            <v-text-field
              :key="reset"
              v-model="password"
              label="Password"
              :rules="passwordRule"
              color="cyan"
              type="password"
              filled
              clearable
            ></v-text-field>
            <v-text-field
              :key="reset"
              v-model="cnfrmpassword"
              type="password"
              :rules="cnfrmpasswordRule"
              label="Confirm Password"
              color="cyan"
              filled
              clearable
            ></v-text-field>
          </v-col>
          </div>
          <v-card-actions>
            <v-row class="align d-flex align-center pt-3">
              <v-spacer />
              <v-btn
                @click="clearAll"
                :disabled="
                  !(
                    this.name ||
                    this.email ||
                    this.password ||
                    this.cnfrmpassword
                  )
                "
                width="90px"
                color="error"
                height="30px"
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
                    src="../assets/logo.svg"
                  ></v-img>
                  <span class="snackbar-style">{{ text }}</span>
                </div>

                <template v-slot:action="{ on }">
                  <v-btn color="error" text v-on="on" @click="snackbar = false">
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
                    this.password &&
                    this.cnfrmpassword &&
                    this.password == this.cnfrmpassword &&
                    this.password.length < 15 &&
                    (this.email.includes('@') && (this.email.includes('.com') || this.email.includes('.co') || this.email.includes('.org') || this.email.includes('.in')))
                  )
                "
                width="80px"
                height="30px"
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
export default {
  name: "SignupForm",
  components: {},
  data() {
    return {
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
      passwordRule: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length<= 15 && v.length>= 8) || "Password must be between 8 to 15 characters",
      ],
      cnfrmpasswordRule: [
        (v) => !!v || "Confirm Password is required",
        (v) => v == this.password || "Password doesn't match",
        (v) =>
          (v && v.length<= 15 && v.length>= 8) || "Password must be between 8 to 15 characters",
      ],
      password: "",
      cnfrmpassword: "",
      snackbar: false,
      text: "Sign Up Successful!!!",
      image:
        "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    };
  },
  methods: {
    clearAll() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.cnfrmpassword = "";
      this.reset++;
    },
    signUp() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.cnfrmpassword = "";
      this.snackbar = true;
      this.reset++;
    },
  },
};
</script>
<style scoped>
.bground {
  background-image: url("https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  /* background-color: grey; */
  background-size: cover;
  min-height: 95.5vh;
}
.align {
  margin-right: 0px;
}
.snackbar-style {
  position: relative;
  display: block;
  left: 26px;
  bottom: 1px;
  margin-top: -18px;
  padding-left: 4px;
}
.dialog-height {
  margin-top: 100px;
}
.border-col {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-top: 20px;
}
.title-row {
  margin-top: 13px;
}
</style>
