var myChart = echarts.init(document.getElementById('skillMap'));
option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'Java', max: 100},
            { name: 'Python', max: 100},
            { name: '前端', max: 100},
            { name: '项目开发', max: 100},
            { name: '编程基础', max: 100},
            { name: '沟通能力', max: 100}
        ]
    },
    series: [{
        name: '技能雷达图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [80, 70, 75, 90, 80, 75],
                name: '技能雷达图'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);