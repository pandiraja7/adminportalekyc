<template>
  <div class="row marg-0 opansans-font header" style="font-size: 12px display-flex:none">
    <!-- <div class="wrapper"> -->
    <div class="row marg-0 header-border" style="display-flex:none">
      <div class="h-56 fsize12 col f-right">
        <!-- <p class="para-wrap"> -->
        <span><img src="@/assets/Image 1.png" alt="" /></span>
        <div class="marg-l-10 ">
          <div class="mr5 text-uppercase" for="">Raghu Rajamani</div>
          <div for="">8754354356</div>
        </div>

        <span class="fsize12-nifty custom-wrap"> </span>
        <!-- </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {},

  mounted() {},
};
</script>

<style>
.ml5 {
  margin-left: 5px;
}
.mr5 {
  margin-right: 5px;
}
.p,
.v-application p {
  margin-bottom: 0 !important;
}
.custom-wrap {
  display: inline-block !important;
}
.para-wrap {
  white-space: normal !important;
  text-align: center;
}
.wrapper {
  padding: 0;
  width: 100%;
  margin: 0 auto;
}
.col {
  padding: 0 10px !important;
}

.h-56 {
  height: 55px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
}
.border-lft {
  border-left: solid 1px #ededed;
  content: "";
  height: 24px !important;
  top: 16px !important;
}
@media (min-width: 1024px) {
  .header-left,
  .header-right {
    border-bottom: solid 1px #a2a2a2;
  }
  .header-left {
    height: 56px !important;
    width: calc(100% - 300px);
    background: #fff;
  }
  .header-right {
    width: calc(100% - (100% - 300px));
  }
}
@media (min-width: 1152px) {
  .header-left,
  .header-right {
    border-bottom: solid 1px #a2a2a2;
  }
  .header-left {
    height: 56px !important;
    width: calc(100% - 350px);
    background: #fff;
  }
  .header-right {
    width: calc(100% - (100% - 350px));
  }
}
@media (min-width: 1280px) {
  .header-left,
  .header-right {
    border-bottom: solid 1px #a2a2a2;
  }
  .header-left {
    height: 56px !important;
    width: calc(100% - 400px);
    background: #fff;
  }
  .header-right {
    width: calc(100% - (100% - 400px));
  }
}
@media (min-width: 1440px) {
  .header-left,
  .header-right {
    border-bottom: solid 1px #a2a2a2;
  }
  .header-left {
    height: 56px !important;
    width: calc(100% - 400px);
    background: #fff;
  }
  .header-right {
    width: calc(100% - (100% - 400px));
  }
}
.header-right {
  padding: 11px 16px 11px 0;
}
.pUserId,
.pUserName {
  font-size: 12px;
  color: #282828;
  cursor: pointer;
  float: right;
}
.pUserId {
  font-size: 10px;
  color: #56585a;
}
.dropItemsP {
  width: 100%;
}
div.v-menu__content {
  min-width: 100px;
  top: 55px !important;
  left: 887px;
  transform-origin: left top;
  z-index: 8;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: none;
}
.dropdown-list-items {
  min-width: 125px;
  top: 60px;
  left: 1306px;
  transform-origin: left top;
  z-index: 8;
  display: flex;
  line-height: 32px;
  font-size: 14px;
  background-color: #fff !important;
  padding: 6px 8px 0;
}

.header-border {
  border-bottom: 1px solid #a2a2a2;
    width: 100% !important;
}
.marg-l-10 {
  margin-left: 10px;
}
</style>
