<template>
  <div class="lato-font">
    <div class="headorder">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600">Data Modifications</label>
      </div>

      <div class="marg-r-8 pl-8 w-100">
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
    <div class="marg-t-24 padd-0-32">
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
</style>