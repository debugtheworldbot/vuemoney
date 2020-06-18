<template>
    <div>
        <Layout>
            <Tabs clear-prefix="types" :data-source="arr2" :value.sync="yyy"/>
            <Tabs clear-prefix="tabs" :data-source="arr1" :value.sync="zzz"/>
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
        arr1=[{text:'day',value:'day'},{text:'week',value:'week'},{text:'mouth',value:'mouth'}]
        arr2=[{text:'支出',value:'-'},{text:'收入',value:'+'}]
        yyy='-'
        zzz='day'
    }
</script>

<style lang="scss" scoped>
    ::v-deep li{
        background: #ffffff;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
</style>