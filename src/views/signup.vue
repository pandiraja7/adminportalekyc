<template>
  <v-app class="lato-font">
    <v-layout row wrap align-center justify-center class="opansans-font marg-0">
      <v-flex xs12 sm12 md6 lg6 xl6 align-center justify-center text-center>
        <img src="@/assets/login bg-admin.svg" alt="" class="imgLogin" />
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 xl6 align-center justify-center>
        <v-layout row wrap align-center justify-center marg-0>
          <form @submit.prevent='suBmit()' >
          <div class="custom-card padd-16-24 bor-radius boxshad back-color">
            <div class="Img-div">
              <img src="@/assets/Logo.svg" class="widthHeight" alt="Logo" />
            </div>

            <label for="" class="custom-head mb-2 m-0"
              >EKYC admin panel</label
            >
            <label for="" class="custom-sub-head mb-2 w-100 m-0"
              >Manage your eKYC System</label
            >
              <div class="w-100 h-72">
                <div class="l-height">
                  <label class="fsize14 l-height m-0 pl-2">Enter Email</label>
                </div>
                <input
                  type="text"
                  name="userid"
                  value=""
                  id=""
                  class="
                    w-100
                    h-40
                    bor-radius
                    padd-8-16
                    border-input
                    fsize14
                    outline-none
                  "
                  placeholder="Enter Email Id"
                  autocomplete="off"
                  v-model="username"
                  :class="{
                    'is-invalid': submitted && $v.username.$error,
                  }"
                />
                <!-- <div
                  v-if="submitted && $v.username.$error"
                  class="invalid-feedback marg-0 l-height-20"
                >
                  <span
                    v-if="!$v.username.required"
                    class="validatemessage fsize12"
                    >Please Enter your username</span
                  >
                </div> -->
              </div>
              <div class="w-100 h-72 mb-4">
                <div class="l-height">
                  <label class="fsize14 l-height m-0 pl-2">Password</label>
                </div>
                <div class="pswborder bor-radius w-100 h-40">
                  <span>
                    <input
                      :type="passwordFieldType"
                      name="password"
                      value=""
                      id=""
                      class="
                        w-100
                        h-40
                        bor-radius
                        padd-8-16
                        border-input
                        fsize14
                        outline-none
                      "
                      placeholder="Enter Password"
                      autocomplete="off"
                      v-model="password"
                      :class="{
                        'is-invalid': submitted && $v.password.$error,
                      }"
                    />

                    <span class="bor-radius" @click="toggleFieldTextType()">
                      <span class="">
                        <img
                          v-if="!fieldTextType"
                          class="InputWithImg imagealign"
                          src="@/assets/EyeClose.svg"
                          alt="hidePassImg"
                          Lazy="load"
                          decode="async"
                        />
                      </span>

                      <span class="">
                        <img
                          v-if="fieldTextType"
                          class="InputWithImg imagealign"
                          src="@/assets/EyeShow.svg"
                          alt="showPassImg"
                          Lazy="load"
                          decode="async"
                        />
                      </span>
                    </span>
                  </span>
                </div>
                <!-- <div
                  v-if="submitted && $v.password.$error"
                  class="invalid-feedback marg-0 l-height-20"
                >
                  <span
                    v-if="!$v.password.required"
                    class="validatemessage fsize12"
                    >Please Enter your password</span
                  >
                </div> -->
              </div>
            <div class="">
              <button
                class="bor-radius w-100 h-40 fsize14bold-btn"
                @click="suBmit()"
              >
                Submit
              </button>
            </div>
            <div class="w-100 mt-2">
              <label for="" class="fsize10-link l-height padd-l-8 cursor marg-0"
                >Forgot Password?</label
              >

              <label
                for=""
                class="fsize10-link f-right l-height-27 padd-r-8 cursor marg-0"
                >Unblock Account</label
              >
            </div>
          </div>
          </form>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import httpService from "../js/http-common-service";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      username: "",
      fieldTextType: false,
      passwordFieldType: "password",
      submitted: false,
      password: "",
    };
  },
  validations: {
    username: { required },
    password: { required },
  },

  methods: {
    suBmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // this.$router.push("/dashboard");
      let jsondata = {
        email: this.username,
        password: this.password,
      };
      httpService.userLogin(jsondata).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            console.log(response);
            localStorage.setItem(
              "adminloginprofile",
              JSON.stringify(response.data["result"])
            );
            this.$router.push("/dashboard");
          } else {
          }
        }
      });
    },

    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>

<style>
</style>
