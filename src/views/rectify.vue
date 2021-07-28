<template>
  <div class="lato-font">
    <div class="headorder">
      <div class="padd-8-16 clr-282828">
        <label class="fsize16 marg-0 fw-600"
          >Data Rectifications for User</label
        >
      </div>

      <div class="labels">
        <button class="btn32-mar-l16 headBtns active">All (5)</button>
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
    <div class="marg-t-24 padd-0-16" v-if="this.rectifyList.length > 0">
      <b-card class="AllCards padd-0 bordradius-5">
        <table class="w-100">
          <thead class="">
            <!-- <tr class="border-bottom"> -->
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
          console.log(response);
          this.rectifyList = response.data["result"];
        } else {
        }
      }
    });
  },
};
</script>

</script>

<style>
.btn32 {
  margin-left: 8px !important;
  border: 1px solid #e6e6e6 !important;
  font-size: 12px !important;
  color: #282828 !important;
  background: #e6e6e6 !important;
}
.btn32-mar-l16 {
  margin-left: 16px;
  border: 1px solid #e6e6e6;
  font-size: 12px;
  color: #282828;
  background: #e6e6e6;
  padding: 3px 12px;
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
.item-align {
  align-items: center;
}
/* end */

.padd-2-10 {
  padding: 2px 10px;
}
</style>