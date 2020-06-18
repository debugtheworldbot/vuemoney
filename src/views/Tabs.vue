<template>
    <div>
        <ul class="tabs">
            <li v-for="tab in dataSource" :key="tab.value"
            @click="select(tab)"
            :class="{selected: tab.value===value,[clearPrefix+'-item']: clearPrefix}">{{tab.text}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator'
    type dataSourceItem= {text:string,value:string}

    @Component
    export default class Tabs extends Vue {
        @Prop({required:true,type:Array})
        dataSource!:dataSourceItem[]
        @Prop(String)
        readonly value!:string
        @Prop(String)
        clearPrefix?:string
        select(tab:dataSourceItem){
            this.$emit('update:value',tab.value)
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>