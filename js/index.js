// 柱状图模块1
(function(){
    // 1.实例化对象
    const myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    const option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine:{
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                       color: "rgba(255,255,255,.1)",
                    }
                },
                splitLine: {
                    lineStyle: {
                       color: "rgba(255,255,255,.1)"
                     }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                // 修改柱子宽度
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                  // 修改柱子圆角
                  barBorderRadius: 5
                }
              }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);

    // 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart.resize();
      });
})();