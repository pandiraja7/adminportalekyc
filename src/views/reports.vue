<template>
  <v-app class="lato-font ">
    <div class="headorder">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600">Reports</label>
      </div>

      <div class="marg-r-8 pl-8 w-100">
        <button class="bttnalign headBtns active marg-r-8">All (5)</button>
        <button class="bttnalign headBtns marg-r-8">Requsted (10)</button>
        <button class="bttnalign headBtns ">Signed (5)</button>
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
          <span class="downlo" id="btnExport"
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
    <div class="marg-t-24 padd-0-32 " v-if="this.reportList.length > 0">
      <b-card class="AllCards padd-0 bordradius-5 mb-8 ">
        <table class="w-100 padd-0 ">
          <thead class="">
            <tr class="border-bottom">
              <th class="fsize14 clr-000000 padd-12-7 text-center">S.No</th>
              <th class="fsize14 clr-000000 padd-12-7">Name</th>
              <th class="fsize14 clr-000000 padd-12-7">Email</th>
              <th class="fsize14 clr-000000 padd-12-7">Mobile No</th>
              <th class="fsize14 clr-000000 padd-12-7">PAN</th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">E-sign Requested</th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">E-sign Completed</th>
             </tr>
          </thead>
          <tbody class="">
            <tr class="border-bottom" v-for="(item,index) in this.reportList"
              :key="index">
              <td class="fsize14 padd-12-7 text-center">{{index+1}}</td>
              <td class="fsize14 padd-12-7">{{item.applicant_name}}</td>
              <td class="fsize14 padd-12-7">{{item.email}}</td>
              <td class="fsize14 padd-12-7">{{item.mobile_number}}</td>
              <td class="fsize14 padd-12-7">{{item.pancard}}</td>
              <td class="fsize14 padd-12-7 text-center">Yes</td>
              <td class="fsize14 padd-12-7 text-center">Yes</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
  </v-app>
</template>

<script>
import httpService from "../js/http-common-service";
export default {
  name: "dashboard",

  data() {
    return {
      reportList:"",
    };
  },
   methods: {},
  mounted() {
    let jsondata = {
      startDate: "2021-07-23",
      endDate: "2021-07-23",
      branchCode: "CHE",
      remishreeCode: "ABSL1",
      role: 10,
    };
    httpService.reports(jsondata).then((response) => {
      if (response.status == 200) {
        if (response.data["status"] == 1) {
          this.reportList = response.data['result'];
        } else {
        }
      }
    });
  },
};
</script>

<style>
</style>