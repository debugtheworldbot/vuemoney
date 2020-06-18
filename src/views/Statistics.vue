<template>
    <div>
        <Layout>
            {{type}}
            {{interval}}
            <Tabs clear-prefix="type" :data-source="typeList" :value.sync="type"/>
            <Tabs clear-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        </Layout>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    import Types from "@/views/Money/Types.vue";
    import Tabs from "@/views/Tabs.vue";
    @Component({
        components:{Tabs, Types},
    })
    export default class Statistics extends Vue{
        intervalList=[{text:'day',value:'day'},{text:'week',value:'week'},{text:'mouth',value:'mouth'}]
        typeList=[{text:'支出',value:'-'},{text:'收入',value:'+'}]
        type='-'
        interval='day'
    }
</script>

<style lang="scss" scoped>
    ::v-deep .type-item{
        background: #ffffff;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
</style>