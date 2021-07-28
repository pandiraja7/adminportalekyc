<template>
  <div class="lato-font " style="background: #f9f9f9">
      <div class="headorder">
        <div class="padd-8-32 clr-282828">
          <label class="fsize16 marg-0 fw-600">Access Control</label>
        </div>

        <div class="arg-r-8 pl-8 w-100">
          <button
            class="bttnalign headBtns active marg-r-8 showSingle"
            id="btn1"
            target="1"
          >
            User list
          </button>
          <button class="bttnalign headBtns showSingle" id="btn2" target="2">
            Create New
          </button>
          <span class="img" style="float: right">
            <span class="search-box">
              <span class="searchwhole">
                <span
                  ><img
                    class="h-16 w-16 marg-l-5 marg-b-2"
                    src="@/assets/Search.svg"
                    alt=""
                /></span>
                <span class="searchinput">
                  <input
                    class="placeholdsearch outline-none"
                    type="search"
                    placeholder="Search"
                    autocorrect="off"
                    v-model="searchfiled"
                    oninput="this.value = this.value.toUpperCase()"
                  />
                </span>
              </span>
            </span>

            <span class="" id=""
              ><img
                class="marg0-3-8 h-20 w-20"
                src="@/assets/downloadIcon.svg"
                alt=""
            /></span>

            <span class="search"
              ><img
                class="h-16 w-16 marg0-2-8"
                src="@/assets/refreshIcon.svg"
                alt=""
            /></span>
          </span>
        </div>
        <hr class="solid2" />
      </div>

      <div
        class="marg-t-24 padd-0-32 targetDiv"
        id="div1"
        v-if="this.newuserList.length > 0"
      >
        <b-card class="AllCards padd-0 bordradius-5">
          <table class="w-100">
            <thead class="">
              <tr class="border-bottom">
                <th class="padd-14-40 fsize14">User ID</th>
                <th class="padd-14-40 fsize14">User Name</th>
                <th class="padd-14-40 fsize14">Email ID</th>
                <th class="padd-14-40 fsize14">Phon Number</th>
                <th class="padd-14-40 fsize14">User Group</th>
                <th class="padd-14-40 fsize14">Status | Date & Time</th>
                <th class="padd-14-40 fsize14">Action</th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="border-bottom"
                v-for="(item, index) in this.searchfiled == ''
                  ? newuserList
                  : newuserFilter"
                :key="index"
              >
                <td class="padd-14-40 fsize14">004561000</td>
                <td class="padd-14-40 fsize14">{{ item.name }}</td>
                <td class="padd-14-40 fsize14">
                  {{ item.email }}
                </td>
                <td class="padd-14-40 fsize14">{{ item.mobile_number }}</td>
                <td class="padd-14-40 fsize14">{{ item.designation }}</td>
                <td class="padd-14-40 fsize14">
                  Enabled | 2 Jun, 2021 - 10:30 PM
                </td>
                <td class="padd-14-40 fsize14">
                  <span><img src="@/assets/deleteicon.svg" alt="" /></span>
                </td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
      <div
        class="padd-0-32 marg-t-24 targetDiv"
        id="div2"
        style="display: none"
      >
        <b-card class="card AllCards padd-0 bg-white mb-8">
          <div class="w-100 mt-6">
            <div class="row marg-0">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mt-1">
                <span class="fsize14 fw-bold pl-2 clr-000000">New User</span>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <div class="row marg-0 mt-1">
                  <div class="h-64 align-item">
                    <span class="l-height-24">
                      <label class="fsize12 marg-0 clr-000000"
                        >First Name</label
                      >
                      <div class="">
                        <input
                          type="text"
                          class="
                            bor-radius
                            borderclr-cbcb
                            w-224
                            h-40
                            pl-2
                            fsize12
                            outline-none
                          "
                          id="firstname"
                          placeholder="Type here"
                          autocomplete="off"
                          v-model="name"
                          :class="{
                            'is-invalid': submitted && $v.name.$error,
                          }"
                        />
                      </div>
                    </span>
                  </div>

                  <span class="pl-4 l-height-24 align-item">
                    <div class="h-64">
                      <span class="l-height-24">
                        <label class="fsize12 marg-0 clr-000000"
                          >Last Name</label
                        >
                        <div class="">
                          <input
                            type="text"
                            class="
                              bor-radius
                              borderclr-cbcb
                              w-224
                              h-40
                              pl-2
                              fsize12
                              outline-none
                            "
                            id="lastname"
                            placeholder="Type here"
                            autocomplete="off"
                            v-model="name1"
                            :class="{
                              'is-invalid': submitted && $v.name1.$error,
                            }"
                          />
                        </div>
                      </span>
                    </div>
                  </span>
                </div>
                <div class="row marg-0">
                  <span class="l-height-24">
                    <div class="h-64 mt-4 align-item">
                      <span class="l-height-24">
                        <label class="fsize12 marg-0 clr-000000"
                          >Email Id</label
                        >
                        <div class="">
                          <input
                            type="text"
                            class="
                              bor-radius
                              borderclr-cbcb
                              w-464
                              h-40
                              pl-2
                              fsize12
                              outline-none
                            "
                            id="name"
                            placeholder="Type here"
                            autocomplete="off"
                            v-model="email"
                            :class="{
                              'is-invalid': submitted && $v.email.$error,
                            }"
                          />
                        </div>
                      </span>
                    </div>
                  </span>
                </div>
                <div class="h-64 ml-0 mt-5 align-item">
                  <span class="l-height-24">
                    <label class="fsize12 marg-0 clr-000000">Phone No</label>
                    <div class="">
                      <input
                        type="text"
                        class="
                          bor-radius
                          borderclr-cbcb
                          w-464
                          h-40
                          pl-2
                          fsize12
                          outline-none
                        "
                        id="mobile_number"
                        maxlength="10"
                        placeholder="Type here"
                        autocomplete="off"
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                        v-model="mobile_number"
                        :class="{
                          'is-invalid': submitted && $v.mobile_number.$error,
                        }"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <hr class="solid3 ml-4 mr-4" />
            <div class="row marg-0">
              <div
                class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 marg-t-26"
              >
                <span class="fsize14 fw-bold pl-2 clr-000000"
                  >User Credential</span
                >
              </div>
              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <span class="ml-2 pl-0 mt-1">
                  <div class="h-64 marg-l-4 align-item">
                    <span class="l-height-24">
                      <label class="fsize12 marg-0 clr-000000">Password</label>
                      <div class="">
                        <input
                          type="password"
                          class="
                            bor-radius
                            borderclr-cbcb
                            w-464
                            h-40
                            pl-2
                            fsize12
                            outline-none
                          "
                          id="password"
                          placeholder="Type here"
                          autocomplete="off"
                          v-model="password"
                          :class="{
                            'is-invalid': submitted && $v.password.$error,
                          }"
                        />
                      </div>
                    </span>
                  </div>
                </span>
                <div class="ml-0 pl-0 mt-5">
                  <div class="h-64 marg-l-4 align-item">
                    <span class="l-height-24">
                      <label class="fsize12 marg-0 clr-000000"
                        >Confirm Password</label
                      >
                      <div class="">
                        <input
                          type="password"
                          class="
                            bor-radius
                            borderclr-cbcb
                            w-464
                            h-40
                            pl-2
                            fsize12
                            outline-none
                          "
                          id="confirmpassword"
                          placeholder="Type here"
                          autocomplete="off"
                          v-model="password1"
                          :class="{
                            'is-invalid': submitted && $v.password1.$error,
                          }"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr class="solid3 ml-4 mr-4" />

            <div class="row marg-0">
              <div
                class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 marg-t-23"
              >
                <span class="fsize14 fw-bold pl-2 clr-000000"
                  >Organisation Details</span
                >
              </div>
              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <div class="h-64 marg-l-4 mt-5 align-item">
                  <span class="l-height-24">
                    <label class="fsize12 marg-0 clr-000000">Branch Code</label>
                    <div class="">
                      <input
                        type="text"
                        class="
                          bor-radius
                          borderclr-cbcb
                          w-464
                          h-40
                          pl-2
                          fsize12
                          outline-none
                        "
                        id="branchcode"
                        placeholder="Type here"
                        autocomplete="off"
                        v-model="branchcode"
                        :class="{
                          'is-invalid': submitted && $v.branchcode.$error,
                        }"
                      />
                    </div>
                  </span>
                </div>
                <div class="h-64 marg-l-4 mt-4">
                  <span class="l-height-24">
                    <label class="fsize12 marg-0 clr-000000"
                      >Remishree Code</label
                    >
                    <div class="">
                      <input
                        type="text"
                        class="
                          bor-radius
                          borderclr-cbcb
                          w-464
                          h-40
                          pl-2
                          fsize12
                          outline-none
                        "
                        id="name"
                        placeholder="Type here"
                        autocomplete="off"
                        v-model="remishreecode"
                        :class="{
                          'is-invalid': submitted && $v.remishreecode.$error,
                        }"
                      />
                    </div>
                  </span>
                </div>
                <div class="h-64 marg-l-4 mt-4">
                  <span class="l-height-24">
                    <label class="fsize12 marg-0 clr-000000">Select Role</label>
                    <div class="">
                      <select
                        class="
                          custom-select
                          border-radius
                          borderclr-cbcb
                          w-464
                          h-40
                          fsize14
                          pl-2
                          lato-font
                          outline-none
                          clr-e1e1e1
                        "
                        v-model="role"
                        :class="{
                          'is-invalid': submitted && $v.role.$error,
                        }"
                      >
                        <option class="fsize12" value="null" role.selected>
                          Select Role
                        </option>
                        <option class="fsize12" value="10">Admin</option>
                        <option class="fsize12" value="20">
                          Business Partner Manager
                        </option>
                        <option class="fsize12" value="30">
                          Business Partner Manager and User
                        </option>
                        <option value="40" class="fsize12">
                          MCB Administrator
                        </option>
                      </select>
                      <div
                        v-if="submitted && $v.role.$error"
                        class="invalid-feedback marg-0 l-height-20 mt-0"
                      >
                        <span
                          v-if="!$v.role.required"
                          class="validatemessage fsize12"
                          >Please select Role
                        </span>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <hr class="solid3 ml-4 mr-4" />

            <div class="row marg-0">
              <div
                class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 marg-t-13"
              >
                <span class="fsize14 fw-bold pl-2 clr-000000"
                  >Access to Units</span
                >
              </div>

              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 mb-0">
                <div class="mt-2 ml-1 clr-000000 fsize12 checkbx">
                  <input
                    class="w-16 h-16 vertical-middle"
                    type="checkbox"
                    name="c1"
                    value="c1"
                    id="retailbanking"
                    v-model="access"
                    :class="{
                      'is-invalid': submitted && $v.access.$error,
                    }"
                  />

                  <label
                    class="
                      marg-0
                      valign-top
                      pl-2
                      v-align
                      text-center
                      clr-000000
                    "
                  >
                    Retail Banking
                  </label>
                </div>
                <div class="mt-2 ml-1 clr-000000 fsize12">
                  <input
                    class="w-16 h-16"
                    type="checkbox"
                    name="c2"
                    value="c2"
                    id="corporatebanking"
                    v-model="access"
                    :class="{
                      'is-invalid': submitted && $v.access.$error,
                    }"
                  />

                  <label class="marg-0 pl-2 valign-top">
                    Corporate Banking
                  </label>
                </div>
                <div class="mt-2 ml-1 clr-000000 fsize12">
                  <input
                    class="w-16 h-16"
                    type="checkbox"
                    name="c3"
                    value="c3"
                    id="globalbank"
                    v-model="access"
                    :class="{
                      'is-invalid': submitted && $v.access.$error,
                    }"
                  />

                  <label class="marg-0 pl-2 valign-top"> Global Bank </label>
                </div>
                <div class="mt-1 ml-1 clr-000000 fsize12">
                  <input
                    class="mt-2 w-16 h-16"
                    type="checkbox"
                    name="c4"
                    value="c4"
                    id="forex"
                    v-model="access"
                    :class="{
                      'is-invalid': submitted && $v.access.$error,
                    }"
                  />

                  <label class="marg-0 mt-2 pl-2 clr-000000 valign-top">
                    Forex
                  </label>
                  <div
                    v-if="submitted && $v.access.$error"
                    class="invalid-feedback marg-0"
                  >
                    <span v-if="!$v.access.required" class="validatemessage"
                      >Please select one option</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100">
            <div class="row marg-0">
              <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <span class="fsize14"><button></button></span>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 pl-16">
                <div class="row marg-0 mt-6 mb-10 float-right">
                  <span class="fsize14"
                    ><button
                      class="
                        w-96
                        h-40
                        bgclr-fff
                        clr-000000
                        border-radius
                        borderclr-2E3031
                        mr-4
                      "
                    >
                      Cancel
                    </button></span
                  >
                  <span class="fsize14"
                    ><button
                      class="
                        w-96
                        h-40
                        clr-fff
                        bgclr-000000
                        border-radius
                        borderclr-cbcb
                      "
                      @click="addnewuser()"
                    >
                      Save
                    </button></span
                  >
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </div>
  </div>
</template>

<script>
import httpService from "../js/http-common-service";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "dashboard",

  data() {
    return {
      name: "",
      name1: "",
      searchfiled: "",

      email: "",
      mobile_number: "",
      password: "",
      password1: "",

      branchcode: "",
      remishreecode: "",
      role: "",

      access: "",

      submitted: false,
      newuserList: [],
    };
  },

  validations: {
    name: { required },
    name1: { required },
    email: { required, email },
    mobile_number: { required, minLength: minLength(10) },
    password: { required },
    password1: { required, sameAs: sameAs("password") },
    access: { required },

    branchcode: { required },
    role: { required },

    remishreecode: { required },
  },
  methods: {
    getNewuser() {
      httpService.newuser().then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            localStorage.setItem(
              "userNamePRofile",
              JSON.stringify(response.data["result"])
            );

            this.newuserList = response.data["result"];
          } else {
          }
        }
      });
    },
    
    addnewuser() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let jsondata = {
        name: this.name,
        email: this.email,
        password: this.password,
        mobile_number: this.mobile_number,
        designation: "Admin",
        branchCode: "CHE",
        remishreeCode: "ABSL1",
        role: this.role,
      };
      httpService.newadmin(jsondata).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {

          } else {
          }
        }
      });
    },
  },
  computed: {
    newuserFilter() {
      return this.newuserList.filter((post) => {
        return post.name.toLowerCase().includes(this.searchfiled.toLowerCase());
      });
    },
  },

  mounted() {
    this.getNewuser();

    jQuery(function () {
      jQuery("#showSingle").click(function () {
        jQuery(".targetDiv").show();
      });
      jQuery(".showSingle").click(function () {
        jQuery(".targetDiv").hide();
        jQuery("#div" + $(this).attr("target")).show();
      });
    });
    $(document).ready(function () {
      $(".headBtns").on("click", function () {
        $(".headBtns").removeClass("active");
        $(this).addClass("active");
      });
    });
    $('input[type="checkbox"]').on("change", function () {
      $('input[type="checkbox"]').not(this).prop("checked", false);
    });
  },
};
</script>

<style>
.padd-14-40 {
  padding: 14px 24px;
}

.Allcard {
  border: 4px !important;
}
.w-464 {
  width: 464px;
}
.w-224 {
  width: 224px;
}
.borderclr-cbcb {
  border: solid 1px #cbcbcb !important;
  box-shadow: none !important;
}
.w-96 {
  width: 96px;
}
.w-24 {
  width: 24px;
}

.v-align {
  vertical-align: middle;
  line-height: 24px;
}
.Allcards {
  /* overflow-y: initial; */
  background-color: #ffffff;
}
.AllCards,
.v-sheet.v-card,
v-card {
  border-radius: 4px !important;
  position: relative;
}
.AllCards,
v-card {
  min-height: auto !important;
}
.AllCards {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0 !important;
}
.card-body {
  padding: 0px !important;

  background-color: white;
  position: relative;
}
.textclr {
  color: #000000;
}
.clr-e1e1e1 {
  color: #6c757d;
}
.solid3 {
  border-top: solid 1px #e1e1e1;
  margin-top: 30px;
}
.marg-t-26 {
  margin-top: 26px;
}
.marg-t-23 {
  margin-top: 23px;
}
.marg-t-13 {
  margin-top: 13px;
}
.vertical-middle {
  vertical-align: middle !important;
}
.validatemessage {
  color: #ff0000 !important;
  font-size: 10px;
}
</style>