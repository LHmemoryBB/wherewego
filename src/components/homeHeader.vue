<template>
    <div>
        <div ref="myChart" style="width: 100px;height: 100px;"></div>
    </div>

</template>

<script>
    export default {
        mounted(){
            this.aaa()
        },
        methods:{
            aaa() {
            let myChart = this.$echarts.init(this.$refs.myChart)
            let option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            };
            myChart.setOption(option);
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>