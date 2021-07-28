<template>
  <div class="">
    <div class="lato-font clr-000000 headorder">
      <div class="welcomeText padd-8-32">
        <label class="fsize16 marg-0 clr-000000"
          >Welcome, <span class="">Rajamani</span></label
        >
      </div>

      <div class="labels">
        <button class="btn32-mar-l16 ml-8 headBtns active clr-000000">
          Dashboard
        </button>
      </div>
      <hr class="solid2" />
      <div class="padd-0-32 marg-t-24">
        <b-card class="AllCards padd-0 bordradius-5">
          <div class="chart-wrapper echarts-align">
            <IEcharts :option="line"></IEcharts>
          </div>
        </b-card>
      </div>
      <div class="marg-t-24 padd-0-32">
        <b-card class="AllCards padd-0 bordradius-5">
          <div class="chart-wrapper echarts-align">
            <IEcharts :option="bar"></IEcharts>
          </div>
        </b-card>
      </div>
      <div class="padd-0-32 marg-t-24 padd-b-70">
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