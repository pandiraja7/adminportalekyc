<template>
  <v-app>
    <div class="page">
      <div id="header"><hewheader /></div>
      <div id="concept">
        <router-view />
      </div>
      <div id="sidebar"><sidebar /></div>
      <!-- <div id="content1"><marketwatches /></div> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: "dashboard",
  components: {
    sidebar: () =>
      import(/* webpackChunkName: "sidebar" */ "../components/sidebar"),
    hewheader: () =>
      import(/* webpackChunkName: "newheader" */ "../components/newheader"),
  },
};
</script>

<style>
.page {
  display: grid;
  height: 100vh;
  grid-template-columns: 64px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "sidebar header header "
    "sidebar main main ";
  overflow: hidden !important;
}
#header {
  grid-area: header;
  height: 55px;
  left: 64px;
  width: calc(100% - 64px);
  position: fixed;
}

#concept {
  grid-area: main;
  overflow-y:overlay !important;
  width: 100%;
  background: #f9f9fb;
  position: relative;
   /* width: calc(100% - 64px); */
  
}

#sidebar {
  grid-area: sidebar;
  position: fixed;
}
</style>