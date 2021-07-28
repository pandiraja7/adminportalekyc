<template>
  <div class="lato-font clr-000000">
    <div class="headorder">
      <div class="welcomeText">
        <label class="fsize16 marg-0 clr-000000"
          >Welcome, <span class="">Rajamani</span></label
        >
      </div>

      <div class="labels">
        <button class="btn32-mar-l16 headBtns active clr-000000">
          Dashboard
        </button>
      </div>
      <hr class="solid2" />
      <div class="padd-0-16 marg-t-24">
        <b-card class="AllCards padd-0 bordradius-5">
          <div class="chart-wrapper echarts-align">
            <IEcharts :option="line"></IEcharts>
          </div>
        </b-card>
      </div>
      <div class="marg-t-24 padd-0-16">
        <b-card class="AllCards padd-0 bordradius-5">
          <div class="chart-wrapper echarts-align">
            <IEcharts :option="bar"></IEcharts>
          </div>
        </b-card>
      </div>
      <div class="padd-0-16 marg-t-24 padd-b-70">
        <b-card class="AllCards padd-0 bordradius-5 padd-15">
          <div class="chart-wrapper1 echarts-align">
            <IEcharts :option="pie"></IEcharts>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import IEcharts from "vue-echarts-v3";
export default {
  name: "dashboard",
  components: {
    IEcharts,
  },
  data() {
    return {
      line: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, language: "en", readOnly: false },
          },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            smooth: true,
          },
        ],
      },
      bar: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, language: "en", readOnly: false },
          },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "bar",
            smooth: true,
          },
        ],
      },
      pie: {
        title: {
          text: "Pie Chart",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Series",
            type: "pie",
            radius: "50%",
            data: [
              { value: 98, name: "Team A" },
              { value: 70, name: "Team B" },
              { value: 88, name: "Team C" },
              { value: 94, name: "Team D" },
              { value: 75, name: "Team E" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },

  methods: {},
};
</script>

<style>
.welcomeText {
  padding: 8px 8px 8px 16px;
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
  margin-left: 16px;
  border: 1px solid #e6e6e6;
  font-size: 12px;
  color: #282828;
  background: #e6e6e6;
  padding: 3px 12px;
}
/* .headBtns.active {
   background-color: #000 !important; 
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

/**
Align echarts width height */

.chart-wrapper {
  height: 350px !important;
  width: auto !important;
}
.chart-wrapper1 {
  height: 400px !important;
  width: auto !important;
}
.padd-b-70 {
  padding-bottom: 70px !important;
}
.padd-15 {
  padding: 15px !important;
}
</style>