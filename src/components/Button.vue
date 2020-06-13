<template>
        <button @click="$emit('click',$event)"><slot /></button>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    @Component
    export default class Button extends Vue {
        name: ""
    }
</script>

<style lang="scss" scoped>
    button{
        background: #767676;
        border: none;
        color: #ffffff;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px  ;
    }
</style>