<template>
  <v-app>
    <div class="page">
      <div id="header" class="header-border"><hewheader /></div>
      <div id="concept">
        <router-view />
      </div>
      <div id="sidebar"><sidebar /></div>
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
}
#header {
  grid-area: header;
  height: 55px;
  left: 64px;
  width: calc(100% - 64px) !important;
  position: fixed;
  z-index: 3;
  background-color: #ffffff;
}

#concept {
  grid-area: main;
  width: 100%;
  background: #f9f9fb;
}

#sidebar {
  grid-area: sidebar;
  position: fixed;
}
</style>