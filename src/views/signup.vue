<template>
  <v-app class="lato-font">
    <v-layout row wrap align-center justify-center class="opansans-font marg-0">
      <v-flex xs12 sm12 md6 lg6 xl6 align-center justify-center text-center>
        <img src="@/assets/login bg-admin.svg" alt="" class="imgLogin" />
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 xl6 align-center justify-center>
        <v-layout row wrap align-center justify-center marg-0>

          <form @keyup.enter="suBmit()" >

          <div class="custom-card padd-16-24 bor-radius boxshad back-color">
            <div class="Img-div">
              <img src="@/assets/Logo.svg" class="widthHeight" alt="Logo" />
            </div>

            <label for="" class="custom-head mb-2 marg-0"
              >EKYC admin panel</label
            >
            <label for="" class="custom-sub-head mb-2 w-100 marg-0"
              >Manage your eKYC System</label
            >
            <form method="post" class="w-100" @submit.prevent="suBmit">
              <div class="w-100 h-72">
                <div class="l-height">

                  <label class="fsize14 l-height m-0 pl-2">Email Id</label>

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
                    padd-8-8-16
                    border-input
                    fsize14
                    outline-none
                  "
                  placeholder="Enter Email Id"
                  autocomplete="off"
                  v-model="email"
                  :class="{
                    'is-invalid': submitted && $v.email.$error,
                  }"
                />

              </div>
              <div class="w-100 h-72 mb-4">
                <div class="l-height">
                  <label class="fsize14 l-height marg-0">Password</label>
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
                        padd-8-8-16
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
                    <!-- <div
                      v-if="submitted && $v.password.$error"
                      class="invalid-feedback marg-0 l-height-20"
                    >
                      <span
                        v-if="!$v.password.required"
                        class="validatemessage fsize12"
                        >Please Enter your email</span
                      >
                    </div> -->

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

              </div>
            </form>

            <div class="">

              <button
              type="button"

                class="bor-radius w-100 h-40 fsize14bold-btn"
              >
                Submit</router-link
              > -->

              <button
                class="bor-radius w-100 h-40 fsize14bold-btn loader"
                @click="suBmit()"
               :loading="loading"
                :disabled="loading"
               
           
             >
                Submit
              </button>
               <!-- <v-progress-circular
            class="ml-2"
            v-if="loader"
            indeterminate
            size="18"
            :width="2"
            color="blue"
          ></v-progress-circular> -->
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
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import httpService from "../js/http-common-service";
import { required, email } from "vuelidate/lib/validators";
import toast from "../js/mixins/toast";
import loader from "../js/mixins/loader";
export default {
  mixins: [toast, loader],
  data() {
    return {
      email: "",
      fieldTextType: false,
      passwordFieldType: "password",
      submitted: false,
      password: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required },
  },

  methods: {
    suBmit() {
      this.submitted = true;
      this.loader = "loading";
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let jsondata = {
        email: this.email,
        password: this.password,
      };
      this.loader = "loading";
      httpService.userLogin(jsondata).then((response) => {
        if (response.status == 200) {
          this.loader = false;

          if (response.data["status"] == 1) {

            localStorage.setItem(
              "adminloginprofile",
              JSON.stringify(response.data["result"])
            );

            this.$router.push("/dashboard");

            localStorage.setItem("email", this.email);
            this.openNotification({
              // title: "success",
              type: "success",
              message: response.data["message"],
              duration: 3000,
            });
          } 
          else {
            console.log(response);
            var emsg = response.data.reason;
            this.openNotification({
              // title: "success",
              type: "danger",
              message: emsg,
              duration: 5000,
            });
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
.is-invalid {
  border: 1px solid red !important;
}
</style>
