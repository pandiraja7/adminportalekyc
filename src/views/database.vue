<template>
  <div class="lato-font">
    <div class="headorder">
      <div class="padd-8-16 clr-282828">
        <label class="fsize16 marg-0 fw-600">Data Modifications</label>
      </div>

      <div class="marg-r-8 padd-l-16 w-100">
        <button class="bttnalign headBtns active marg-r-8">All (5)</button>
        <button class="bttnalign headBtns  marg-r-8">Requsted (10)</button>
        <button class="bttnalign headBtns  marg-r-8">Signed (5)</button>
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
    <div class="marg-t-24 padd-0-16">
      <b-card class="AllCards padd-0 bordradius-5">
        <table class="w-100 padd-0 ">
          <thead class="">
            <tr class="border-bottom">
              <th class="fsize14 clr-000000 padd-12-7 text-center">S.No</th>
              <th class="fsize14 clr-000000 padd-12-7">Name</th>
              <th class="fsize14 clr-000000 padd-12-7">Email</th>
              <th class="fsize14 clr-000000 padd-12-7">Mobile No</th>
              <th class="fsize14 clr-000000 padd-12-7">PAN</th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">
                E-sign Requested
              </th>
              <th class="fsize14 clr-000000 padd-12-7 text-center">
                E-sign Completed
              </th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="border-bottom"     
            >
              <td class="fsize14 padd-12-7 text-center">1</td>
              <td class="fsize14 padd-12-7">PONRAJ SARAVANAN</td>
              <td class="fsize14 padd-12-7">cpsaravanan91@yahoo.com</td>
              <td class="fsize14 padd-12-7">9710944723</td>
              <td class="fsize14 padd-12-7">EGLPS8125M</td>
              <td class="fsize14 padd-12-7 text-center">Yes</td>
              <td class="fsize14 padd-12-7 text-center">Yes</td>
            </tr>
            <tr class="border-bottom">
              <td class="fsize14 padd-12-7 text-center">2</td>
              <td class="fsize14 padd-12-7">SARAVANAN</td>
              <td class="fsize14 padd-12-7">saravanan91@yahoo.com</td>
              <td class="fsize14 padd-12-7">9710944723</td>
              <td class="fsize14 padd-12-7">LPS8125M</td>
              <td class="fsize14 padd-12-7 text-center">No</td>
              <td class="fsize14 padd-12-7 text-center">No</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",

  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>
.btn32 {
  margin-left: 8px !important;
  border: 1px solid #e6e6e6 !important;
  font-size: 12px !important;
  color: #282828 !important;
  background: #e6e6e6 !important;
}
.btn32 {
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
/* end */
</style>