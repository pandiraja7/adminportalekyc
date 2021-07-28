<template>
  <v-app class="opansans-font">
    <div class="sidebar">
      <v-card class="sideBarCard">
        <div class="menu-items default-font cutom">
          <div class="text-center mx-auto w-64">
            <!-- <img
              src="@/assets/Logo.svg"
              class="mt-2 cursor h-28 w-70"
              alt="Logo"
            /> -->
            <img
              src="..\assets\Philliplogo.svg"
              class="mt-2 cursor h-28 w-70"
              alt=""
            />
          </div>
          <div class="d-block text-center mx-auto w-64">
            <v-divider class="mx-2 mb-6 mt-6"></v-divider>
          </div>
          <div>
            <router-link
              to="/dashboard"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block text-center mx-auto mb-4 w-64 home"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/dashboard.png"
                      alt=""
                    />
                  </div>
                  <div
                    for=""
                    class="side-label-dashact logoLabel active let-space"
                  >
                    Dashboard
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div id="order">
            <router-link
              to="/inprogress"
              active-class="active"
              tag="button"
              exact
              linkActiveClass
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/inprogress.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Progress
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div id="postion">
            <router-link
              to="/review"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/review.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Review
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- <div id="hold">
            <router-link
              to="/esign"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="..\assets\activation.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active">E-sign</div>
                </div>
              </div>
            </router-link>
          </div> -->

          <div id="fund">
            <router-link
              to="/rectify"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64 funds"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/correction.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Rectify
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div id="fund">
            <router-link
              to="/database"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64 funds"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/update.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Data Base
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div id="fund">
            <router-link
              to="/reports"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64 funds"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/Reports.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Reports
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div id="set">
            <router-link
              to="/newuser"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/Add User.svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    New User
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div id="set">
            <router-link
              to="/settings"
              active-class="active"
              tag="button"
              exact
              class="side-btn logoIcon"
            >
              <div class="link-container">
                <div
                  class="d-block logoIcon text-center mx-auto mb-4 w-64"
                  id="logo1"
                >
                  <div>
                    <img
                      class="Location logoIcon h-24 w-24"
                      src="@/assets/Settings(new).svg"
                      alt=""
                    />
                  </div>
                  <div class="side-label-dashact logoLabel active let-space">
                    Settings
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  data() {
    return {
      activeItem: "",
      activeSideNavItem: "home",
    };
  },
  methods: {},
  mounted() {
    //  function for active enable in class
    $(document).ready(function () {
      $(".logoIcon").on("click", function () {
        $(".logoIcon").removeClass("active");
        $(this).addClass("active");
      });
    });
  },
  // beforeMount
};
</script>

<style>
.h-28 {
  height: 32px;
}
.w-70 {
  width: 64px;
}

.sidebar {
  width: 64px;
}
.v-sheet.v-card {
  border-radius: 0 !important;
}
.sideBarCard {
  min-height: 100vh !important;
  padding: 0 !important;
}
.theme--light.v-divider {
  border-color: #a2a2a2 !important;
  margin-top: 11px !important;
}
.w-64 {
  width: 64px !important;
}
.side-label,
.side-label-dash {
  font-size: 11px !important;
  line-height: 16px;
}
.side-label-dashact {
  color: #000;
  font-size: 11px;
  font-weight: 400px !important;
}
.v-application .mt-2 {
  margin-top: 12px !important;
}

.logoIcon.active,
.logoIcon:hover {
  filter: invert(50%) sepia(85%) saturate(5176%) hue-rotate(192deg)
    brightness(102%) contrast(106%);
}

.h-24 {
  height: 24px;
}
.w-24 {
  width: 24px;
}
.let-space {
  letter-spacing: 0.4px;
}
</style>
