<template>
  <div class="lato-font">
    <div class="headorder">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600"
          >Data Rectifications for User</label
        >
      </div>

      <div class="labels">
        <button class="btn32-mar-l16 ml-8 headBtns active">All (5)</button>
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
                  v-model="searchfiled"
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
    <div class="marg-t-24 padd-0-32" v-if="this.rectifyList.length > 0">
      <b-card class="AllCards padd-0 bordradius-5">
        <table class="w-100">
          <thead class="">
            <tr class="border-bottom">
              <th class="fsize14 clr-000000 padd-12-7 text-center">S.No</th>
              <th class="fsize14 clr-000000 padd-12-7">Name</th>
              <th class="fsize14 clr-000000 padd-12-7">Email</th>
              <th class="fsize14 clr-000000 padd-12-7">Mobile No</th>
              <th class="fsize14 clr-000000 padd-12-7">PAN</th>
              <th class="fsize14 clr-000000 padd-12-7">Ref code</th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">
                Assigned to
              </th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">Status</th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              class="border-bottom"
              v-for="(item, index) in this.rectifyList"
              :key="index"
            >
              <td class="fsize14 padd-12-7 text-center">{{ index + 1 }}</td>
              <td class="fsize14 padd-12-7">{{ item.applicant_name }}</td>
              <td class="fsize14 padd-12-7">{{ item.email }}</td>
              <td class="fsize14 padd-12-7">{{ item.mobile_number }}</td>
              <td class="fsize14 padd-12-7">{{ item.pancard }}</td>
              <td class="fsize14 padd-12-7">{{ item.reffCode }}</td>
              <td class="fsize14 padd-12-7 text-center">-</td>

              <td class="fsize14 padd-12-7 text-center">
                <button
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
      rectifyList: "",
      searchfiled: "",
    };
  },
  methods: {},
  computed: {
    newuserFilter() {
      return this.rectifyList.filter((post) => {
        return post.name.toLowerCase().includes(this.searchfiled.toLowerCase());
      });
    },
  },
  mounted() {
    let jsondata = {
      branchCode: null,
      remishreeCode: null,
      role: 10,
      status: "Rectifi",
    };
    httpService.rectify(jsondata).then((response) => {
      if (response.status == 200) {
        if (response.data["status"] == 1) {
          this.rectifyList = response.data["result"];
        } else {
        }
      }
    });
  },
};
</script>

<style>
</style>