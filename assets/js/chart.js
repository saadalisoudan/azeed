"use strict";

/*======== 1. SPLINA AREA CHART 01 ========*/
var splinaArea1 = document.querySelector("#spline-area-1");
if (splinaArea1 !== null) {
  var splinaAreaOptions1 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#1ad598', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea1 = new ApexCharts(splinaArea1, splinaAreaOptions1);
  randerSplinaArea1.render();
}

var splinaArea2 = document.querySelector("#spline-area-2");
if (splinaArea2 !== null) {
  var splinaAreaOptions2 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#EA3A3D', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea2 = new ApexCharts(splinaArea2, splinaAreaOptions2);
  randerSplinaArea2.render();
}


var splinaArea3 = document.querySelector("#spline-area-3");
if (splinaArea3 !== null) {
  var splinaAreaOptions3 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#1ad598', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea3 = new ApexCharts(splinaArea3, splinaAreaOptions3);
  randerSplinaArea3.render();
}

var splinaArea4 = document.querySelector("#spline-area-4");
if (splinaArea4 !== null) {
  var splinaAreaOptions4 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#1ad598', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea4 = new ApexCharts(splinaArea4, splinaAreaOptions4);
  randerSplinaArea4.render();
}

var splinaArea5 = document.querySelector("#spline-area-5");
if (splinaArea5 !== null) {
  var splinaAreaOptions5 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#EA3A3D', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea5 = new ApexCharts(splinaArea5, splinaAreaOptions5);
  randerSplinaArea5.render();
}


var splinaArea6 = document.querySelector("#spline-area-6");
if (splinaArea6 !== null) {
  var splinaAreaOptions6 = {
    chart: {
      id: "spline-area-1",
      group: "social",
      height: 80,
      width: "100%",
      background: "#fff",
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ['#1ad598', '#00E396', '#CED4DC'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.75,
        stops: [20, 100, 100, 100]
      }
    },

    tooltip: {
      theme: "dark",
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },

    series: [
      {
        data: [18, 15, 18, 16, 17, 19, 17, 18],
      },
    ],
  };
  var randerSplinaArea6 = new ApexCharts(splinaArea6, splinaAreaOptions6);
  randerSplinaArea6.render();
}

/*======== 6. RADIAL BAR CHART 01 ========*/
var radialBarChart1 = document.querySelector("#radial-bar-chart-1");
if (radialBarChart1 !== null) {
  var radialBarOptions1 = {
    chart: {
      width: "100%",
      type: "radialBar",
      height: 200,
    },
    plotOptions: {
      radialBar: {
        size: 100,
        hollow: {
          size: "75%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            color: "#222",
          },
          value: {
            show: true,
            fontSize: "18px",
            fontFamily: undefined,
            color: "#6d3f8f",
            offsetY: 16,
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: "#6d3f8f",
    },
    series: [100],
    labels: ["+112 %"],
  };

  var randerRadialBar1 = new ApexCharts(radialBarChart1, radialBarOptions1);
  randerRadialBar1.render();
}

var radialBarChart2 = document.querySelector("#radial-bar-chart-2");
if (radialBarChart2 !== null) {
  var radialBarOptions2 = {
    chart: {
      width: "100%",
      type: "radialBar",
      height: 200,
    },
    plotOptions: {
      radialBar: {
        size: 100,
        hollow: {
          size: "75%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            color: "#222",
          },
          value: {
            show: true,
            fontSize: "18px",
            fontFamily: undefined,
            color: "#229BAA",
            offsetY: 16,
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: "#229BAA",
    },
    series: [100],
    labels: ["+70 %"],
  };

  var randerRadialBar2 = new ApexCharts(radialBarChart2, radialBarOptions2);
  randerRadialBar2.render();
}

var radialBarChart3 = document.querySelector("#radial-bar-chart-3");
if (radialBarChart3 !== null) {
  var radialBarOptions3 = {
    chart: {
      width: "100%",
      type: "radialBar",
      height: 200,
    },
    plotOptions: {
      radialBar: {
        size: 100,
        hollow: {
          size: "75%",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            color: "#222",
          },
          value: {
            show: true,
            fontSize: "18px",
            fontFamily: undefined,
            color: "#000",
            offsetY: 16,
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: "#000",
    },
    series: [100],
    labels: ["+23 %"],
  };

  var randerRadialBar3 = new ApexCharts(radialBarChart3, radialBarOptions3);
  randerRadialBar3.render();
}

/*======== 15.1 ARIA CHART 01 ========*/
var ariaChartExample = document.querySelector("#aria-chart");
if (ariaChartExample !== null) {
  var options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#0090FF"],
    fill: {
      colors: ["#e1f2ff"],
      type: "solid",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        data: ['0k', '15k', '20k', '5k', '0k', '10k', '5k'],
      }
    ],
    yaxis: {
      categories: ["0 k", "5 k", "10 k", "15 k", "20 k"],
    },
    xaxis: {
      categories: ["0.9 Mon", "10 Tue", "11 Wed", "12 Thu", "13 Fri", "14 Sat", "15 Sun"],
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
  };

  var chart = new ApexCharts(ariaChartExample, options);

  chart.render();
}
