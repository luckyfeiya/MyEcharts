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
// 柱状图2
(function() {
    // 定义一组颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 实例化对象指定容器
    const myChart = echarts.init(document.querySelector('.bar1 .chart'));
    const option = {
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: "none"
        //     }
        // },
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        // 让x轴不显示
        xAxis: {
            show: false
        },
        yAxis: [
            // y轴的第一组数据
            {
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                inverse: true,
                axisLine:{
                    show:false
                },
                axisTick:{
                    show: false
                },
                axisLabel:{
                    color: "#fff"
                }
            },
            // y轴的第二组数据
            {
                show: true,
                data:[702, 350, 610, 793, 664],
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                  textStyle: {
                    fontSize: 12,
                    color: "#fff"
                  }
                }
              }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                barWidth: 10,
                varCategoryGap: 50,
                yAxisIndex: 0,
                itemStyle: {
                    normal :{
                        // 修改第一组柱子的圆角
                        barBorderRadius: 20
                    }
                },
                label :{
                    normal: {
                        show : true,
                        position: "inside",
                        formatter: "{c}%"
                    }
                },
                itemStyle :{
                    normal:{
                        barBorderRadius: 20,
                        color: function(params){
                            return myColor[params.dataIndex];
                        }
                    }
                },
                data: [70, 34, 60, 78, 69],
            },
            {
                name: "框",
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 折线图1
(function() {
    var myChart = echarts.init(document.querySelector('.line .chart'));
    var yearData = [
        {
          year: '2020',  // 年份
          data: [  // 两个数组是因为有两条线
               [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
               [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
          year: '2021',  // 年份
          data: [  // 两个数组是因为有两条线
               [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
               [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var option = {    
        color:["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
              },
              right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick:{
                show: false
            },
            axisLabel:{
                color: '#4c9bfd'
            },
            axisLine:{
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show: false
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            axisLine:{
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                smooth: true,
                data:  yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    };
    $(".line h2").on("click","a",function(){
        console.log($(this).index());
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option);
    })
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();
// 折线图2
(function() {
    var myChart = echarts.init(document.querySelector('.line1 .chart'));
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['播放量', '转发量'],
            top: "0%",
            textStyle:{
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                axisLabel:{
                    textStyle:{
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine:{
                    lineStyle:{
                        color: "rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{
                    show: false
                },
                axisLine:{
                    color: "rgba(255,255,255,.1)"
                },
                axisLabel:{
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine:{
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                smooth: true,
                lineStyle:{
                    color: "#0184d5",
                    width: 2 
                },
                areaStyle: {
                    // 第一条线的渐变色
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                symbol: "circle",
                symbolSize: 8,
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                      color: "#00d887",
                      width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                              offset: 0.8,
                              color: "rgba(0, 216, 135, 0.1)"
                            }
                          ],
                          false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                      }
                },
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                showSymbol: false,
                data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();