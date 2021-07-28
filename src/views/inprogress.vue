<template>
  <div class="lato-font clr-000000 ">
    <div class="headorder">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600 clr-000000"
          >Customers In Progress</label
        >
      </div>

      <div class="marg-r-8 pl-8 w-100">
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
          Documents (11)
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
    <div class="marg-t-24 padd-0-32" v-if="this.documents.length > 0">
      <b-card class="AllCards padd-0 bordradius-5">
        <table class="w-100 padd-0  ">
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
                <span class="marg-l-4"> {{ item.status }}</span>
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
      documents: [],
    };
  },
  methods: {},
  computed: {

  },

  mounted() {
    let jsondata = {
      branchCode: null,
      remishreeCode: null,
      role: 10,
      status: "In Process",
    };

    httpService.progress(jsondata).then((response) => {
      if (response.status == 200) {
        if (response.data["status"] == 1) {
          for(let item of response.data["result"]){
            if(item.documentSigned == 0){
              this.documents.push(item);
            }
          }
        
          localStorage.setItem(
            "useradminprofile",
            JSON.stringify(response.data["result"])
          );
        } else {
        }
      }
    });
  },
};
</script>

<style>


</style>