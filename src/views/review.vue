<template>
  <div class="lato-font ">
    <div class="headorder">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600">Document Review</label>
      </div>

      <div class="marg-r-8 pl-8 w-100">
        <button class="bttnalign headBtns active mar-right8">All (5)</button>
        <button class="bttnalign headBtns mar-right8">Assigned (10)</button>
        <button class="bttnalign headBtns mar-right8">In progress (5)</button>
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
                  oninput="this.value = this.value.toUpperCase()"
                />
              </span>
            </span>
          </span>
          <!-- <span class="vl"></span> -->
          <span class="downlo" id="btnExport"
            ><img
              class="marg0-3-8 h-20 w-20"
              src="@/assets/downloadIcon.svg"
              alt=""
          /></span>

          <!-- <span class="vl"></span> -->

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
      class="marg-t-24 padd-0-32 w-100 mb-8"
      v-if="this.reviewList.length > 0"
    >
      <v-card class="AllCards p-0 bordradius-5">
        <table class="w-100 padd-0">
          <thead class="">
            <tr class="border-bottom">
              <th class="fsize14 clr-000000 padd-12-7 text-center">S.No</th>
              <th class="fsize14 clr-000000 padd-12-7">Name</th>
              <th class="fsize14 clr-000000 padd-12-7">Email</th>
              <th class="fsize14 clr-000000 padd-12-7">Mobile No</th>
              <th class="fsize14 clr-000000 padd-12-7">PAN</th>
              <th class="fsize14 clr-000000 padd-12-7">Ref code</th>
              <th class="fsize14 clr-000000 padd-12-7">Assigned to</th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">Status</th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              class="border-bottom cursor"
              v-for="(item, index) in this.reviewList"
              :key="index"
              @click="callpopup(item)"
            >
              <td class="fsize14 padd-12-7 text-center">{{ index + 1 }}</td>
              <td class="fsize14 padd-12-7">{{ item.applicant_name }}</td>
              <td class="fsize14 padd-12-7">{{ item.email }}</td>
              <td class="fsize14 padd-12-7">{{ item.mobile_number }}</td>
              <td class="fsize14 padd-12-7">{{ item.pancard }}</td>
              <td class="fsize14 padd-12-7">{{ item.reffCode }}</td>
              <td class="fsize14 padd-12-7">{{ item.reviewedBy }}</td>
              <td class="fsize14 padd-12-7 text-center">
                <button
                  v-bind:class="{
                    greenColor: item.exactStatus == 'In Process',
                    orangeColor: item.exactStatus == 'Review',
                  }"
                  @click:
                  class="
                    minwidth-104
                    bgrclr-e8f4ff
                    clr-0060b9
                    border-radius3
                    padd-2-10
                  "
                >
                  {{ item.exactStatus }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
       
      </v-card>
       <v-row justify="center">
          <v-dialog v-model="dialog" max-width="600" style="height: 250px">
            <v-card class="padd-0">
              <div
                class="
                  p-y-14
                  padd-r-14
                  pl-6
                  d-flex
                  justify-content-space-between
                "
              >
                <div class="fsize16">Ticket Assignment</div>

                <img
                  src="../assets/images/close.svg"
                  @click="closeDialog"
                  alt=""
                />
              </div>
              <div class="padd-l-39 fsize14">
                Assign this ticket to yourself or your Team
              </div>

              <v-card-text class="padd-0">
                <v-container>
                  <v-row class="">
                    <v-col cols-12> </v-col>
                  </v-row>
                </v-container>
                <select
                  class="custom-select-review ml-10 outline-none"
                  aria-label="Default select example"
                  v-model="selectedOption"
                >
                  <option value='default' hidden>Choose any one</option>
                  <option v-for="item in this.dataArray" :key="item.name">
                    {{ item.name }}
                  </option>
                </select>
              </v-card-text>

              <v-card-actions class="padd-0" style="height: 92px">
                <v-spacer></v-spacer>

                <button
                  class="
                    w-120
                    h-48
                    bgclr-fff
                    clr-000000
                    border-radius border-input
                    borderclr-2E3031
                  "
                  text
                  @click="dialog = false"
                >
                  Cancel
                </button>

                <button
                  class="
                    mx-4
                    w-120
                    h-48
                    clr-fff
                    bgclr-007AFF
                    border-radius border-input
                    marg-0
                  "
                  back
                  text
                  @click="assign()"
                >
                  Assign
                </button>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
    </div>
  </div>
</template>

<script>
import httpService from "../js/http-common-service";
export default {
  name: "dashboard",

  data() {
    return {
      reviewList: [],
      dialog: false,
      dataArray: [],
      documentsone: [],
      apllicationId: String,
      adminName: String,
      name: JSON.parse(localStorage.getItem("userNamePRofile"))["name"],

      widgets: false,
  
      dialog: false,
      selectedOption: "default",
      currentApplicationId: "",
    };
  },
  methods: {
    callpopup(val) {

      this.currentApplicationId = val.application_id;


      if (val.exactStatus == "In Process") {
        this.dialog = true;
      } else if (val.exactStatus == "Review") {
        this.dialog = false;
        this.$router.push("/pancard");
        localStorage.setItem("app_Id", JSON.stringify(val.application_id));
      } else {
        this.dialog = false;
      }
    },

    reviewed() {
      let jsondata = {
        branchCode: null,
        remishreeCode: null,
        role: 10,
        status: "In Process",
      };
      httpService.review(jsondata).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            localStorage.setItem(
              "applicatioNid",
              JSON.stringify(response.data["result"])
            );
            for(let item of response.data["result"]){
              if(item.documentSigned== 1){
                this.reviewList.push(item);
              }
            }
           
          } else {
          }
        }
      });
    },

    assign() {
      let asSign = {
        adminName: this.selectedOption,
        applicationId: this.currentApplicationId,
      };
      httpService.assign(asSign).then((response) => {
        
        if (response.status == 200) {
          if (response.data["status"] == 1) {

            this.reviewed();
            this.dialog = false;
          } else {
          }
        }
      });
      this.dialog = false;
    },

    previews() {
      this.$router.push("/pancard");
    },

    closeDialog() {
      this.dialog = false;
    },
  },

  mounted() {
    this.reviewed();
    if (
      localStorage.getItem("useradminprofile") != undefined ||
      localStorage.getItem("useradminprofile") != null
    ) {
      this.apllicationId = JSON.parse(localStorage.getItem("useradminprofile"));
    }


    if (
      localStorage.getItem("adminloginprofile") != undefined ||
      localStorage.getItem("adminloginprofile") != null
    ) {
      this.adminName = JSON.parse(localStorage.getItem("adminloginprofile"))[
        "adminName"
      ];
    }

    httpService.newuser().then((response) => {
      if (response.status == 200) {
        if (response.data["status"] == 1) {
          this.dataArray = response.data.result;
        
        } else {
        }
      }
    });
  },
};
</script>

<style>
.bgrclr-e8f4ff {
  background-color: #e8f4ff;
}
.clr-0060b9 {
  color: #0060b9;
}

.minwidth-104 {
  min-width: 104px;
}
.padd-l-39 {
  margin-left: 39px;
}
.bgclr-007AFF {
  background-color: #007aff;
}
.w-120 {
  width: 120px !important;
}
.p-y-14 {
  padding-top: 14px !important;
  padding-bottom: 14px !important;
}
.padd-r-14 {
  padding-right: 14px !important;
}
.justify-content-space-between {
  justify-content: space-between;
}
.greenColor {
  background-color: #ebfff8;
  color: #0d9b6a;
}
.orangeColor {
  background-color: #ffeedd;
  color: #ff9125;
}
</style>