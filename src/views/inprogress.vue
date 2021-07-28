<template>
  <div class="lato-font clr-000000">
    <div class="headorder">
      <div class="padd-8-16 clr-282828">
        <label class="fsize16 marg-0 fw-600 clr-000000"
          >Customers In Progress</label
        >
      </div>

      <div class="marg-r-8 padd-l-16 w-100">
        <button
          class="bttnalign marg-l-16 headBtns active clr-000000 mar-right8"
        >
          All (5)
        </button>
        <button class="bttnalign marg-l-16 headBtns clr-000000 mar-right8">
          Contact (1)
        </button>
        <button class="bttnalign headBtns clr-000000 mar-right8">
          PAN (3)
        </button>
        <button class="bttnalign headBtns clr-000000 mar-right8">
          Profile (5)
        </button>
        <button class="bttnalign headBtns clr-000000 mar-right8">
          Bank Details (9)
        </button>
        <button class="bttnalign headBtns clr-000000 mar-right8">
          Documments (11)
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
    <div class="marg-t-24 padd-0-16" v-if="this.documents.length > 0">
      <b-card class="AllCards padd-0 bordradius-5">
        <table class="w-100">
          <thead class="">
            <tr class="border-bottom">
              <th class="fsize14 clr-000000 padd-12-7 text-center fw-bold">
                S.No
              </th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Name</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">PAN</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Email</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Mobile No</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Stage</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Created</th>
              <th class="fsize14 clr-000000 padd-12-7 fw-bold">Last Updated</th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              class="border-bottom"
              v-for="(item, index) in documents"
              :key="index"
            >
              <td class="fsize14 padd-12-7 text-center">{{ index + 1 }}</td>
              <td class="fsize14 padd-12-7">{{ item.applicant_name }}</td>
              <td class="fsize14 padd-12-7">{{ item.pancard }}</td>
              <td class="fsize14 padd-12-7">{{ item.email }}</td>
              <td class="fsize14 padd-12-7">{{ item.mobile_number }}</td>
              <td class="fsize14 padd-12-7">
                <span class="dot"></span>
                <span class="marg-l-4"> {{item.status}}</span>
              </td>
              <td class="fsize14 padd-12-7">{{ item.createdAt }}</td>
              <td class="fsize14 padd-12-7">{{ item.lastUpdatedAt }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>
import httpService from "../js/http-common-service";
export default {
  name: "dashboard",

  data() {
    return {
      progressList: "",
      documents:[],
    };
  },
  methods: {},
  computed: {
    // newuserFilter() {
    //   return this.newuserList.filter((post) => {
    //     return post.name.toLowerCase().includes(this.searchfiled.toLowerCase());
    //   });
    // },
  },

  mounted() {
    let jsondata = {
      branchCode: null,
      remishreeCode: null,
      role: 10,
      status: "In Process",
    };

    // if (this.progressList.documentSigned == 0) {
      httpService.progress(jsondata).then((response) => {
        if (response.status == 200) {
          if (response.data["status"] == 1) {
            console.log(response);
            this.progressList = response.data["result"];
            this.progressList.forEach(element => {
              if(element.documentSigned == 0){
                this.documents.push(element);
              }
            });
            localStorage.setItem(
              "useradminprofile",
              JSON.stringify(response.data["result"])
            );
          } else {
            console.log(response.data["reason"]);
          }
        }
      });
    // }
  },
};
</script>

<style>
.welcomeText {
  padding: 8px 8px 8px 16px;
  color: #282828;
  font-weight: 600;
  font-size: 16px;
}
.btn32 {
  /* margin-left: 8px !important; */
  border: 1px solid #e6e6e6 !important;
  font-size: 12px !important;
  color: #282828 !important;
  background: #e6e6e6 !important;
}

/* .headBtns.active {
  background-color: #1f3565 !important;
  color: #fff !important;
  border-radius: 2px !important;
  border: 1px solid #1f3565 !important;
} */
.solid1,
.solid2 {
  border: 0;
  border-top: 1px solid #a2a2a2;
  margin: 7px 16px 0 !important;
}
.bgrclr-d6f2ff {
  background-color: #d6f2ff;
}
.padd-0-16 {
  padding: 0px 16px;
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
.dot {
  height: 12px;
  width: 12px;
  background-color: #ff2e2e;
  border-radius: 50%;
  display: inline-block;
}
.marg-l-4 {
  margin-left: 6px !important;
}
</style>