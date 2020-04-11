var myChart = echarts.init(document.getElementById('skillMap'));
option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 6,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '学习能力', max: 100},
            { name: 'Python', max: 100},
            { name: 'WEB前端', max: 100},
            { name: '沟通能力', max: 100},
            { name: '主流框架', max: 100},
            { name: 'Java', max: 100},
        ]
    },
    series: [{
        name: '技能雷达图',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [85, 76, 70, 70, 75, 79],
                name: '技能图'
            }
        ]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
