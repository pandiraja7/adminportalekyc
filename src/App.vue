<template>
  <v-app>
    <div id="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
html {
  overflow-y: overlay !important;
   /* font-family: "Lato,Regular" !important; */
}
*{
  font-family: "Lato" !important; 
}
@font-face {
  font-family: "Lato";
  src: local("fonts"), url(./assets/fonts/Lato-Regular.ttf) format("truetype");
}
.lato-font {
  font-family: "Lato" !important;
}
.marg-0 {
  margin: 0px !important;
}
.fsize34 {
  font-size: 34px;
}
.fsize22 {
  font-size: 22px;
}
.fsize18 {
  font-size: 18px;
}
.fsize16 {
  font-size: 16px;
}
.fsize14 {
  font-size: 14px;
}
.fsize12 {
  font-size: 12px;
}
.fsize11 {
  font-size: 11px;
}
.marg-l-40 {
  margin-left: 40px;
}
.marg-r-40 {
  margin-right: 40px;
}
.marg-l-4 {
  margin-left: 6px !important;
}
.marg-t-48 {
  margin-top: 48px;
}
.marg-t-42 {
  margin-top: 42px;
}
.marg-t-24 {
  margin-top: 24px;
}
.clr-0073bc {
  color: #0073bc;
}
.clr-fff {
  color: #ffffff !important;
}
.bgclr-fff {
  background-color: #ffffff;
}
.f-right {
  float: right;
}
.justify-content-flex-end {
  justify-content: flex-end;
}

.clr-000000 {
  color: #000000;
}
.bgclr-000000 {
  background-color: #000000;
}
.marg-t-140 {
  margin-top: 140px;
}
.border1px {
  border: solid 1px #cbcbcb;
}
.borderclr-e1e1e1 {
  border: solid 1px #e1e1e1;
}
.boxshadow-none {
  box-shadow: none !important;
}
.outline-none {
  outline: none !important;
}
.border-radius {
  border-radius: 4px !important;
}
.border-radius3 {
  border-radius: 3px !important;
}
.padd-0-32 {
  padding: 0 32px !important;
}
.bgrclr-0073bc {
  background-color: #0073bc;
}
.h-48 {
  height: 48px;
}
.padd-0 {
  padding: 0px !important;
}
.w-100 {
  width: 100% !important;
}
.clr-282828 {
  color: #282828;
}
.fw-600 {
  font-weight: 600;
}
/* end */

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
/* //  b-card css */
.border-bottom {
  border-bottom: 1px solid #e1e1e1;
}


.AllCards {
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0 !important;
  border-radius: 5px !important;
}
 /* end */
.fw-bold {
  font-weight: bold !important;
}
.card {
  border: none !important ;
  background-clip: unset !important;
}
.bordradius-5 {
  border-radius: 5px !important;
}
.table,
tr,
th {
  height: 56px !important;
}
.padd-12-7 {
  padding: 12px 10px !important;
}
.headBtns.active {
  background-color: #1f3565 !important;
  color: #fff !important;
  border-radius: 2px !important;
  border: 1px solid #1f3565 !important;
}

.custom-select {
  display: inline-block;
  height: 40px !important;
  width: 316px;
  padding: 8px 0px 8px 24px !important;
  font-size: 13px !important;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  vertical-align: middle;
  /* background: #fff url("./assets/dropdowimg.svg") right .75rem no-repeat !important; */
  background: #fff url("./assets/dropdownarrow1.png") right 8px center no-repeat !important;
  border: 1px solid #cbcbcb !important;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none !important;
}
.custom-select-review {
  display: inline-block;
  height: 46px !important;
  width: 304px;
  padding: 8px 0px 8px 24px !important;
  font-size: 13px !important;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  vertical-align: middle;
  /* background: #fff url("./assets/dropdowimg.svg") right .75rem no-repeat !important; */
  background: #fff url("./assets/images/downArrow.svg") right 8px center
    no-repeat !important;
  border: 1px solid #cbcbcb !important;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none !important;
}
.is-invalid {
  border: 1px solid red !important;
}
.validatemessage {
  color: #ff0000 !important;
  font-size: 10px;
}
.imgLogin {
  width: 70% !important;
  height: 70% !important;
}
.custom-card {
  width: 344px !important;
  height: 400px !important;
  border: 1px solid #eee;
}
.custom-card-acc-block,
.custom-card-acc-recovery {
  width: 344px;
  height: 440px;
  border: 1px solid #eee;
}
.custom-card-acc-recovery {
  height: 512px;
}
.padd-16-24 {
  padding: 16px 24px 24px !important;
}
.bor-radius {
  border-radius: 4px !important;
}
.boxshad {
  box-shadow: 1px 1px 4px #eee;
}
.back-color {
  background-color: #fff;
}
.Img-div {
  /* margin-top: 8px !important; */
  margin-bottom: 6px !important;
}
.widthHeight {
  height: 40px !important;
  /* width: 100px !important; */
}
.widthHeight2 {
  height: 32px !important;
  width: 66px !important;
}
.custom-head {
  color: #282828;
  font-size: 20px;
  line-height: 32px !important;
  height: 32px !important;
  font-weight: 500;
}
.mar-b-8 {
  margin-bottom: 8px !important;
}
.custom-sub-head {
  font-size: 14px;
  color: #55585a !important;
  height: 24px !important;
}
.mar-b-16 {
  margin-bottom: 16px !important;
}

.h-72 {
  height: 72px !important;
}
.mar-b-32 {
  margin-bottom: 32px !important;
}
.l-height32 {
  line-height: 32px !important;
  height: 32px !important;
}
.fsize14 {
  font-size: 14px;
}
.padd-l-8 {
  padding-left: 8px !important;
}
.h-40 {
  height: 40px !important;
}
.padd-8-32 {
  padding: 8px 32px !important;
}
.padd-8-8-16{
  padding: 8px 8px 8px 16px !important;
}
.border-input {
  border: solid 1px #a8a8a8 !important;
  box-shadow: none !important;
}
.fsize14bold-btn {
  font-size: 14px !important;
  color: #fff !important;
  box-shadow: none !important;
  background-color: #0065be !important;
}
.fsize10-link {
  color: #0075e1 !important;
  font-size: 12px;
}
.cursor {
  cursor: pointer !important;
}
.f-right {
  float: right !important;
}
.padd-r-8 {
  padding-right: 8px !important;
}
.marg-b-24 {
  margin-bottom: 24px;
}
.textNone {
  text-transform: none !important;
}
.l-height-27 {
  line-height: 27px;
}
.l-height-24 {
  line-height: 24px;
}
.height-18 {
  height: 18px !important;
}
.imagealign {
  float: right;
  position: absolute;
  margin-left: -35px;
  margin-top: 9px;
}
.marg-r-8 {
  margin-right: 8px;
}
.overflow-y-auto{
   overflow-y: auto !important;
}
/* //Author:Vijayabaskar
//@at-root Align common class for css// */

.bttnalign {
  border: 1px solid #e6e6e6;
  font-size: 12px;
  color: #282828;
  background: #e6e6e6;
  padding: 3px 12px;
}
.mar-right8 {
  margin-right: 8px !important;
}
.padd-l-16 {
  padding-left: 16px;
}
.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 250px !important;
}
.v-dialog > .v-card > .v-card__title {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  padding: 16px 24px;
}
.valign-top {
  vertical-align: top !important;
}
.borderclr-2E3031 {
  border: solid 1px #2e3031 !important;
}
.clr-2E3031 {
  color: #2e3031;
}
.bdr-cbcbcb {
  border: 1px solid #cbcbcb;
}
.h-80 {
  height: 80px !important;
}

/* // reduced by css by bharath  */
.search {
  color: #0075e1 !important;
  font-size: 12px !important;
  cursor: pointer;
  margin-right: 32px !important;
}
.searchwhole {
  margin: 0;
  position: relative;
  padding: 4px 0 6px;
  border: 1px solid #ededed !important;
  border-radius: 4px;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
}
.search-box input {
  transition-duration: 0.3s;
}
.search-box input:focus {
  width: 200px;
}
.search-box {
  margin: 0 8px;
}

.welcomeText {
  color: #282828;
  font-weight: 600;
  font-size: 16px;
}
.btn32 {
  margin-left: 8px !important;
  border: 1px solid #e6e6e6 !important;
  font-size: 12px !important;
  color: #282828 !important;
  background: #e6e6e6 !important;
}
.btn32-mar-l16 {
  border: 1px solid #e6e6e6;
  font-size: 12px;
  color: #282828;
  background: #e6e6e6;
  padding: 3px 12px;
}
.solid1,
.solid2 {
  border: 0;
  border-top: 1px solid #a2a2a2;
  margin: 7px 32px 0 !important;
}
.placeholdsearch {
  font-size: 13px;
  height: 24px;
  margin-left: 5px;
  width: 100px;
  color: #56585a;
}
.marg0-2-8 {
  margin: 0px 8px 2px 8px;
}
.bgrclr-d6f2ff {
  background-color: #d6f2ff;
}
.dot {
  height: 12px;
  width: 12px;
  background-color: #ff2e2e;
  border-radius: 50%;
  display: inline-block;
}
.marg-t-2 {
  margin-top: 2px !important;
}
.padd-2-10 {
  padding: 2px 10px;
}
</style>
