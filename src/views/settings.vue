<template>
    <div class="headorder lato-font ">
      <div class="padd-8-32 clr-282828">
        <label class="fsize16 marg-0 fw-600">Settings</label>
      </div>

      <div class="marg-r-8 pl-8 w-100">
        <button class="bttnalign headBtns marg-r-8 active">All (5)</button>
        <button class="bttnalign headBtns marg-r-8 ">Requsted (10)</button>
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
</template>

<script>
export default {
  name: "dashboard",

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>

</style>