<template>
  <div class="lato-font">
    <div class="headorder">
      <div class="padd-8-16 clr-282828">
        <label class="fsize16 marg-0 fw-600">Document Review</label>
      </div>

      <div class="marg-r-8 padd-l-16 w-100">
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
      class="marg-t-24 padd-0-16 w-100 mb-8"
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
              class="border-bottom"
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
                <!-- <div v-if="item.exactStatus == 'In Process'">
                  <button
                     v-bind:class="{}"
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
                </div>
                <div v-if="item.exactStatus == 'Review'">
                  <button
                    class="
                      minwidth-104
                      bgrclr-e8f4ff
                      clr-0060b9
                      border-radius3
                      padd-2-10
                    "
                    @click="previews(item.application_id)"
                  >
                    {{ item.exactStatus }}
                  </button>
                </div> -->
              </td>
            </tr>
          </tbody>
        </table>
       
      </v-card>
       <v-row justify="center">
          <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->

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
                    borderclr-cbcb
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
// export default {
//   name: "dashboard",

//   data() {
//     return {};
//   },
//   methods: {},
// };
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
      // name: String,
      name: JSON.parse(localStorage.getItem("userNamePRofile"))["name"],
      // dialog2: false,
      // notifications: false,
      widgets: false,
      // items: [
      //   {
      //     title: "Click Me",
      //   },
      dialog: false,
      selectedOption: "default",
      currentApplicationId: "",
    };
  },
  methods: {
    callpopup(val) {
      // console.log(val);
      // console.log(val.application_id);
      // console.log(val.name);
      this.currentApplicationId = val.application_id;
      // let asSign = {
      //   applicationId: val.application_id,
      //   adminName: val.name,
      // };
      // httpService.assign(asSign).then((response) => {
      //   if (response.status == 200) {
      //     if (response.data["status"] == 1) {
      //       console.log(response);
      //     } else {
      //     }
      //   }
      // });

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
            // console.log(response['data']['result'][0]['documentSigned']);
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

    // previews(id) {
    //   let pReview = {
    //     adminName: this.selectedOption,
    //     applicationId: id,
    //   };
    //   httpService.applicationstarted(pReview).then((response) => {
    //     if (response.status == 200) {
    //       if (response.data["status"] == 1) {
    //         console.log(response);
    //         localStorage.setItem("applicateid", JSON.stringify(id));
    //         this.reviewed();
    //         this.$router.push("/pancard");
    //       } else {
    //       }
    //     }
    //   });
    // },
    previews() {
      this.$router.push("/pancard");
    },

    closeDialog() {
      this.dialog = false;
    },
  },

  mounted() {
    console.log(JSON.parse(localStorage.getItem("userNamePRofile")));
    this.reviewed();
    if (
      localStorage.getItem("useradminprofile") != undefined ||
      localStorage.getItem("useradminprofile") != null
    ) {
      this.apllicationId = JSON.parse(localStorage.getItem("useradminprofile"));
    }
    // console.log(this.apllicationId);
    //  assigned service
    // localStorage.setItem(
    //   "applicateid",
    //   JSON.stringify(response.data["result"])
    // );

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
          console.log(response);
          this.dataArray = response.data.result;
          console.log(this.dataArray);
          // localStorage.setItem(
          //   "userNamePRofile",
          //   JSON.stringify(response.data["result"])
          // );
        } else {
          console.log("something went wrong");
        }
      }
    });
  },
};
</script>

<style>
.btn32 {
  /* margin-left: 8px !important; */
  border: 1px solid #e6e6e6 !important;
  font-size: 12px !important;
  color: #282828 !important;
  background: #e6e6e6 !important;
}
.solid1,
.solid2 {
  border: 0;
  border-top: 1px solid #a2a2a2;
  margin: 7px 16px 0 !important;
}
/* search box css */
.searchwhole {
  margin: 0;
  position: relative;
  padding: 4px 0 6px;
  border: 1px solid #ededed !important;
  border-radius: 4px;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
}

/* search */
.h-16 {
  height: 16px;
}
.w-16 {
  width: 16px;
}
.marg-l-5 {
  margin-left: 5px;
}
.marg-b-2 {
  margin-bottom: 2px;
}
/* end */

.search-box input {
  transition-duration: 0.3s;
}
.search-box input:focus {
  width: 200px;
}
.search-box {
  margin: 0 8px;
}
.placeholdsearch {
  font-size: 13px;
  height: 24px;
  margin-left: 5px;
  width: 100px;
  color: #56585a;
}
.search {
  color: #0075e1 !important;
  font-size: 12px !important;
  cursor: pointer;
  margin-right: 16px !important;
}
.marg0-2-8 {
  margin: 0px 8px 2px 8px;
}
/* refershicon */
.marg0-3-8 {
  margin: 0px 8px 3px 8px;
}
.h-20 {
  height: 20px;
}
.w-20 {
  width: 20px;
}
/* end */

.border-bottom {
  border-bottom: 1px solid #e1e1e1;
}

.bgrclr-e8f4ff {
  background-color: #e8f4ff;
}
.clr-0060b9 {
  color: #0060b9;
}

.minwidth-104 {
  min-width: 104px;
}
.bgrclr-daf0eb {
  background-color: #cffada;
}
.clr-0d9b6a {
  color: #0d9b6a;
}
.borderclr-daf0eb {
  border-color: 1px #daf6e1;
}
.padd-2-10 {
  padding: 2px 10px;
}
.fsize14 {
  font-size: 14px;
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
.h-48 {
  height: 48px !important;
}
.borderclr-cbcb {
  border: 1px solid#2E3031 !important;

  box-shadow: none !important;
}
.fsize16 {
  font-size: 16px !important;
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